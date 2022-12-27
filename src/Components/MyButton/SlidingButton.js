import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'

export const SlidingButton = ({ buttonText, handleOpen }) => {
    return (
        <>
            <button className="btn2 btn2-1" onClick={handleOpen}>
                <p style={{ fontWeight: 'bold' }}>{buttonText}</p>
                <h5 >
                    <MdDoubleArrow />
                </h5>
            </button>
        </>
    )
}
