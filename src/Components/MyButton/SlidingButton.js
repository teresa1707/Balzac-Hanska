import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'

export const SlidingButton = ({ buttonText}) => {
    return (
        <>
            <div className="btn2 btn2-1" >
                <p><a href='https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska' target="_blank" className='buttonText'>{buttonText}</a></p>
                <h5 >
                    <MdDoubleArrow />
                </h5>
            </div>
        </>
    )
}
