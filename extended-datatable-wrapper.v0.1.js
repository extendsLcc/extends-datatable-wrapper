/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import {currencySortColumn, dateSortColumn, percentSortColumn} from "./column/column-sort/column-sort-modules.js";
import {languagePtBrDatatable} from "./language/language-modules/language-pt-br.datatable.js";

import {columnVisibilityButton, printButton, pdfButton, excelButton} from "./button/button-modules.js";


import { extendDatatableDefaultOptions } from './default-option/default-option-setter.js';

/**
 * This is a JSDOC
 * @param a
 * @returns {number}
 */
function t(a){
    return 1;
};


import { footerSumCurrencyColumn } from './column/column-footer/column-footer-modules/sum-currency-column.js';

footerSumCurrencyColumn()

extendDatatableDefaultOptions()

defaultSearchButton: function (datatableApi) {

    // HARDCODED find current datatable filter option to apply DOM manipulations
    $(this.DataTable().context[0].aanFeatures.f)
        .addClass("w-100")
        .find('label')
        .addClass('kt-input-icon kt-input-icon--left input-group')
        .append($(`
                    <span class="kt-input-icon__icon kt-input-icon__icon--left pl-3">
                        <span>
                            <i class="la la-search" style="z-index: 1;"></i>
                        </span>
                    </span>
                `))
        .find("input")
        .toggleClass("form-control-sm form-control-md")
        .css({"z-index": 1});

    $(this).on('column-visibility.dt', function (event, settings, colum, state) {

        $(this).dataTable().api().columns.adjust().draw();

    })

}

"use strict";
var DatatableDefault = function () {

    return {

        /**
         * Group default datatable options with new ones passed by parameter
         * @param newAttributes new parameters to be added to default options to datatable initialization
         * @returns {DatatableOptions} Default and parameters options grouped as Datatable Option Object
         */
        addToDefaultSetup: function (newAttributes) {

                initComplete: defaults.defaultSearchButton,

            };

            return Object.assign({}, defaultSetup, newAttributes);

        }

    }

}
();

$.extend(true, $.fn.dataTable.defaults, DatatableDefault.addToDefaultSetup({}))