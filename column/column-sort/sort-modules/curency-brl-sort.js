/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export const currencySortColumn = {
    currencyBrlSort: {
        "formatted-num-pre": function (a) {
            a = (a === "-" || a === "") ? 0 : a.replace(/[\s\.\$R]/g, "").replace(',', '.');
            return parseFloat(a);
        },

        "formatted-num-asc": function (a, b) {
            return a - b;
        },

        "formatted-num-desc": function (a, b) {
            return b - a;
        }
    }
};