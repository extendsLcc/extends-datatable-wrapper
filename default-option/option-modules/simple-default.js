/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { DefaultOption } from '../default-option.js';

import { languagePtBrDatatable } from '../../language/language-modules/language-pt-br.datatable.js';

/**
 * Returns the defined following Datatable Options parameters.
 * @example return {
 *      responsive: true,
 *      processing: true,
 *      language:   pt-BR
 *   };
 *  @see {@link https://datatables.net/reference/option/| DataTable Options}
 */
export class SimpleDefault extends DefaultOption {

    constructor( newOptions = null ) {

        super( {
            responsive: true,
            processing: true,
            language: languagePtBrDatatable,
        }, newOptions );

    }

}

/**
 * @function customSimpleDefault
 * Returns a merge of the given Datatable Options with the defined following Datatable Options parameters.
 * @example return {
 *      responsive: true,
 *      processing: true,
 *      language:   pt-BR,
 *      ...newOptions
 *   };
 * @param newOptions - A literal Object containing Datatable Options parameters.
 * @returns {DefaultOption} -
 * @see {@link https://datatables.net/reference/option/| DataTable Options}
 */
export const customSimpleDefault = ( newOptions ) => {

    return new SimpleDefault( newOptions )

};