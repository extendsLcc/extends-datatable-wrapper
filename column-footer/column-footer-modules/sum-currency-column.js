// TODO import maskMoney istead of refering it directly - requires moduling AppUtil

/**
 * Collect all rows currency values and sum in footer of specified column
 * @param targetColumns - Columns to be summed
 */
export const footerSumCurrencyColumn = (targetColumns) => {
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