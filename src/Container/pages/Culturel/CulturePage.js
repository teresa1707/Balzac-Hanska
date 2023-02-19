import React, { useEffect } from 'react'
import './CulturePage.scss'
import { BalzacList } from 'Components/BalzacList/BalzacList'
import balzac from '../../../Assets/balzacFrameWhite.jpg'
import hanska from '../../../Assets/hanskaFrameWhite.jpg'
import bgIm from 'Assets/maison.jpg'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'
import { ContactForm } from 'Components/ContactForm/ContactForm'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'

export const CulturePage = ({ slideToUp, slideToLeft }) => {
    useEffect(() => {
        slideToUp('#box1', '0.6', '1')
    }, [])

    useEffect(() => {
        slideToLeft('.frame', '0.2', '2', '0.7')
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
            <div className="humaPadding">
                <div id="nextSection" className="section">
                    <div id="box1" className="box box1">
                        <PresentationCard
                            photo1={balzac}
                            photo2={hanska}
                            bgImage={bgIm}
                            span1="Balzac"
                            span2="et"
                            span3="Hanska"
                            text="Nous voulons faire connaitre le lien de Balzac avec l’Ukraine au travers de son histoire d’amour avec la princesse Hanska. "
                        />
                    </div>
                </div>
                <TitleBlock
                    title="LES VOYAGES D'HONORE DE BALZAC"
                    text="
                <span class='first-character b'>S</span>ans être un
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
                "
                />

                <div id="balzacList">
                    <BalzacList />
                </div>
            </div>
        </>
    )
}
