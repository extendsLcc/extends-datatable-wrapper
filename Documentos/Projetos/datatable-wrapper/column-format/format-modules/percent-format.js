import { ColumnFormatDefault } from "../column-format-default.js";

class PercentFormat extends ColumnFormatDefault{

    constructor( targetColumns ) {

        super();
        Object.assign( this,   {
            targets: targetColumns,
            type: 'percent',
            render: this.renderMethod
        } );

    }

    renderMethod(columnValue) {

        //  TODO moduling App Util
        return `<span class='${data >= 100 ? 'text-success' : 'text-danger'}'> ${AppUtil.maskPercent(data)} </span>`;

    }

}

/**
 * Format targeted columns to number percent format.
 *  If target column has null value then return formated 0.
 * @param {targetColumns} targetColumns array of collumns to be formated
 */
export const percentFormatColumn = targetColumns => new PercentFormat( targetColumns );