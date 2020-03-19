/**
 * @author - Lucas LCC
 */

import {currencyColumnSort, dateColumnSort, percentColumnSort} from "./column-sort/column-sort-modules.js";
import {datatablePtBr} from "./language/language-modules/datatable.pt-br.js";

import {columnVisibilityButton, printButton, pdfButton, excelButton} from "./buttons/button-modules.js";

"use strict";
var DatatableDefault = function () {


    console.log("module exec")

    // GET ATTRIBUTES AND PUBLIC METHODS
    return {

        columnFormat: {
            /**
             * Format targeted columns to BRL currency format.
             *  If target column has null value then return formated 0.
             * @param {columnsTarget} targetColumns array of collumns to be formated
             */
            curencyFormatColumn: function (targetColumns) {
                return {
                    targets: targetColumns,
                    type: 'formatted-num',
                    render: function (data) {

                        var value = {
                            data
                        };
                        return (value['data'] != null) ? AppUtil.maskMoney(value['data']) : AppUtil.maskMoney(0);
                    },
                }
            },

            /**
             * Format targeted columns to number percent format.
             *  If target column has null value then return formated 0.
             * @param {targetColumns} targetColumns array of collumns to be formated
             */
            percentFormatColumn: function (targetColumns) {
                return {
                    targets: targetColumns,
                    type: 'percent',
                    render: function (data) {
                        data = data === null ? 0 : data;
                        return '<span class=' + (data >= 100 ? 'text-success' : 'text-danger') + '>' + AppUtil.maskPercent(data) + '</span>';
                    }
                }
            },

            /**
             * Format targeted columns from dateFormat 'YYYY-MM-DD' to dateFormat 'DD/MM/YYYY'
             * @param {targetColumns} targetColumns array of collumns to be formated
             */
            dateFormatColumn: function (targetColumns) {
                return {
                    targets: targetColumns,
                    type: 'date',
                    render: function (whichDate) {
                        return AppUtil.formatDate(whichDate.date);
                    }
                };
            },

            /**
             * Format targeted Columns in integer format, if fail to convert to int return 0
             * @param {*} targetColumns
             */
            integerFormatColumn: function (targetColumns) {
                return {
                    targets: targetColumns,
                    type: 'integer',
                    render: function (data) {
                        let integerValue = parseInt(data)
                        return integerValue ? integerValue : 0;
                    }
                }
            }

        },

        /**
         * Collect all row currency values and sum in footer of specified column
         * @param targetColumn - Columns to be summed
         */
        footerSumCurrencyColumn: (targetColumns) => {
            return function (row, data, start, end, display, retorno) {
                var column = targetColumns;
                var api = this.api(),
                    data;
                for (var x = 0; x < column.length; x++) {
                    // Remove the formatting to get integer data for summation
                    var intVal = function (i) {
                        return typeof i === "string"
                            ? i.replace(/[\R$,]/g, "") * 1
                            : typeof i === "number"
                                ? i
                                : 0;
                    };
                    // Total over all pages
                    var total = api
                        .column(column[x], {page: "current"})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    // Update footer
                    $(api.column(column[x]).footer()).html(
                        AppUtil.maskMoney(total)
                    );
                }
            }
        },

        // @deprecated
        defaultButtonsEvents: function () {

        },

        /**
         * Group default datatable options with new ones passed by parameter
         * @param newAttributes new parameters to be added to default options to datatable initialization
         * @returns {DatatableOptions} Default and parameters options grouped as Datatable Option Object
         */
        addToDefaultSetup: function (newAttributes) {


            let pdfbtn = [
                columnVisibilityButton,
                printButton,
                pdfButton,
                excelButton,
            ];
            console.log(printButton)
            console.log(pdfbtn);
            let defaultSetup = {
                responsive: true,
                processing: true,
                dom: `<'row'<'col-sm-6 col-md-5 col-lg-4 text-left mb-2 mb-md-0'f><'col-sm-6 col-md-7 col-lg-8 text-right'B>>
            <'row'<'col-sm-12'tr>>
            <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
                buttons: pdfbtn,
                language: defaults.language,
                initComplete: defaults.defaultSearchButton,
                lengthMenu: [
                    [10, 25, 50, 100, 200, -1],
                    [10, 25, 50, 100, 200, "Todos"]
                ],
            };

            return Object.assign({}, defaultSetup, newAttributes);

        }

    }

}
();

$.extend(true, $.fn.dataTable.defaults, DatatableDefault.addToDefaultSetup({}))