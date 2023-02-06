import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'
import { NewsSlider } from 'Components/Slider/Slider'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'
import bgIm from '../../../Assets/IllustrationChlo.jpg'

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
    let text =
        'Il vous suffit de cliquer sur le lien et de vous laisser guider.L’Association Franco Ukrainienne BALZAC HANSKA est une Association loi de 1901 N° W941007660 –ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale.'
    let title = 'OU...'
    let link = 'https://www.chateaudelarocheguyon.fr/le-potager-fruitier/'

    return (
        <>
            <div className="App">
                <div id="nextSection" className="section">
                    <div id="box1" className="box box1">
                        <div className="newsStyle">
                            <NewsSlider />
                        </div>
                        {/* <PresentationCard
                            bgImage={bgIm}
                            text="  Nos projets à caractère Humanitaires sont portés par
            notre Association Franco Ukrainienne BALZAC HANSKA
            qui possède une structure en France et en Ukraine,
            depuis plus de 10 ans
           
Le huitième camion bien rempli à quitté la France le 21 decembre 2022 et est arrivé sans incident en Ukraine le 26 decembre. Grace aux efforts de nous tous reunis nous avons pu envoyer les produits de première necessité , tant attendus par nos amis ukrainiens. " /> */}
                    </div>
                </div>

                <div className="humaPadding">
                    <ColumnElement text={text} title={title} link={link} />
                </div>

                <ProjectSlider />
            </div>
        </>
    )
}
