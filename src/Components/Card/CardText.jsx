import React from 'react'
import './Card.scss'
import DOMPurify from 'dompurify'

export const CardText = ({ text }) => {
    return (
        <div className="cardBlock center-text ">
            <p
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text),
                }}
            ></p>
        </div>
    )
}
