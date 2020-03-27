/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export class DefaultOption {

    constructor( defaultOptions = null, newOptions = null ) {

        Object.assign( this, defaultOptions, newOptions );

    }

    static getInstance( defaultOption ){

        return new defaultOption();

    }

}