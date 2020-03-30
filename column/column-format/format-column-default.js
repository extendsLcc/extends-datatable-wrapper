/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { extendColumnSort } from '../column-sort/column-sort-initialize.js';

export class FormatColumnDefault {

    /**
     * Create a columnDefsOptions object parameters given.
     * @param targetColumns - columnDefs.targets
     * @param defaultValue - DefaultValue of render method if columns.data is invalid.
     * @param columnDefsOptions - New ColumnDefs options to be added.
     * @param sortColumnModule - Optional - sortColumnModule to be applied if the format needs a specific sort logic.
     * @return ColumnDefsOptions
     * @see {@link https://datatables.net/reference/option/columnDefs| ColumnDefs}
     * @see {@link https://datatables.net/reference/option/columnDefs.targets| ColumnDefs.targets }
     * @see {@link https://datatables.net/reference/option/columns.render| Columns.render }
     */
    constructor( targetColumns, defaultValue, columnDefsOptions, sortColumnModule ) {

        this.defaultValue = defaultValue;
        this.targetColumns = targetColumns;
        this.render = this.renderMethod;
        Object.assign( this, columnDefsOptions );

        if (sortColumnModule) {

            // if there is no declared sort method type format, then add it the sortColumnModule parameter to datatable sort methods.
            jQuery.fn.dataTableExt.oSort[this.type + '-pre'] || extendColumnSort( sortColumnModule );

        }

    }

    renderMethod() {
        console.warn( 'Attention: This method should be overridden by child class!!' );
    }

}