import { DefaultOption } from '../default-option.js';


import { languagePtBrDatatable } from '../../language/language-modules/language-pt-br.datatable.js';

import { columnVisibilityButton, printButton, excelButton, pdfButton } from '../../button/button-modules.js';

/**
 *
 */
export class ReportDefault extends DefaultOption {

    constructor( newOptions = null ) {

        super( {
            responsive: true,
            processing: true,
            dom: `<'row'<'col-sm-6 col-md-5 col-lg-4 text-left mb-2 mb-md-0'f><'col-sm-6 col-md-7 col-lg-8 text-right'B>>
                <'row'<'col-sm-12'tr>>
                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
            buttons: [
                columnVisibilityButton,
                printButton,
                excelButton,
                pdfButton
            ],
            language: languagePtBrDatatable,
            // initComplete: defaults.defaultSearchButton,
            lengthMenu: [
                [10, 25, 50, 100, 200, -1],
                [10, 25, 50, 100, 200, 'Todos']
            ],

        }, newOptions );

    }

}

export const customReportDefault = ( newOptions ) => {

    return new ReportDefault( newOptions )

}