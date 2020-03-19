export const percentColumnSort = {
    percentSort: {
        "percent-pre": function (a) {
            a = $(a).text()
            a = (a === "-" || a === "") ? 0 : a.replace(/\./g, "").replace(',', '.');
            return parseFloat(a);
        },

        "percent-asc": function (a, b) {
            return a - b;
        },

        "percent-desc": function (a, b) {
            return b - a;
        },
    },
}