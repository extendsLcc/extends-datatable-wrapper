/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export const sortColumnInteger = {
    'integer-pre': function ( a ) {
        // consider 0 if not value exists
        return parseInt( a.innerText || 0 );
    },

    'integer-asc': function ( a, b ) {
        return a - b;
    },

    'integer-desc': function ( a, b ) {
        return b - a;
    },
};