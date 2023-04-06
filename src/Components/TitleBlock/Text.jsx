import React from 'react'
import './TitleBlock.scss'
import DOMPurify from 'dompurify'

export const Text = ({ text }) => {
    return (
        <div className="titleBlock center-text">
            <p
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text),
                }}
            ></p>
        </div>
    )
}
