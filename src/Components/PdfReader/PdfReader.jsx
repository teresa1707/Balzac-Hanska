import React from 'react'
import { Document, Page } from 'react-pdf'
import filePdf from '../../Assets/pdf/BalzacFestFR.pdf'

export default function PdfReader() {
    return (
        <Document file={filePdf}>
            <Page pageNumber={1} />
        </Document>
    )
}
