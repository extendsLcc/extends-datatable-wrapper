// TODO import maskMoney instead of referring it directly - requires moduling AppUtil
// TODO this is actually a Datatable callback 'footerCallback' check the consistency of file location
// TODO analyze code to optimize

/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * Collect all rows currency values and sum in footer of specified column.
 * @param targetColumns - Columns to be summed
 * @example
 *  $( '#id" ).Datatable({
 *      column:[
 *          {data: 'someText'}
 *          {data: 'someMoneyValue' className:'money-format'}
 *          {data: 'anotherText'}
 *          {data: 'AnotherMoneyValue' className:'money-format'}
 *      ],
 *      footerCallback: sumCurrencyColumnFooter( [2, 4] );
 *      columnDefs: [
 *          sumCurrencyColumnFooter( [2, 4] );
 *      ]
 *  })
 *  @see {@link https://datatables.net/reference/option/footerCallback| FooterCallback}
 *  @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs Targets}
 */
export const sumCurrencyColumnFooter = ( targetColumns) => {
    return function (row, data, start, end, display, retorno) {
        var column = targetColumns;
        var api = this.api(),
            data;
        for (var x = 0; x < column.length; x++) {
            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === "string"
                    ? i.replace(/[\R$,]/g, "") * 1
                    : typeof i === "number"
                        ? i
                        : 0;
            };
            // Total over all pages
            var total = api
                .column(column[x], {page: "current"})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(column[x]).footer()).html(
                AppUtil.maskMoney(total)
            );
        }
    }
};