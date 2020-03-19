import {DefaultButton} from "../default-button.js";

class PrintButton extends DefaultButton {

    constructor(buttonOptions) {

        super(buttonOptions);

    }

}

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