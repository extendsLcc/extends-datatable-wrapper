/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * Returns a method that will call all methods inside given in array parameter in sequence.<br>
 * Should be used to group multiple functions in the same datatable callBack.
 * @example 1
 *  const requestData = () => {
 *      $.ajax( requestParams )
 *          .success( addDataToTable )
 *          .fail( failAlertMsg )
 *  }
 *
 *  $( '#table' ).Datatable({
 *      initComplete: joinCallbackMethods( [
 *          () => { alert( 'Table init has ben finished!' ) },
 *          requestData
 *      ] );
 *  });
 *  // After Datatable Init, will trigger the alert message then will send the ajax request
 * @param methods[]
 * @return {function(datatableSettings)}
 * @see {@link https://datatables.net/reference/option/| Datatable Options - Callbacks}
 * @see {@link https://datatables.net/reference/option/initComplete| callBack InitComplete}
 */
export const joinCallbackMethods = ( methods ) => {

    if (!Array.isArray( methods )) {

        throw new Error( `Methods must be an array` );

    }

    for (let method of methods) {

        if (typeof method !== 'function') {

            throw new Error( `Items of the array methods must be a function, you passed ${ typeof method } ${ method }.` );

        }

    }

    return function ( datatableSettings ) {

        for (let method of methods) {

            method.call( this, datatableSettings );

        }

    };

};