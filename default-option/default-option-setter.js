

/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { DefaultOption } from './default-option.js'

/**
 * Get an class that extends DefaultObject and return an instance of it. If is given an instance of a class that extends
 * DefaultObject, return it without changing it.
 * @private
 * @throws Error - Throws Exception if parameter given is not a class or instance that extends DefaultObject.
 * @param defaultOption - class that extends DefaultOption | Object instanceof DefaultOption
 * @returns {instanceof DefaultOption} - An instance of DefaultOption
 */
function defaultOptionsFactory( defaultOption ) {

    let option = defaultOption;

    if (!( option instanceof DefaultOption )) {

        if (DefaultOption.isPrototypeOf( option )) {

            option = DefaultOption.getInstance( option );

        } else {

            throw new Error( 'Invalid argument. Parameter must be a instance of DefaultOptions or a class that extended it.' )

        }

    }

    return option;

}

/**
 * Extend default config options for datatable based on given DefaultOptions.
 * DefaultOptions modules are found in '/default-option/default-option/modules'.
 * Exemples:
 *  @example 1 - Using with class name.
 *    import { SimpleDefault } from '/default-option/default-option-modules.js'
 *    extendDatatableDefaultOptions( SimpleDefault )
 *    // Will Add the following options to default datatable configuration
 *       returns {
 *           responsive: true
 *           processing: true
 *           language: languagePtBrDatatable
 *       }
 *
 * @example 2 - Extending class attributes
 *     import { customSimpleDefault } from '/default-option/default-option-modules.js'
 *     extendDatatableDefaultOptions( customSimpleDefault( { exampleKey: 'exampleOption', columns: [{ title: 'columnTitleExample' }] } ) )
 *     // Will Add the following options to default datatable configuration
 *       returns {
 *          responsive: true
 *          processing: true
 *          language: languagePtBrDatatable
 *          exampleKey: 'exampleOption',
 *          columns: [
 *               { title: 'columnTitleExample' },
 *              ],
 *       }
 * @throws Error - Throws Exception if parameter given is not a class or instance that extends DefaultObject.
 * @param typeof DefaultOption
 * @returns {*|void}
 * @see {@link SimpleDefault} and {@link customSimpleDefault} for they definition
 */
export const extendDatatableDefaultOptions = ( defaultOption ) => {

    $.extend( true, $.fn.dataTable.defaults, defaultOptionsFactory( defaultOption ) );

};

/**
 * !! Caution may cause several problems. Only use if you know what are you doing !!
 * Completetly override default Datatable seetings with new config options on given DefaultOptions.
 * @param defaultOption
 * @see {@link https://datatables.net/reference/option/| Datatable Options}
 */
export const overrideDatatableDefaultOptions = ( defaultOption ) => {

    $.fn.dataTable.defaults = defaultOptionsFactory( defaultOption );

};