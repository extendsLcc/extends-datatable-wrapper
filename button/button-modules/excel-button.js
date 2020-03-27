/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import {DefaultButton} from "../default-button.js";

class ExcelButton extends DefaultButton {

    constructor(buttonOptions) {

        super(buttonOptions)

    }

}

 /**
  * This button provides the end user with the ability to save the table's data into a locally created Excel XLSX file.
  *  @example
  *  // Definition
  *  const excelButton = {
  *     extend: 'excelHtml5',
  *     text: 'Excel'
  *  }
  * @see {@link https://datatables.net/reference/button/| Datatable Button}, and {@link https://datatables.net/reference/button/excelHtml5| Button exelHtml5 }
  */
export const excelButton = new ExcelButton({
    extend: 'excelHtml5',
    text: 'Excel'
});
