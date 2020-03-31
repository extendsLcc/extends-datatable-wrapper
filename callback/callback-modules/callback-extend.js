/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import { joinCallbackMethods } from './callback-join.js';

/**
 * Returns a method that will call all default methods of given callback,
 * along with methods inside given in array parameter in sequence.<br>
 * Should be used to add new functions along with default functions in the same datatable callback.
 * @example 1
 *  $( '#table' ).Datatable(
 *      initComplete: extendDefaultCallBackMethods( 'initComplete', [
 *          () => { alert( 'Default methods executed, now begin the new ones!' ) },
 *      ] );
 *  });
 * @param methods - Methods that will be added as callback.
 * @param callbackName String name equal to callback that will be extended
 * @return {function(datatableSettings)}
 * @see {@link https://datatables.net/reference/option/| Datatable Options - Callbacks}
 * @see {@link https://datatables.net/reference/option/initComplete| callBack InitComplete}
 * @see {@link joinCallbackMethods}
 */
export const extendDefaultCallbackMethods = ( callBackName, methods ) => {

    const defaultsCallbacks = $.fn.dataTable.defaults[callBackName];

    if (defaultsCallbacks) {

        return joinCallbackMethods( [defaultsCallbacks, ...methods] );

    }

    console.warn( `Not default methods found for ${ callBackName }, you should use @joinCallbackMethods instead!` );
    return joinCallbackMethods( [...methods] );

};