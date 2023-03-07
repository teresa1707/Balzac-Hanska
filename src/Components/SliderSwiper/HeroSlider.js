import React, { useEffect } from 'react'
import './HeroSlider.scss'

import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { ScrollDown } from 'Components/ScrollDown/ScrollDown'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'
import { OurPartners } from 'Components/OurPartners/OurPartners'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'

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
                <Grid item xs={12}>
                    <ColumnElement text="<p class='pDarkTheme'><span class='first-character b'>J</span>Jean ROCHE, Ingénieur et chef d’entreprise travaillant en Ukraine depuis 1987 décide à la fin des années 1990 de chercher un terrain au cœur de la ville de BERDYTCHIV (Ukraine) pour y faire construire de nouveaux bureaux. C’est à ce moment là que nait la passion de Jean ROCHE pour BALZAC.<br/><br/>En effet le romancier H.de.BALZAC a séjourné à la fin de sa vie dans ce pays où vivait son grand amour, la contesse Ewelina HANSKA.<br/><br/>Qui sait, hormis les érudits et les quelques centaines d’habitants du village de Verkhivnia, que Balzac a passé près de deux ans et demi ici, au milieu du XIXe siècle ? Même les biographes et spécialistes du romancier n’ont pas tous fait le voyage jusqu’à ce coin reculé. Il faut dire que les dernières années de sa vie, de 1847 à 1850, furent les moins productives. <br/><br/>C’est pourtant bien là, dans cette « espèce de Louvre, de temple grec », qu’il écrivit la seconde partie de L’Envers de l’histoire contemporaine, le dernier roman de sa Comédie humaine. (Extrait du monde- Ariane Chemin) Jean ROCHE décide donc de faire connaitre cette partie oublié de l’histoire de BALZAC</p>" />
                </Grid>{' '}
                <Grid container className="block" id="block1">
                    <Grid item xs={12} md={4}>
                        <ColumnElement
                            text="<p class='pDarkTheme'><span class='first-character b'>B</span>eaucoup d’événements, de personnes, relient l’Ukraine à la
                            France (et la France à l’Ukraine) et l’amour de
                            Balzac et de Madame Hanska en est un et l’un des
                            plus méconnus.<br/><br/>Depuis notre création en 2012, nous avons déjà réalisé quelques projets notamment la création d’un musée du souvenir à
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
                            et à leur amour.
                        </p>'
                        />
                    </Grid>
                </Grid>
                <div className="parallax-three">
                    <Link to="/humanitarian">
                        <h2 className="frame">Projets Humanitaires</h2>
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
                <TitleBlock title="Nos partenaires" />
                <OurPartners />
            </div>
        </>
    )
}
