// import { moment } from "../../../../../../plugins/global/plugins.bundle.js";

/**
 *  @project: datatable-wrapper
 *  @author: @extendslcc - <lucas.lcc@hotmail.com>
 */

import "../../libs/jspdf/jspdf.min.js"
import "../../libs/jspdf/jspdf.plugin.autotable.min.js";

import {Orientation} from "./options/pdf-orientation.js";
import {Unit} from "./options/pdf-unit.js";
import {Format} from "./options/pdf-format.js";

export const PDF = Object.freeze({Orientation, Unit, Format} );

const PAGE_COUNT_PATTERN = '{total_pages_count_string}';

export class exportTablePdf {

    static buildPdf(datatableApi, exportableColumns, pdfOptions) {

        const pdfBuilder = new exportTablePdf(datatableApi, exportableColumns, pdfOptions);
        return pdfBuilder.buildDocument();

    }

    constructor(datatableApi, exportableColumns, {orientation, measureUnit, pageFormat}) {

        this.datatableApi = datatableApi;
        this.exportableColumns = datatableApi.columns(exportableColumns);
        this.document = new jsPDF(orientation, measureUnit, pageFormat)

    }

    buildDocument() {

        this.document.autoTable({
            head: this._getTableHeader(),
            body: this._getTableRows(),
            foot: this._getTableFooter(),
            theme: 'striped',
            margin: {top: 50},
            didDrawPage: this._getPageHeader,
            didParseCell: this._processCellRenderResize
        });

        this.document.putTotalPages(PAGE_COUNT_PATTERN);

        return this.document;

    }

    _getTableRows() {

        let tableBody = [];
        this.datatableApi
            .rows({search: 'applied', page:'current'})
            .every(function (rowId, tableLoop, rowLoop) {
                let node = this.node();
                tableBody.push([]);
                $(node).find('td').each(function () {
                    let cellText = $(this).text().trimExcess();
                    tableBody[tableBody.length - 1].push(cellText);
                })
            });

        return tableBody;

    }

    _tableDomMapper(datatableDomIterator) {

        return [
            datatableDomIterator
                .map(headElement => $(headElement).text())
                .toArray()
        ];

    }

    _getExportableColumns() {

        return this.exportableColumns;

    }

    _getTableHeader() {

        return this._tableDomMapper(this._getExportableColumns().header());

    }

    _getTableFooter() {

        return this._tableDomMapper(this._getExportableColumns().footer());

    }

    _getPageHeader = (pdfHookData) => {

        this.document.setFontSize(20);
        this.document.text(window.document.title.trimExcess(), pdfHookData.settings.margin.left + 15, 40);
        this.document.setFontSize(12);
        this.document.text(moment(new Date()).format('DD/MM/YYYY'), pdfHookData.doc.internal.pageSize.getWidth() - 115, 40);
        this.document.setFontSize(10);
        let paginationText = `Página ${this.document.internal.getNumberOfPages()} de ${PAGE_COUNT_PATTERN}`;
        this.document.text(paginationText, pdfHookData.settings.margin.left + 15, this.document.internal.pageSize.getHeight() - 20);

    }

    _processCellRenderResize({doc, cell, column}) {

        if (cell === undefined) {

            return;

        }

        const hasCustomWidth = (typeof cell.styles.cellWidth === 'number');

        if (hasCustomWidth || cell.raw == null || cell.colSpan > 1) {

            return

        }

        let text;

        if (cell.raw instanceof Node) {

            text = cell.raw.innerText;

        } else {

            if (typeof cell.raw == 'object') {

                return;

            } else {

                text = '' + cell.raw;

            }

        }

        let words;

        if (text.includes('R$')) {

            words = [text];

        } else {

            words = text.split(/\s+/);

        }
        // split cell string by spaces

        // calculate longest word width
        const maxWordUnitWidth = words.map(s => Math.floor(doc.getStringUnitWidth(s) * 100) / 100).reduce((a, b) => Math.max(a, b), 0);
        const maxWordWidth = maxWordUnitWidth * (cell.styles.fontSize / doc.internal.scaleFactor)

        const minWidth = cell.padding('horizontal') + maxWordWidth;

        // update minWidth for cell & column
        if (minWidth > cell.minWidth) {

            cell.minWidth = minWidth;

        }

        if (cell.minWidth > cell.wrappedWidth) {

            cell.wrappedWidth = cell.minWidth;

        }

        if (cell.minWidth > column.minWidth) {

            column.minWidth = cell.minWidth;

        }

        if (column.minWidth > column.wrappedWidth) {

            column.wrappedWidth = column.minWidth;

        }

    }

};