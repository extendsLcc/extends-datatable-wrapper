/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

/**
 * This class exist to make his sub class inherit the following Button options parameters.
 * @example
 *  {
 *      columns: [":not( .d-print-none ):visible", {search: 'applied', page: 'current'}],
 *      rows: [":not( .d-print-none ):visible", {search: 'applied', page: 'current'}],
 *  }
 * @see {@link https://datatables.net/extensions/buttons/| Buttons }
 */
export class DefaultButton {

    /**
     *
     * @param buttonOptions - Literal Object containing {@link https://datatables.net/extensions/buttons/config| Button Options paramaters}
     * @throws {Error} if the parameter given to constructor is not an object.
     * @see {@link https://datatables.net/extensions/buttons/| Buttons }
     */
    constructor( buttonOptions ) {

        if ( typeof buttonOptions !== 'object'){

            throw new Error( `Options should be an object, you passed ${ typeof buttonOptions } ${buttonOptions}.` )

        }

        const { exportOptions: newExportOptions } = buttonOptions;
        Object.assign( this, buttonOptions );
        this.exportOptions = {
            columns: [":not( .d-print-none ):visible", {search: 'applied', page: 'current'}],
            rows: [":not( .d-print-none ):visible", {search: 'applied', page: 'current'}],
            ...newExportOptions
        }
        Object.freeze( this );
        // Buttons are configurations settings, and should not be changed after initialization
        // TODO review the possibility of mutable configurations

    }

}