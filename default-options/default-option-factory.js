

import { DefaultOption } from './default-option.js'

/**
 * Get an class that extends DefaultObject and return an instance of it. If is given an instance of a class that extends
 * DefaultObject, return it without changing it.
 *
 * @throws Error - Throws Exception if parameter given is not a class or instance that extends DefaultObject.
 * @param defaultOption - class T extends DefaultOption | Object instanceof DefaultOption
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
 * Define default config options for datatable based on given DefaultOptions.
 * DefaultOptions modules are found in '/default-options/default-options/modules'.
 * Exemples:
 *  @example 1 - Using with class name.
 * 1 -  import { SimpleDefault } from '/default-options/default-options-modules.js'
 * 2 -  defineDatatableDefaultOptions( SimpleDefault )
 *  // Will Add the following options to default datatable configuration
 *      @returns {
 *          responsive: true
 *          processing: true
 *          language: languagePtBrDatatable
 *      }
 *
 * @example 2 - Extending class attributes
 * 1 -  import { customSimpleDefault } from '/default-options/default-options-modules.js'
 * 2 -  defineDatatableDefaultOptions( customSimpleDefault( { exampleKey: 'exampleOption', columns: [{ title: 'columnTitleExample' }] } ) )
 *  // Will Add the following options to default datatable configuration
 *      @returns {
 *          responsive: true
 *          processing: true
 *          language: languagePtBrDatatable
 *          exampleKey: 'exampleOption',
 *          columns: [
 *              { title: 'columnTitleExample' },
 *             ],
 *      }
 *
 * @throws Error - Throws Exception if parameter given is not a class or instance that extends DefaultObject.
 * @param typeof DefaultOption -
 * @returns {*|void}
 */
export const defineDatatableDefaultOptions = ( defaultOption ) => {

    $.extend( true, {}, defaultOptionsFactory( defaultOption ) );

};