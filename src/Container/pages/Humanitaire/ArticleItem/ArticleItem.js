import { Card, Grid } from '@mui/material'
import React from 'react'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { getObject, projects } from 'utils/projects'
import './ArticleItem.scss'

export const ArticleItem = ({ projectObject = getObject(projects) }) => {
    let { id } = useParams()

    return (
        <>
            <h1>{projectObject[id].title}</h1>

            <Grid container className="articleItem ">
                <Grid item sm={12} md={6}>
                    <img
                        src="../../../public/Images/khust.jpg"
                        alt="photoKhust"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <p>
                        Le 24 février 2022, la Russie a déclaré la guerre à
                        l’Ukraine. Cette invasion a jeté sur les routes plus de
                        10 millions de personnes (en majorité des femmes, des
                        enfants et des personnes âgées). Trois millions ont
                        d’ores et déjà quitté le pays et se sont réfugiés, pour
                        la plupart en Europe de l’Ouest. Cette présence fait
                        peser sur les pays hôtes une charge économique et
                        sociale non négligeable. Mais ce sont plus de sept
                        millions de personnes qui ont été déplacées et sont
                        actuellement en Ukraine complétement déracinées.
                        Certaines personnes issues de villes détruites à plus de
                        90 % (Kharkiv, Marioupol, Tchernihiv, Borodianka,
                        Severodonetsk…) s’installent dans des zones où elles
                        pensent être en sécurité comme l’Ouest et le Sud-Ouest
                        du pays.
                    </p>
                    <p>
                        La région de Transcarpatie a, comme l’ensemble des
                        régions de l’Ouest de l’Ukraine reçue de nombreux
                        déplacés. Début juillet, les autorités régionales
                        dénombraient plus de 450 000 personnes qui sont arrivées
                        et tentent de se loger et de survivre avec l’aide des
                        autorités régionales et locales ainsi que des
                        associations locales d’aide appuyées par des
                        associations caritatives internationales. Il est à noter
                        que la population de Transcarpatie s’élève à 1 000 000
                        de personnes soit une augmentation de la population de
                        plus de 45 %. La planification et la gestion de ces
                        afflux de déplacés dépendent des autorités régionales
                        qui sont débordées faute de moyens humains (les hommes
                        sont mobilisés) et de moyens financiers (l’effort de
                        guerre coûte cher au pays).
                    </p>
                    <p>
                        Par courrier en date du 10 juin 2022, M.Viktor MYKALA,
                        Gouverneur militaire de la région de Transcarpatie a
                        annoncé aux districts du Sud de la région l’arrivée de
                        plus de 50 000 déplacés. Charge aux collectivités
                        territoriales d’assurer l’accueil, l’hébergement et tous
                        les services que sont en droit d’attendre les déplacés
                        afin d’être reçus dans la dignité (cf. courrier en
                        annexe). La région devrait passer de 450 000 déplacés à
                        500 000 dans le courant de l’été.{' '}
                    </p>
                </Grid>
                <Grid item sm={12} md={6}>
                    <p>L’hôpital d’une superficie de 1800m².</p>
                    <p>Budget chaudière : 40 000€</p>
                </Grid>
                <Grid item sm={12} md={6}>
                    <p>
                        <span className="fsShTTitle">Objectif du projet:</span>
                    </p>
                    <p>
                        Il s’agit de mettre en place une nouvelle chaudière
                        avant les mois d’hiver afin de permettre à tous les
                        déplacés (actuels et futurs) d’être accueillis dans ces
                        locaux et d’avoir accès à un chauffage et eau chaude. Le
                        chauffage bois permettra à la communauté de réaliser des
                        économies, le bois étant disponible sur place ....
                    </p>
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
                                et de vous laisser guider.L’Association Franco
                                Ukrainienne BALZAC HANSKA est une Association
                                loi de 1901 N° W941007660 –{' '}
                                <span>
                                    ouvrant droit à une réduction d’impôt et
                                    délivrance d’un certificat de déductibilité
                                    fiscale.
                                </span>
                            </p>
                        </div>
                    </Card>
                    <img
                        src="../../../public/Images.FP2scehma.png"
                        alt="schema"
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <hr></hr>

                    <div>
                        {' '}
                        <p>
                            pr2-Le choix de ce procédé est également dicté par
                            plusieurs critères importants en période de crise :
                        </p>
                        <ul>
                            <li>Facilité d’installation et de démarrage</li>
                            <li>Maintenance minimum</li>
                            <li>Peu de réactif nécessaire</li>
                            <li>Faible consommation électrique. </li>
                        </ul>
                    </div>
                    <div>
                        Coût d’une installation de potabilisation
                        <p>
                            Le coût est fonction du débit que l’on souhaite et
                            de la qualité de l’eau produite. Pour un débit de 8
                            M3 / Heure 40 000 €uros.
                        </p>
                    </div>
                    <hr></hr>
                    <div>
                        pr-1Equipements nécessaires pour l’organisation du
                        chauffage dans le bâtiment de l’ancien hôpital
                        d’Ust-Tchorna
                    </div>
                    <div className="containerGrid">
                        <div className="one num">N°</div>
                        <div className="one gridTitle">Titre</div>
                        <div className="one gridQuantity">Quantité</div>
                        <div className="one gridDimension">Dimension</div>
                        <div className="one gridPrice">PRIX</div>

                        <div className="one">1</div>
                        <div className="one gridTitle">Senci Diesel 6000W </div>
                        <div className="one gridQuantity">en Stock</div>
                        <div className="one gridDimension">86000W</div>
                        <div className="one gridPrice">1999€ TTC</div>

                        <div className="one">2</div>
                        <div className="one gridTitle">A-ipower</div>
                        <div className="one gridQuantity">dispo décembre</div>
                        <div className="one gridDimension">9KVA</div>
                        <div className="one gridPrice">2699€ TTC</div>

                        <div className="one">3</div>
                        <div className="one gridTitle">A-ipower </div>
                        <div className="one gridQuantity">en stock</div>
                        <div className="one gridDimension"> 13kVA </div>
                        <div className="one gridPrice">5499€ TTC</div>

                        <div className="one">4</div>
                        <div className="one gridTitle">Senci Diesel </div>
                        <div className="one gridQuantity">en stock</div>
                        <div className="one gridDimension"> 19KVA </div>
                        <div className="one gridPrice">8999€ TTC</div>

                        <div className="one">5</div>
                        <div className="one gridTitle">ITC Power</div>
                        <div className="one gridQuantity">
                            dispo février-mars
                        </div>
                        <div className="one gridDimension">72KVA</div>
                        <div className="one gridPrice">16999€ TTC</div>

                        <div className="one">6</div>
                        <div className="one gridTitle">ITC Power </div>
                        <div className="one gridQuantity">
                            dispo décembre-janvier
                        </div>
                        <div className="one gridDimension">110KVA</div>
                        <div className="one gridPrice">19959€ TTC</div>

                        <div className="one">7</div>
                        <div className="one gridTitle">SENCI </div>
                        <div className="one gridQuantity">dispo février</div>
                        <div className="one gridDimension">190KVA </div>
                        <div className="one gridPrice">24999€ TTC</div>
                    </div>
                    <div>BUDGET PROJET 40 000 EUROS</div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(projectObject[id].table),
                        }}
                    ></div>
                </Grid>
            </Grid>
        </>
    )
}
