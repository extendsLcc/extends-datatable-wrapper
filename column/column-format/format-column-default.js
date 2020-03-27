/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { extendColumnSort } from '../column-sort/column-sort-initialize.js';

/**
 *  @class FormatColumnDefault
 *  Placeholder for default values and polymorphism
 */
export class FormatColumnDefault {

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