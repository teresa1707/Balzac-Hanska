import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import { useParams } from 'react-router-dom'

export const PdfReader = ({ pdf }) => {
    let { id } = useParams()

    const [numPages, setNumPages] = useState(null)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
    )
}
