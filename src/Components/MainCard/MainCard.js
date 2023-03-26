import React from 'react'
import './MainCard.scss'
import DOMPurify from 'dompurify'

export const MainCard = ({ text }) => {
    return (
        <div
            className="cardItemHuma"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(text),
            }}
        ></div>
    )
}
