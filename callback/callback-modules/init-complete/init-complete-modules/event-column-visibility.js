/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * Make the table readjusts widths of columns every time the visibility of columns change.<br>
 * Register columnVisibility event from the caller table context.<br>
 * To be used as {@link joinCallBackMethods} paramater.
 * @see {@link joinCallbackMethods}
 * @see {@link https://datatables.net/reference/option/| Datatable Options - Callbacks}
 * @see {@link https://datatables.net/reference/option/initComplete| callBack InitComplete}
 */
export const addColumnVisibilityEvent = () => {

    $( this ).on( 'column-visibility.dt', function () {

        $( this )
            .dataTable()
            .api()
            .columns
            .adjust()
            .draw();

    } )

};