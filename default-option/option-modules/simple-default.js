import { DefaultOption } from '../default-option.js';

import { languagePtBrDatatable } from '../../language/language-modules/language-pt-br.datatable.js';

/**
 *  SimpleDefault
 *  Set following datatable settings
 *      @responsive     - true
 *      @processing     - true
 *      @language       - pt-BR
 *
 */
export class SimpleDefault extends DefaultOption {

    constructor( newOptions = null ) {

        super( {
            responsive: true,
            processing: true,
            language: languagePtBrDatatable,
        }, newOptions );

    }

}

export const customSimpleDefault = ( newOptions ) => {

    return new SimpleDefault( newOptions )

}