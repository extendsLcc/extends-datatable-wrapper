/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export const sortColumnCurrency = {
    'currency-brl-pre': function ( a ) {
        // TODO app util parseCurrency/unformatCurrency
        a = ( a === '-' || a === '' ) ? 0 : a.replace( /[\s\.\$R]/g, '' ).replace( ',', '.' );
        return parseFloat( a );
    },

    'currency-brl-asc': function ( a, b ) {
        return a - b;
    },

    'currency-brl-desc': function ( a, b ) {
        return b - a;
    }
};