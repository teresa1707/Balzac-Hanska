import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import bgIm from 'Assets/IllustrationChlo.jpg'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'
import { NewsSlider } from 'Components/Slider/Slider'
import { ContactForm } from 'Components/ContactForm/ContactForm'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const HumanitarianPage = ({ slideToLeft, slideToUp }) => {
    useEffect(() => {
        slideToLeft('#box1', '0.6', '1')
    }, [])

    useEffect(() => {
        slideToLeft('.footerCard', '0', '2')
    }, [])

    useEffect(() => {
        slideToUp('.ft1', '1', '2')
    }, [])
    useEffect(() => {
        slideToLeft('.ft2', '2', '2')
    }, [])
    useEffect(() => {
        slideToUp('.ft3', '3', '2')
    }, [])

    return (
        <>
            <div className="App">
                <div className="newsStyle">
                    <div id="nextSection" className="section">
                        <div id="box1" className="box box1">
                            <PresentationCard
                                bgImage={bgIm}
                                span1="A"
                                span2="la"
                                span3="Une"
                                text="Nos projets à caractère Humanitaires sont portés par
                                notre Association Franco Ukrainienne BALZAC HANSKA
                                qui possède une structure en France et en Ukraine,
                                depuis plus de 10 ans
                               
                    Le huitième camion bien rempli à quitté la France le 21 decembre 2022 et est arrivé sans incident en Ukraine le 26 decembre. Grace aux efforts de nous tous reunis nous avons pu envoyer les produits de première necessité , tant attendus par nos amis ukrainiens. "
                            />
                        </div>
                        <ColumnElement />
                    </div>
                    <NewsSlider />
                </div>

                <ProjectSlider />
            </div>
        </>
    )
}
