/**
 *  ColumnFormatDefault
 *  Existis only for prevent the creating of a columnFormat without a render method
 */
export class ColumnFormatDefault {

    renderMethod( columnValue ){
        return columnValue;
    }

}