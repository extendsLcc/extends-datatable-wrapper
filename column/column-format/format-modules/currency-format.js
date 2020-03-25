import { ColumnFormatDefault } from "../column-format-default.js";

class CurrencyFormat extends ColumnFormatDefault{

    constructor( targetColumns ) {

        super();
        Object.assign( this,   {
            targets: targetColumns,
            type: 'formatted-num',
            render: this.renderMethod
        } );

    }

    renderMethod(columnValue) {

        //  TODO moduling App Util
        return AppUtil.maskMoney( columnValue || 0 );

    }

}


/**
 * Format targeted columns to BRL currency format.
 *  If target column has null value then return formated 0.
 * @param {columnsTarget} targetColumns array of collumns to be formated
 */
export const currencyFormatColumn = targetColumns => new CurrencyFormat( targetColumns );