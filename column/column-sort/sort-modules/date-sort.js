export const dateSortColumn = {
    dateSort: {
        "date-pre": function (a) {
            return moment(a, "DD/MM/YYYY").toDate().getTime();
        },

        "date-asc": function (a, b) {
            return a - b;
        },

        "date-desc": function (a, b) {
            return b - a;
        }
    }
};