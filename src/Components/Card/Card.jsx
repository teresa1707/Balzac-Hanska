import React from 'react'
import './Card.scss'
import DOMPurify from 'dompurify'

export const Card = ({ title }) => {
    return (
        <div className="cardBlock center-text cardTitleHover">
            <h1
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(title),
                }}
            ></h1>
        </div>
    )
}
