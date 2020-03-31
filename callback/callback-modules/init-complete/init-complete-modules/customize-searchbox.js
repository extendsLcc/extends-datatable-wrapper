/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

export const customizeSearchBox = ( datatableApi ) => {

    $( datatableApi.aanFeatures.f )
        .addClass( 'w-100' )
        .find( 'label' )
        .addClass( 'kt-input-icon kt-input-icon--left input-group' )
        .append( $( `
                    <span class="kt-input-icon__icon kt-input-icon__icon--left pl-3">
                        <span>
                            <i class="la la-search" style="z-index: 1;"></i>
                        </span>
                    </span>
                ` ) )
        .find( 'input' )
        .toggleClass( 'form-control-sm form-control-md' )
        .css( { 'z-index': 1, 'max-width': '100%' } );

};