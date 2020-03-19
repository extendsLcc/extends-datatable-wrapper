import { ColumnFormatDefault } from "../column-format-default.js";

class IntegerFormat extends ColumnFormatDefault{

    constructor( targetColumns ) {

        super();
        Object.assign( this,   {
            targets: targetColumns,
            type: 'date',
            render: this.renderMethod
        } );

    }

    renderMethod(columnValue) {

        return parseInt( columnValue ) || 0;

    }

}

/**
 * Format targeted Columns in integer format, if fail to convert to int return 0
 * @param {*} targetColumns
 */
export const integerFormatColumn = targetColumns => new IntegerFormat( targetColumns );