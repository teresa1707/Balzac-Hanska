import { MainPresentation } from 'Components/MainPresentation/MainPresentation'
import { OurPartners } from 'Components/OurPartners/OurPartners'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'
import React, { useEffect } from 'react'
import './Main.scss'

export const Main = ({ slideFade, slideUp }) => {
    useEffect(() => {
        slideUp('#collectif', '0', '1')
        slideUp('#partners', '0', '1')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <MainPresentation slideFade={slideFade} slideUp={slideUp} />
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
            <div className="center">
                {' '}
                <TitleBlock title="Nos partenaires" />
            </div>
            <div id="partners">
                <OurPartners />
            </div>
        </>
    )
}
