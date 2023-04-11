import React from 'react'
import './Card.scss'
import DOMPurify from 'dompurify'

export const CardText = ({ text, bgc }) => {
    return (
        <div
            className="cardBlock center-text "
            style={{ backgroundColor: bgc }}
        >
            <div
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text),
                }}
            ></div>
        </div>
    )
}
