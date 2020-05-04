/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { FormatColumnDefault } from '../format-column-default.js';
import { sortColumnInteger } from '../../column-sort/sort-modules/integer-sort.js';

class FormatColumnInteger extends FormatColumnDefault {

    constructor( targetColumns, defaultValue ) {

        super( targetColumns, defaultValue, {
            type: 'integer',
        }, sortColumnInteger );

    }

    renderMethod( columnValue ) {

        console.log( arguments );
        console.log( this );

        const integer = parseInt( columnValue );

        // @see unary operator {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus}
        return +( integer !== 0 /*if false yields 0*/ ) && integer || this.defaultValue;

    }

}

/**
 * Format targeted Columns in integer format, if fail to convert to int '0' will be rendered
 * @example
 *  $( '#id' ).Datatable({
 *      column:[
 *          {data: 'someText'}
 *          {data: 'someInteger', className:'integer-format'}
 *          {data: 'anotherText'}
 *          {data: 'anotherInteger', className:'integer-format'}
 *      ],
 *      columnDefs: [
 *          formatColumnInteger( [2, 4] );
 *          // OR
 *          // formatColumnInteger( '.integer-format' );
 *      ]
 *  })
 * @param targetColumns - ColumnDefs.target to be formatted.
 * @param defaultValue - Default = 0. Value to appear if data retrieved from column is null | undefined | cannot be formatted.
 * @returns FormatColumnInteger
 * @see {@link https://datatables.net/reference/option/columnDefs| ColumnDefs}
 * @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs Targets}
 * @see {@link https://datatables.net/reference/option/columns.render| Columns.Render}
 */
export const formatColumnInteger = ( targetColumns, defaultValue = 0 ) => new FormatColumnInteger( targetColumns, defaultValue );