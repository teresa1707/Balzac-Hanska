import React from 'react'
import './ColumnElement.scss'
import DOMPurify from 'dompurify'

export const ColumnElement = ({ text }) => {
    return (
        <div
            className="cardItemHuma"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(text),
            }}
        ></div>
    )
}
