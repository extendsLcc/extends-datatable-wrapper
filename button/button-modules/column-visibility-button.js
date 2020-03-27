/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * This button will create a collection button that when activated will show a list of the columns in the table and provide the end user with the ability to toggle column visibility to suit their own requirements.
 *  @example
 *  // Definition
 *  const columnVisibilityButton = {
 *      extend: 'colvis',
 *      text: 'Colunas',
 *      columns: ':not(.noVis)',
 *  }
 * @see {@link https://datatables.net/reference/button/| Datatable Button}, and {@link https://datatables.net/reference/button/colvis| Button Colvis}
 */

export const columnVisibilityButton = {
    extend: 'colvis',
    text: 'Colunas',
    columns: ':not(.noVis)',
};