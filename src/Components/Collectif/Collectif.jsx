import React from 'react'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'

import './Collectif.scss'

export const Collectif = () => {
    return (
        <>
            <div className="center">
                {' '}
                <TitleBlock title="Notre collectif" />
            </div>

            <div className="center" id="collectif">
                <img
                    src="../Images/logos/Visuel_logos_collectif_Ukraine.png"
                    alt="logo collectif Ensemble avec l'Ukraine"
                />
            </div>
        </>
    )
}
