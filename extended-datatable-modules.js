/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * ********************************************************************************************************************
 * !!!! PREFER TO IMPORT FROM INDIVIDUAL FILES OVER THIS ONE !!!!
 * - This file is mostly to serve as reference of existing modules
 * - If any module is imported from this files, all modules are loaded and parsed in the browser!! even unused ones,
 *   and you don't want that!
 * ********************************************************************************************************************
 */

/**
 * Column Format Modules
 * Modules for format the datatable value in one specific pattern
 */

export {
    formatColumnCurrency, formatColumnDate, formatColumnInteger, formatColumnPercent
} from './column/column-format/column-format-modules.js'

/**
 * Datatable ColumnFooter Modules
 * Modules to build datatable column footer by values of all rows in that column
 */
export { sumCurrencyColumnFooter } from './column/column-footer/column-footer-modules.js'

/**
 * Datatable Sort Column Modules
 * Modules for sorting columns fomated in one specific pattern
 */
export { sortColumnCurrency, sortColumnDate, sortColumnPercent } from './column/column-sort/column-sort-modules.js'

/**
 * Datatable Buttons Modules
 * Modules for datatable action button
 */
export { columnVisibilityButton, excelButton, pdfButton, printButton } from './button/button-modules.js'

/**
 * Datatable Language Modules
 * Modules for language options for datatable
 */
export { languagePtBrDatatable } from './language/language-modules.js'


/**
 * Datatable DefaultOptions modules
 * Modules with default configuration parameters for datatable. Main usage through 'extendDatatableDefaultOptions' module
 */
export {
    ReportDefault, customReportDefault, SimpleDefault, customSimpleDefault
} from './default-option/default-options-modules.js'

/**
 *  Contains a single function that accepts a DefaultOptions as parameter do add default configurations parameter for all new created datatables
 */
export { extendDatatableDefaultOptions } from 'default-option/default-option-initialize.js'