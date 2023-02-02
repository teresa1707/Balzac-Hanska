import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './CulturePage.scss'
import { BalzacList } from 'Components/BalzacList/BalzacList'
import balzac from '../../../Assets/Balzac-Image.jpg'
import hanska from '../../../Assets/hanska-mini.webp'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const CulturePage = ({ slideToUp, slideToLeft }) => {
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
            <div className="AppCulture">
                <div id="nextSection" className="section">
                    <div id="box1" className="box box1">
                        <div className="cardCulture ">
                            <div className="card__imgCulture">
                                <img
                                    className="photoBalzac frame"
                                    src={balzac}
                                    alt=""
                                />

                                <img
                                    className="photoHanska frame"
                                    src={hanska}
                                    alt=""
                                />
                            </div>
                            <div className="card__contentCulture">
                                <h1 className="card__titleCulture ">
                                    <span>Balzac</span>
                                    <span className="small">et</span>
                                    <span>Hanska</span>
                                </h1>
                                <p className="card__quoteCulture">
                                    <span>
                                        Nous voulons faire connaitre le lien de
                                        Balzac avec l’Ukraine au travers de son
                                        histoire d’amour avec la princesse
                                        Hanska
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blockCulture">
                <h1>LES VOYAGES D'HONORE DE BALZAC</h1>

                <p>
                    <span className="first-character b">S</span>ans être un
                    grand voyageur dans l’âme, Balzac n’en a pas moins sillonné
                    la France et l’Europe tout au long de sa vie, quelques fois
                    pour affaires, le plus souvent pour rejoindre des femmes
                    aimées : les amies telle Zulma Carraud qu’il retrouve à
                    Angoulême ou Issoudun, les autres amantes ou les prétendues
                    au titre (respectivement Mme de Berny en Touraine puis en
                    bateau sur la Loire jusque Nantes, Mme de Castries en
                    Suisse) et surtout Mme Hanska pour laquelle il traversera
                    plusieurs fois l’Europe dans toute son étendue, dans des
                    conditions de voyage éprouvantes liées aux moyens de
                    transport rudimentaires de la première moitié du 19ème
                    siècle.
                </p>
            </div>
            <div id="balzacList">
                <BalzacList />
            </div>
        </>
    )
}
