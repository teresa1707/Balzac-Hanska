import React from 'react'
import { useNavigate } from 'react-router-dom'

import './MyButton.scss'

export const Button = ({ BtnText }) => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="btnProject" onClick={goBack}>
                {BtnText}
            </div>
        </>
    )
}
