import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import '../../../Components/Menu/Menu.scss'
import bgIm from 'Assets/IllustrationChlo.jpg'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'
import { Grid } from '@mui/material'

import { CardSlider } from 'Components/Slider/CardSlider'
import { MainCard } from 'Components/MainCard/MainCard'
import { HumaNewsSlider } from 'Components/HumaNewsSlider/HumaNewsSlider'

import { Card } from 'Components/Card/Card'
import { CardText } from 'Components/Card/CardText'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'
import { OurPartners } from 'Components/OurPartners/OurPartners'
import { Collectif } from 'Components/Collectif/Collectif'

import { Link } from 'react-router-dom'
import { PdfReaderHuma } from 'Components/PdfReader/PdfReaderHuma'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const HumanitarianPage = ({ slideToLeft, slideToUp }) => {
    useEffect(() => {
        slideToLeft('#box1', '0.6', '1')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        slideToUp('.footerCard', '0', '2')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="humaPadding"></div>
            <div id="box1" className="box box1">
                <PresentationCard
                    bgImage={bgIm}
                    span1="L’origine"
                    span2="de notre"
                    span3="initiative"
                    text="L’Association franco-ukrainienne Balzac et Hanska mene ses actions en etroite collaboration avec sa « soeur » - ONG ukrainienne « Memoire de la vie de Balzac et Hanska », basée en Ukraine, à Berdytchiv, 200 km à l’ouest de Kyiv. <br/>Au moment de l’invasion de l’Ukraine la plupart de nos collabolateurs ont choisi de rester en Ukraine aux côtés de leurs familles. <br/>Le Président Jean Roche, a pris l’initiative de mettre en place, coté Ukraine, un circuit d’aide directe aux populations ukrainiennes.<br/>
                    Nos collaborateurs et volontaires suivent la distribution et la répartition de l’aide sur place, directement aux plus démunis, et en s’appuyant sur la structure caritative déjà existante en Ukraine, que nous avons fondées il y a plus de 10 ans.
                    "
                    element="/humanitarian/aboutUs"
                />
            </div>
            <section id="donner" className="paddingTopHash">
                <Grid container className="container ">
                    <Grid item sm={12} md={4} className="humaContent">
                        <MainCard
                            text=' <div class="title2">Actions humanitaires</div>
                      <p class="pDarkTheme">Nos projets à caractère Humanitaires sont portés par
                        notre Association Franco Ukrainienne BALZAC HANSKA
                        qui possède une structure en France et en Ukraine,
                        depuis plus de 10 ans - un lien de solidarité et d’Amour de la France à l’Ukraine au travers de notre association « Franco-Ukrainienne Balzac et Hanska »</p>'
                        />
                    </Grid>
                    <Grid item sm={12} md={4} className="humaContent">
                        <MainCard
                            text=' <div class="title2">Devenir benevole</div>
                        <p class="pDarkTheme">
                            Si vous avez des idées ou des projets à partager et
                            à developper avec nous,<span class="boldWhite">
                                contactez nous via le formulaire ou le mail.</span>
                        </p><p class="italic pDarkTheme">Vous pouvez nous rejoindre dans cette belle aventure humaine et nous aider dans nos différentes actions à venir et/ou par vos contributions financière sur le compte de notre association 
    <span class="boldWhite">- IBAN FR76 3007 6020 8918 4734 0020 022.</span></p>'
                        />
                    </Grid>
                    <Grid item sm={12} md={4} className="humaContent">
                        <MainCard
                            text='<div class="title2">Ou...</div><p class="pDarkTheme">
                                Il vous suffit de cliquer sur<a
                                    href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska"
                                    target="_blank"
                                    title="HELLOASSO"
                                    rel="noreferrer"
                                > le lien</a>
                                et de vous laisser guider.L’Association Franco
                                Ukrainienne BALZAC HANSKA est une Association loi de
                                1901 N° W941007660 –
                                <span class="boldWhite">ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale.</span></p>'
                        />
                    </Grid>
                </Grid>
            </section>
            <section id="actualites" className="paddingTopHash">
                <div className="col-12 col-3 ">
                    <Card title="Nos actions humanitaires" />
                </div>
                <div className="col-12 col-9 ">
                    <HumaNewsSlider />
                </div>
            </section>
            <section id="projets" className="paddingTopHash">
                <div className="col-12 col-4 ">
                    <Card title="L’Ukraine a besoin de nous, aidons-la et soyons engagés !!" />
                    <CardText
                        text="<p class='pDarkTheme'>
                Cette terrible guerre en Ukraine n’a malheureusement pas
                cessé... L’hiver arrive et nos amis ukrainiens ont besoin de
                nous.L’état ukrainien a demandé aux régions de réouvrir des
                anciens hôpitaux ou autres centres d’accueil fermés afin de
                pouvoir accueillir la population déplacée dans l’ouest de
                l’Ukraine qui se compte par millions de personnes.
            </p><p class='pDarkTheme'>
                Cependant les infrastructures sont souvent vétustes.La
                plupart du temps ces réouvertures se sont faites dans
                l’urgence afin de procurer à ces déplacés le minimum en
                matière de logement pour survivre avec des conditions
                sanitaires à la limite de l’acceptabilité. La capacité de
                ces établissements varie entre 150 et 300 déplacés. Nous
                souhaitons leur venir en aide! Ci-après un exemple urgent
                identifié lors de nos dernières missions en Ukraine.
            </p>"
                    />
                </div>
                <div className="col-12 col-8 ">
                    <ProjectSlider />
                </div>
            </section>
            <section id="presse" className="paddingTopHash">
                <div className="col-12 col-3 ">
                    <Card title="On parle de nous" />
                </div>
                <div className="col-12 col-9 ">
                    <CardSlider />
                </div>
            </section>
            <section id="pdfHuma">
                <div>
                    <div className="center">
                        <TitleBlock title="Documents" />
                    </div>
                    <PdfReaderHuma />
                </div>
            </section>
            <section id="partenaires">
                <div>
                    <Collectif />
                    <div className="center">
                        <TitleBlock title="Nos partenaires" />
                    </div>
                    <OurPartners delay="2000" rows="1" />
                </div>
            </section>
        </>
    )
}
