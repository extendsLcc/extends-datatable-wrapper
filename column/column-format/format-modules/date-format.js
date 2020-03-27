/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { FormatColumnDefault } from "../format-column-default.js";
import { sortColumnDate } from '../../column-sort/sort-modules/date-sort.js';

class FormatColumnDate extends FormatColumnDefault{

    constructor( targetColumns, defaultValue ) {

        super(targetColumns, defaultValue, {
            type: 'date-format',
        }, sortColumnDate );

    }

    renderMethod(columnValue, defaultValue = this.defaultValue) {

        if ( !columnValue.date ){

            return defaultValue;

        }

        //  TODO moduling App Util
        return AppUtil.formatDate( columnValue.date );

    }

}

/**
 * Format targeted columns from dateFormat 'YYYY-MM-DD' to dateFormat 'DD/MM/YYYY'
 * @example
 *  $( '#id' ).Datatable({
 *      column:[
 *          {data: 'someText'}
 *          {data: 'someDate', className:'date-format'}
 *          {data: 'anotherText'}
 *          {data: 'anotherDate', className:'date-format'}
 *      ],
 *      columnDefs: [
 *          formatColumnDate( [2, 4] );
 *          // OR
 *          // formatColumnDate( '.date-format' );
 *      ]
 *  })
 * @param targetColumns - targetColumns array of columns to be formatted.
 * @param - Default = '--/--/----'. Value to appear if data retrieved from column is null | undefined.
 * @return FormatColumnDate
 * @see {@link https://datatables.net/reference/option/columnDefs| ColumnDefs}
 * @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs Targets}
 * @see {@link https://datatables.net/reference/option/columns.render| Columns.Render}
 */
export const formatColumnDate = ( targetColumns, defaultValue = '--/--/----') => new FormatColumnDate( targetColumns, defaultValue );