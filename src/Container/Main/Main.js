import { HeroSlider } from 'Components/SliderSwiper/HeroSlider'
import React from 'react'
import './Main.scss'

export const Main = ({ slideFade, slideUp }) => {
    return (
        <>
            <HeroSlider slideFade={slideFade} slideUp={slideUp} />
        </>
    )
}
