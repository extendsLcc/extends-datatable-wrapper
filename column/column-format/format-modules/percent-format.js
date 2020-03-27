/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { FormatColumnDefault } from '../format-column-default.js';

class FormatColumnPercent extends FormatColumnDefault {

    constructor( targetColumns, defaultValue ) {

        super( targetColumns, defaultValue );
        Object.assign( this, {
            type: 'percent',
            render: this.renderMethod
        } );

    }

    renderMethod( columnValue, defaultValue = this.defaultValue ) {

        //  TODO moduling App Util
        return `<span class='${ data >= 100 ? 'text-success' : 'text-danger' }'> ${ AppUtil.maskPercent( data || defaultValue ) } </span>`;

    }

}

/**
 * Format targeted columns to number percent format.
 * @example
 *  $( '#id' ).Datatable({
 *      column:[
 *          {data: 'someText'}
 *          {data: 'somePercent', className:'percent-format'}
 *          {data: 'anotherText'}
 *          {data: 'anotherPercent', className:'percent-format'}
 *      ],
 *      columnDefs: [
 *          formatColumnPercent( [2, 4] );
 *          // OR
 *          // formatColumnPercent( '.percent-format' );
 *      ]
 *  })
 * @param targetColumns - ColumnDefs.target to be formatted
 * @param defaultValue - Default = 0. Value to appear if data retrieved from column is null | undefined | cannot be formatted.
 * @returns FormatColumnPercent
 * @see {@link https://datatables.net/reference/option/columnDefs| ColumnDefs}
 * @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs Targets}
 * @see {@link https://datatables.net/reference/option/columns.render| Columns.Render}
 */
export const formatColumnPercent = ( targetColumns, defaultValue = 0) => new FormatColumnPercent( targetColumns, defaultValue );