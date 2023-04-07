import { Collectif } from 'Components/Collectif/Collectif'
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
            <Collectif />
            <TitleBlock title="Nos partenaires" />
            <OurPartners delay={1000} rows="1" />
        </>
    )
}
