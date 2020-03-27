/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import {exportTablePdf, PDF} from "../../plugin/export-table-pdf/export-table-pdf.js";
import {DefaultButton} from "../default-button.js";

class PdfButton extends DefaultButton {

    constructor(buttonOptions) {

        super(buttonOptions);

    }

}


/**
 * This button will create and save a PDF file from the table's data.
 *  @example
 *  // Definition
 *  const pdfButton = {
 *      name: 'pdfExport',
 *      text: 'PDF',
 *      action: exportTablePdf.buildPdf(
 *          pageOptions: { PDF.Orientation.LANDSCAPE, PDF.Unit.PIXEL, PDF.Format.A4 }
 *      )
 *  }
 * @see {@link https://datatables.net/reference/button/| Datatable Button} }
 */
export const pdfButton = new PdfButton({
    name: 'pdfExport',
    text: 'PDF',
    action: function (eventTrigger, dbApi, button, buttonConfig) {

        if (typeof jsPDF === 'undefined') {
            console.warn("Not implemented yet! Work in progress!");
            return;
        }

        const {exportOptions: {columns}} = buttonConfig;
        const pageOptions = {
            orientation: PDF.Orientation.LANDSCAPE,
            measureUnit: PDF.Unit.PIXEL,
            pageFormat: PDF.Format.A4
        };

        let pdfDocument = exportTablePdf.buildPdf(dbApi, columns, pageOptions);

        window.open(pdfDocument.output('bloburl'), '_blank');

    }
});