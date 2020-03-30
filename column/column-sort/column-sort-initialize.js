/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * Add the given datatable sort options rules to default datatable setup.
 * @param sortOption
 * @see {@link https://datatables.net/plug-ins/sorting/| DataTable Sort}
 */
export const extendColumnSort = ( sortOption ) => {

    jQuery.extend( true, jQuery.fn.dataTableExt.oSort, sortOption );

};