/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import {DefaultButton} from "../default-button.js";

class PrintButton extends DefaultButton {

    constructor(buttonOptions) {

        super(buttonOptions);

    }

}


/**
 * The print view button will take a copy of the data displayed in a table (based on the selector options given in the exportOptions parameter) and construct a new, temporary, table that is shown in a new window. The browser's print command is then automatically invoked (although this can be disabled - see the autoPrint option below) and finally the window closed when the print action has been completed or cancelled by the end user.
 *  @example
 *  // Definition
 *  const printButton = {
 *      extend: 'print',
 *      text: 'Imprimir',
 *      exportOptions: {
 *          stripHtml: false,
 *      },
 *      customize: function()... //copyStyles in the new Window
 *
 *  }
 * @see {@link https://datatables.net/reference/button/| Datatable Button}, and {@link https://datatables.net/reference/button/print| Button Print}
 */
export const printButton = new PrintButton({
    extend: 'print',
    text: 'Imprimir',
    exportOptions: {
        stripHtml: false,
    },
    customize: function (popUp) {

        $(popUp.document.head)
            .append($('link[href$=".css"]').add('style').clone())

    }
});