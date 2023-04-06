import React from 'react'
import './TitleBlock.scss'
import DOMPurify from 'dompurify'

export const TitleBlock = ({ title }) => {
    return (
        <div className="titleBlock center-text titleHover">
            <h1
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(title),
                }}
            ></h1>
        </div>
    )
}
