/**
 * Column Format Modules
 * Modules for format the datatable value in one specific pattern
 */

/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export {
    formatColumnCurrency, formatColumnDate, formatColumnInteger, formatColumnPercent
} from './column/column-format/column-format-modules.js'

/**
 * Datatable ColumnFooter Modules
 * Modules to build datatable column footer by values of all rows in that column
 */
export { footerSumCurrencyColumn } from './column/column-footer/column-footer-modules.js'

/**
 * Datatable Sort Column Modules
 * Modules for sorting columns fomated in one specific pattern
 */
export { currencySortColumn, dateSortColumn, percentSortColumn } from './column/column-sort/column-sort-modules.js'

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
export { extendDatatableDefaultOptions } from 'default-option/default-option-setter.js'