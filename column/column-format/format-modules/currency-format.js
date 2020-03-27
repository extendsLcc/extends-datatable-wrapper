/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { FormatColumnDefault } from "../format-column-default.js";

class FormatColumnCurrency extends FormatColumnDefault{

    constructor( targetColumns, defaultValue ) {

        super( targetColumns, defaultValue );
        Object.assign( this,   {
            type: 'formatted-num',
            render: this.renderMethod
        } );

    }

    renderMethod(columnValue, defaultValue = this.defaultValue) {

        //  TODO moduling App Util
        return AppUtil.maskMoney( columnValue || defaultValue );

    }

}


/**
 * Render the targeted columns to BRL currency format.
 * If target column has null or undefined value then return defaultValue parameter.
 * @example
 *  $( '#id' ).Datatable({
 *      column:[
 *          {data: 'someText'}
 *          {data: 'someFloatMoney', className:'money-format'}
 *          {data: 'anotherText'}
 *          {data: 'anotherFloatMoney', className:'money-format'}
 *      ],
 *      columnDefs: [
 *          formatColumnCurrency( [2, 4] );
 *          // OR
 *          // formatColumnCurrency( '.money-format' );
 *      ]
 *  })
 * @param targetColumns - ColumnDefs.target to be formatted.
 * @param defaultValue - Default = 0. Value to appear if data retrieved from column is null | undefined | cannot be formatted.
 * @returns FormatColumnCurrency
 * @see {@link https://datatables.net/reference/option/columnDefs| ColumnDefs}
 * @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs Targets}
 * @see {@link https://datatables.net/reference/option/columns.render| Columns.Render}
 */
export const formatColumnCurrency = ( targetColumns, /** number?| 0 */defaultValue = 0) => new FormatColumnCurrency( targetColumns, defaultValue );