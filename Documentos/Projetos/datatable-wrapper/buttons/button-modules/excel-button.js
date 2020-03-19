import {DefaultButton} from "../default-button.js";

class ExcelButton extends DefaultButton {

    constructor(buttonOptions) {

        super(buttonOptions)

    }

}

export const excelButton = new ExcelButton({
    extend: 'excelHtml5',
    text: 'Excel'
});
