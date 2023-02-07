import React from 'react'
import './ColumnElement.scss'
import { Grid } from '@mui/material'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'

export const ColumnElement = () => {
    return (
        <Grid container className="container">
            <Grid item sm={12} md={4}>
                <div className="cardItemHuma">
                    <div className="title2">Ce n’est que le début !</div>

                    <p className=" italic pDarkTheme">
                        Vous pouvez nous rejoindre dans cette belle aventure
                        humaine et nous aider dans nos différentes actions à
                        venir et/ou par vos contributions financière sur le
                        compte de notre association{' '}
                        <span style={{ color: 'white' }}>
                            - IBAN FR76 3007 6020 8918 4734 0020 022.
                        </span>
                    </p>

                    <SocialMedia />
                </div>
            </Grid>
            <Grid item sm={12} md={4}>
                <div className="cardItemHuma">
                    <div className="title2">Ou...</div>

                    <p className="pDarkTheme">
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
                        Ukrainienne BALZAC HANSKA est une Association loi de
                        1901 N° W941007660 –{' '}
                        <span>
                            ouvrant droit à une réduction d’impôt et délivrance
                            d’un certificat de déductibilité fiscale.
                        </span>
                    </p>
                </div>
            </Grid>
            <Grid item sm={12} md={4}>
                <div className="cardItemHuma">
                    <div className="title2">Devenir benevole</div>
                    <div className="pDarkTheme">
                        <p>
                            Si vous avez des idées ou des projets à partager et
                            à developper avec nous,
                            <Link to="/contact">
                                contactez nous via le formulaire ou le mail.
                            </Link>
                        </p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
