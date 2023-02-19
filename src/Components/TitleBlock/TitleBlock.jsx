import React from "react"
import './TitleBlock.scss'
import DOMPurify from 'dompurify'

export const TitleBlock=({title, text})=>{
  return(
    
            <div className="titleBlock">
                    <h1 dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(title),
                  }}></h1>

                    <p dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(text),
                  }}></p>
                </div>
  )
}