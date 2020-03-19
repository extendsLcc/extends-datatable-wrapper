export const pdfExport = {
    name: 'pdfexport',
    text: "PDF",
    action: function (eventTrigger, dbApi, button, buttonConfig) {

        console.log(arguments);
        if (typeof jsPDF === 'undefined') {
            console.warn("Not implemented yet! Work in progress!");
            return;
        }

        const doc = new jsPDF('l', 'pt', 'a4');
        let totalPageExpr = '{total_pages_count_string}';
        doc.setFontSize(5);

        let tableBody = [];
        dbApi
            .rows({search: 'applied'})
            .every(function (rowId, tableLoop, rowLoop) {
                let node = this.node();
                tableBody.push([]);
                $(node).find('td').each(function () {
                    let cellText = $(this).text();
                    tableBody[tableBody.length - 1].push(cellText);
                })
            });

        let tableElementMapper = datatableIterator => {
            return [
                datatableIterator
                    .map(headElement => $(headElement).text())
                    .toArray()
            ];
        }

        let columns = dbApi.columns(":visible");

        let tableHeader = tableElementMapper(columns.header());
        let tableFooter = tableElementMapper(columns.footer());

        doc.autoTable({
            body: tableBody,
            head: tableHeader,
            foot: tableFooter,
            theme: 'striped',
            margin: {top: 50},
            didDrawPage: (hookData) => {
                doc.setFontSize(20);
                doc.text(AppUtil.stringTrimExcess(window.document.title), hookData.settings.margin.left + 15, 40);
                doc.setFontSize(12);
                doc.text(moment(new Date()).format('DD/MM/YYYY'), hookData.doc.internal.pageSize.getWidth() - 115, 40);
                doc.setFontSize(10);
                let paginationText = `Página ${doc.internal.getNumberOfPages()} de ${totalPageExpr}`;
                doc.text(paginationText, hookData.settings.margin.left + 15, doc.internal.pageSize.getHeight() - 20);
            },
            didParseCell: function ({doc, cell, column}) {
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
        });
        doc.putTotalPages(totalPageExpr);
        window.open(doc.output('bloburl'), '_blank');
        console.log(doc);

    }

};