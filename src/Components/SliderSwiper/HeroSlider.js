import React, { useEffect } from 'react'
import './HeroSlider.scss'

import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { ScrollDown } from 'Components/ScrollDown/ScrollDown'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'

export const HeroSlider = ({ slideFade, slideUp }) => {
    useEffect(() => {
        slideFade('#parallax-container .frame', '1', '2')
    }, [])
    useEffect(() => {
        slideUp('#block1 .cardItemHuma', '0.6', '1')
        slideUp('#block2 .cardItemHuma', '0.6', '1')
        slideUp('#block3 .cardItemHuma', '0.6', '1')
    }, [])

    return (
        <>
            <div id="parallax-container">
                <div className="parallax-one">
                    <ScrollDown />
                </div>

                <Grid container className="block" id="block1">
                    <Grid item xs={12} md={4}>
                        <ColumnElement
                            text="<p class='pDarkTheme'><span class='first-character b'>B</span>eaucoup d’événements, de personnes, relient l’Ukraine à la
                            France (et la France à l’Ukraine) et l’amour de
                            Balzac et de Madame Hanska en est un et l’un des
                            plus méconnus.<br/><br/>Notre association a été créée dans le
                            but de perpétuer, célébrer et rendre hommage à la
                            mémoire des amours d'Honoré de Balzac et de la Comtesse Ewelyna Hanska.<br/><br/>Depuis notre création en 2012, nous avons déjà réalisé quelques projets notamment la création d’un musée du souvenir à
                            Berditchev dans le Centre Commercial «&nbsp;Galerie
                            Balzac&nbsp;», situé juste en face de l’église ou se
                            sont mariés Honoré de Balzac et Madame Hanska. </p>"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ColumnElement
                            text='<p class="pDarkTheme"><span class="first-character b">N</span>ous
                            avons également apporté notre aide à la première
                            traduction en langue ukrainienne d’une des œuvres de
                            Balzac «&nbsp;<br/><br/>Scènes de la vie parisienne&nbsp;» .Et de nombreux projets se profilent, des
                            expositions, d’autres traductions des œuvres de
                            Balzac en langue ukrainienne, etc. <br/><br/>
                        </p>'
                        />
                    </Grid>{' '}
                    <Grid item xs={12} md={4}>
                        <ColumnElement
                            text=' <p class="pDarkTheme">
                            <span class="first-character b">M</span>ais notre projet
                            le plus important est à terme de pouvoir rénover le
                            Château de Verhivnya qui par manque de moyens, comme
                            malheureusement beaucoup d’endroits historiques en
                            Ukraine, se dégrade régulièrement, et ce serait une
                            énorme perte car un véritable petit musée y a été
                            créé, rattaché au Musée de Jytomyr, qui enferme de
                            vrai merveilles lié à Balzac, à la Comtesse Hanska,
                            et à leur amour. <br/><br/>Sur ce site, vous pourrez trouver
                            l’histoire des voyages de Balzac pour rejoindre son
                            aimée &nbsp;, &nbsp;si notre cause vous intéresse
                            vous pourrez également faire une
                            &nbsp;.&nbsp;N’hésitez pas à nous contacter, nous
                            sommes à votre disposition.
                        </p>'
                        />
                    </Grid>
                </Grid>
                <div className="parallax-two">
                    <Link to="/culture">
                        <h2 className="frame">Projets Culturels</h2>
                    </Link>
                </div>

                <Grid container className="block" id="block2">
                    <Grid item xs={12} md={6}>
                        <ColumnElement
                            text=' <p class="pDarkTheme">
                            <span class="first-character b">L</span>e 24
                            février 2022, la Russie a déclaré la guerre à
                            l’Ukraine. Cette invasion a jeté sur les routes plus
                            de 10 millions de personnes (en majorité des femmes,
                            des enfants et des personnes âgées). Plus de sept
                            millions de personnes ont été déplacées et sont
                            actuellement en Ukraine complétement déracinées.
                            Certaines personnes issues de villes détruites à
                            plus de 90 % (Kharkiv, Marioupol, Tchernihiv,
                            Borodianka, Severodonetsk…) s’installent dans des
                            zones où elles pensent être en sécurité comme
                            l’Ouest et le Sud-Ouest du pays.
                        </p>'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ColumnElement
                            text='<p class="pDarkTheme"><span class="first-character b">C</span>’est pourquoi, l’Association franco-ukrainienne
                            « Balzac-Hanska », representé par son président Jean
                            ROCHE et ses nombreux partenaires, se sont engagés à
                            apporter de l’aide aux populations déplacées vers
                            les zones dans lesquelles nous sommes présents.Nous
                            ne sommes pas seuls dans cette mission . Avec nos
                            partenaires, volontaires basés en France et
                            volontaires ukrainiens basés à Berdytchiv nous
                            mettont tout en oeuvre afin de faciliter le peuple
                            ukrainien à traverser cette periode dramatique.
                        </p>'
                        />
                    </Grid>
                </Grid>

                <div className="parallax-three">
                    <Link to="/humanitarian">
                        <h2 className="frame">Projets Humanitaires</h2>
                    </Link>
                </div>

                <Grid container className="block" id="block3">
                    <Grid item xs={12} md={6}>
                        <ColumnElement
                            text=' <p class="pDarkTheme">
                            <span class="first-character b">N</span>os
                            partenaires: SETEC INGENIERIE, ASSOCIATION BALZAC
                            HANSKA UKRAINE, ENSEMBLE UKRAINE, LIONS CLUB KIEV Ecology,
                            LES FEMMES UKRAINIENNES EN FRANCE, PHARMACIENS SANS
                            FRONTIERES, ECOLE LATOUR, CLUB SPORTIF ATHEON
                        </p>'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ColumnElement
                            text=' <p class="pDarkTheme">
                            BETEN Ingéniérie, BALZAC INVESTISSEMENT, NEO-TERRA,
                            MAIRIE DE NEUF, LIONS CLUB INTERNATIONAL PARIS
                            SEYSSEL, MAIRIE DE BERDYTCHIV, URA (UKRAINIAN
                            REFUGEES ASSISTANCE), RIVAGE DE FRANCE , AVENIR
                            UKRAINE , ROTARY 60 .
                        </p>'
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
