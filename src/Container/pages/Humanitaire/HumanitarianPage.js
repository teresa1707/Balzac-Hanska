import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'
import { NewsSlider } from 'Components/Slider/Slider'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const HumanitarianPage = () => {
    let text =
        'Il vous suffit de cliquer sur le lien et de vous laisser guider.L’Association Franco Ukrainienne BALZAC HANSKA est une Association loi de 1901 N° W941007660 –ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale.'
    let title = 'OU...'
    let link = 'https://www.chateaudelarocheguyon.fr/le-potager-fruitier/'

    return (
        <>
            <div className="humaPadding"></div>
            <div className="App">
                <div className="card animated">
                    <div className="card__img animated"></div>
                    <div className="card__content">
                        <h1 className="card__title animated fadeInDown">
                            <span className="small">Nos</span>
                            <span>actions</span>

                            <span>humanitaires</span>
                        </h1>
                        <p className="card__quote animated fadeInUp">
                            Nos projets à caractère Humanitaires sont portés par
                            notre Association Franco Ukrainienne BALZAC HANSKA
                            qui possède une structure en France et en Ukraine,
                            depuis plus de 10 ans
                            {/* 
      Le huitième camion bien rempli à quitté la France le 21 decembre 2022 et est arrivé sans incident en Ukraine le 26 decembre. Grace aux efforts de nous tous reunis nous avons pu envoyer les produits de première necessité , tant attendus par nos amis ukrainiens. */}
                        </p>
                    </div>
                </div>
                <div className="humaPadding" />
                <div className="newsStyle">
                    <NewsSlider />
                </div>
                <div className="humaPadding">
                    <ColumnElement text={text} title={title} link={link} />
                </div>
                <div className="backGround">
                    <ProjectSlider />
                </div>
                <div className="humaPadding" />
            </div>
        </>
    )
}
