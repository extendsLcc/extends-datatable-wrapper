function buildFormats() {

    const patterns = ['a', 'b', 'c']

    let formats = {};

    for (let pattern of patterns) {

        for (let i = 0; i <= 10; i++) {

            formats[(pattern + i).toUpperCase()] = pattern + i;

        }

    }

    formats = {
        ...formats,
        "DL": 'dl',
        "LETTER": 'letter',
        'GOVERNMENT-LETTER': "government-letter",
        "LEGAL": "legal",
        "JUNIOR-LEGAL": "junior-legal",
        "LEDGER": "ledger",
        "TABLOID": "tabloid",
        "CREDIT-CARD": "credit-card",
    }

    return formats;

}

export const Format = Object.freeze( buildFormats() );