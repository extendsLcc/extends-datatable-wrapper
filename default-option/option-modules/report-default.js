/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { SimpleDefault } from './simple-default.js';

import { columnVisibilityButton, printButton, excelButton, pdfButton } from '../../button/button-modules.js';
import { joinCallbackMethods } from '../../callback/callback-modules/callback-join.js';
import { customizeSearchBox } from '../../callback/callback-modules/init-complete/init-complete-modules/customize-searchbox.js';
import { addColumnVisibilityEvent } from '../../callback/callback-modules/init-complete/init-complete-modules/event-column-visibility.js';

/**
 * Returns the defined following Datatable Options parameters.
 * @example
 * return {
 *      responsive: true,
 *      processing: true,
 *      language:   pt-BR,
 *      buttons: [
 *          columnVisibityButton,
 *          printButton,
 *          excelButton,
 *          pdfButton
 *      ]
 *      lengthMenu: [
 *          [10, 25, 50, 100, 200, -1]
 *          [10, 25, 50, 100, 200, 'Todos']
 *      ],
 *      dom: 'fBtrilp'
 *   };
 * @see {@link https://datatables.net/reference/option/| DataTable Options}
 * @see {@link https://datatables.net/reference/option/dom| DataTable option dom}
 * @see {@link https://datatables.net/reference/option/buttons| DataTable option buttons}
 */
export class ReportDefault extends SimpleDefault {

    constructor( newOptions ) {

        super( {
            dom: `<'row'<'#datatable-filter-container .col-12 col-sm-6 col-md-5 col-lg-4 text-left mb-2 mb-md-0'f><'col-sm-6 col-md-7 col-lg-8 text-right'B>>
                <'row'<'col-sm-12'tr>>
                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
            buttons: [
                columnVisibilityButton,
                printButton,
                excelButton,
                pdfButton
            ],
            initComplete: joinCallbackMethods( [ customizeSearchBox, addColumnVisibilityEvent] ),
            lengthMenu: [
                [10, 25, 50, 100, 200, -1],
                [10, 25, 50, 100, 200, 'Todos']
            ],

        }, newOptions );

    }

}


/**
 * @function customSimpleDefault
 * Returns a merge of the given Datatable Options with the defined following Datatable Options parameters.
 * @example
 * return {
 *      responsive: true,
 *      processing: true,
 *      language:   pt-BR,
 *      buttons: [
 *          columnVisibityButton,
 *          printButton,
 *          excelButton,
 *          pdfButton
 *      ]
 *      lengthMenu: [
 *          [10, 25, 50, 100, 200, -1]
 *          [10, 25, 50, 100, 200, 'Todos']
 *      ],
 *      dom: 'fBtrilp'
 *      ...newOptions
 *   };
 * @param newOptions - A literal Object containing Datatable Options parameters.
 * @returns {DefaultOption} -
 * @see {@link https://datatables.net/reference/option/| DataTable Options}
 * @see {@link https://datatables.net/reference/option/dom| DataTable option dom}
 * @see {@link https://datatables.net/reference/option/buttons| DataTable option buttons}
 */
export const customReportDefault = ( newOptions ) => {

    return new ReportDefault( newOptions )

};