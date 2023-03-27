import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'

export const SlidingButton = ({ buttonText, bR }) => {
    return (
        <>
            <div className="btn2">
                <p>
                    <a
                        href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska"
                        target="_blank"
                        rel="noreferrer"
                        className="buttonText"
                    >
                        {buttonText}
                    </a>
                </p>
                <h5>
                    <MdDoubleArrow />
                </h5>
            </div>
        </>
    )
}
