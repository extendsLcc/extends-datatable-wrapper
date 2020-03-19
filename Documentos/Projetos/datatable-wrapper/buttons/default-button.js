export class DefaultButton {

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