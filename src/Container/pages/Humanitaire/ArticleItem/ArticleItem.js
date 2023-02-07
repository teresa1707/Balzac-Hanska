import { Card, Container, Grid } from '@mui/material'
import React from 'react'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { getObject, projects } from 'utils/projects'
import './ArticleItem.scss'

export const ArticleItem = ({ projectObject = getObject(projects) }) => {
    let { id } = useParams()

    return (
        <div className="bgClear">
            <Container className="humaPadding">
                <h1>{projectObject[id].title}</h1>

                <Grid container className="articleItem item">
                    <Grid item sm={12} md={6}>
                        <figure>
                            <img
                                src="/Images/FcarteUkraine.jpg"
                                alt="photo Ukraine"
                            />
                            <figcaption>Ukraine</figcaption>
                        </figure>
                        <figure>
                            <img
                                src="/Images/FcarteZakarpattia.jpg"
                                alt="photo Ukraine"
                            />
                            <figcaption>Transcarpatie</figcaption>
                        </figure>
                        <figure>
                            <img
                                src={projectObject[id].image[0]}
                                alt={projectObject[id].infoPlus[0]}
                            />
                            <figcaption>
                                {projectObject[id].infoPlus[0]}
                            </figcaption>
                        </figure>
                        <figure>
                            <img
                                src={projectObject[id].image[1]}
                                alt={projectObject[id].infoPlus[1]}
                            />
                            <figcaption>
                                {projectObject[id].infoPlus[1]}
                            </figcaption>
                        </figure>
                        <figure>
                            <img
                                src={projectObject[id].image[2]}
                                alt={projectObject[id].infoPlus[2]}
                            />
                            <figcaption>
                                {projectObject[id].infoPlus[2]}
                            </figcaption>
                        </figure>
                        <figure>
                            <img
                                src={projectObject[id].image[3]}
                                alt={projectObject[id].infoPlus[3]}
                            />
                            <figcaption>
                                {projectObject[id].infoPlus[3]}
                            </figcaption>
                        </figure>
                        <figure>
                            <img
                                src={projectObject[id].image[4]}
                                alt={projectObject[id].infoPlus[4]}
                            />
                            <figcaption>
                                {projectObject[id].infoPlus[4]}
                            </figcaption>
                        </figure>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p>
                            Le 24 février 2022, la Russie a déclaré la guerre à
                            l’Ukraine. Cette invasion a jeté sur les routes plus
                            de 10 millions de personnes (en majorité des femmes,
                            des enfants et des personnes âgées). Trois millions
                            ont d’ores et déjà quitté le pays et se sont
                            réfugiés, pour la plupart en Europe de l’Ouest.
                            Cette présence fait peser sur les pays hôtes une
                            charge économique et sociale non négligeable. Mais
                            ce sont plus de sept millions de personnes qui ont
                            été déplacées et sont actuellement en Ukraine
                            complétement déracinées. Certaines personnes issues
                            de villes détruites à plus de 90 % (Kharkiv,
                            Marioupol, Tchernihiv, Borodianka, Severodonetsk…)
                            s’installent dans des zones où elles pensent être en
                            sécurité comme l’Ouest et le Sud-Ouest du pays.
                        </p>
                        <p>
                            La région de Transcarpatie a, comme l’ensemble des
                            régions de l’Ouest de l’Ukraine reçue de nombreux
                            déplacés. Début juillet, les autorités régionales
                            dénombraient plus de 450 000 personnes qui sont
                            arrivées et tentent de se loger et de survivre avec
                            l’aide des autorités régionales et locales ainsi que
                            des associations locales d’aide appuyées par des
                            associations caritatives internationales. Il est à
                            noter que la population de Transcarpatie s’élève à 1
                            000 000 de personnes soit une augmentation de la
                            population de plus de 45 %. La planification et la
                            gestion de ces afflux de déplacés dépendent des
                            autorités régionales qui sont débordées faute de
                            moyens humains (les hommes sont mobilisés) et de
                            moyens financiers (l’effort de guerre coûte cher au
                            pays).
                        </p>
                        <p>
                            Par courrier en date du 10 juin 2022, M.Viktor
                            MYKALA, Gouverneur militaire de la région de
                            Transcarpatie a annoncé aux districts du Sud de la
                            région l’arrivée de plus de 50 000 déplacés. Charge
                            aux collectivités territoriales d’assurer l’accueil,
                            l’hébergement et tous les services que sont en droit
                            d’attendre les déplacés afin d’être reçus dans la
                            dignité (cf. courrier en annexe). La région devrait
                            passer de 450 000 déplacés à 500 000 dans le courant
                            de l’été.{' '}
                        </p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p>
                            <span className="fsShTTitle">
                                Objectif du projet:
                            </span>
                        </p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].shortText1
                                ),
                            }}
                        ></p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].shortText2
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <hr></hr>

                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].shortText3
                                ),
                            }}
                        ></p>
                        <hr></hr>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className="art-category">
                            Comment aider ?
                            <div className="art-text">
                                <p>
                                    Il vous suffit de cliquer sur{' '}
                                    <a
                                        href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska/formulaires/1."
                                        target="_blank"
                                        title="HELLOASSO"
                                        rel="noreferrer"
                                    >
                                        le lien{' '}
                                    </a>
                                    et de vous laisser guider.L’Association
                                    Franco Ukrainienne BALZAC HANSKA est une
                                    Association loi de 1901 N° W941007660 –{' '}
                                    <span>
                                        ouvrant droit à une réduction d’impôt et
                                        délivrance d’un certificat de
                                        déductibilité fiscale.
                                    </span>
                                </p>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].table
                                ),
                            }}
                        ></div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].shortText4
                                ),
                            }}
                        ></p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    projectObject[id].shortText5
                                ),
                            }}
                        ></p>
                        <div>{projectObject[id].budget}</div>
                    </Grid>
                    <figure>
                        <img
                            src={projectObject[id].image[5]}
                            alt={projectObject[id].infoPlus[5]}
                        />
                        <figcaption>{projectObject[id].infoPlus[5]}</figcaption>
                    </figure>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                projectObject[id].shortText6
                            ),
                        }}
                    ></p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                projectObject[id].shortText7
                            ),
                        }}
                    ></p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                projectObject[id].shortText8
                            ),
                        }}
                    ></p>
                </Grid>
            </Container>
        </div>
    )
}
