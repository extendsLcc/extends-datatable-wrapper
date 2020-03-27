/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export const sortColumnDate = {
    'date-format-pre': function ( a ) {
        // TODO IMPORT MOMENT
        return moment( a, 'DD/MM/YYYY' ).toDate().getTime();
    },

    'date-format-asc': function ( a, b ) {
        return a - b;
    },

    'date-format-desc': function ( a, b ) {
        return b - a;
    }
};