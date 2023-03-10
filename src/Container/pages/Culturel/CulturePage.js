import React, { useEffect } from 'react'
import './CulturePage.scss'
import { BalzacList } from 'Components/BalzacList/BalzacList'
import balzac from '../../../Assets/balzacFrameWhite.jpg'
import hanska from '../../../Assets/hanskaFrameWhite.jpg'
import bgIm from 'Assets/maison.jpg'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'

import { TitleBlock } from 'Components/TitleBlock/TitleBlock'
import PdfReader from 'Components/PdfReader/PdfReader'

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
            <div className="humaPadding"></div>
            <div id="nextSection" className="section">
                <div id="box1" className="box box1">
                    <PresentationCard
                        photo1={balzac}
                        photo2={hanska}
                        bgImage={bgIm}
                        span1="Balzac"
                        span2="et"
                        span3="Hanska"
                        text="<p>Notre association a été créée dans le
                            but de perpétuer, célébrer et rendre hommage à la
                            mémoire des amours d'Honoré de Balzac et de la Comtesse Ewelyna Hanska.<br/><br/>Nous voulons faire connaitre le lien de Balzac avec l’Ukraine au travers de cette belle histoire.<br/><br/>Sur ce site, vous pourrez trouver
                            l’histoire des voyages de Balzac pour rejoindre son
                            aimée &nbsp;, &nbsp;si notre cause vous intéresse
                            vous pourrez également faire une
                            &nbsp;.&nbsp;N’hésitez pas à nous contacter, nous
                            sommes à votre disposition. </p>"
                    />
                </div>
            </div>
            <section id="RouteBalzac" className="paddingTopHash">
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

                <BalzacList />
            </section>
            <section id="patrimoineUkrainien"></section>
            <section id="BalzacFest">
                <PdfReader />
            </section>
        </>
    )
}
