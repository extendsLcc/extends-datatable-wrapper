import { ColumnFormatDefault } from "../column-format-default.js";

class DateFormat extends ColumnFormatDefault{

    constructor( targetColumns ) {

        super();
        Object.assign( this,   {
            targets: targetColumns,
            type: 'date',
            render: this.renderMethod
        } );

    }

    renderMethod(columnValue) {

        //  TODO moduling App Util
        return AppUtil.formatDate( columnValue.date );

    }

}

/**
 * Format targeted columns from dateFormat 'YYYY-MM-DD' to dateFormat 'DD/MM/YYYY'
 * @param {targetColumns} targetColumns array of collumns to be formated
 */
export const dateFormatColumn = targetColumns => new DateFormat( targetColumns );