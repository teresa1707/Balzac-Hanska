import React from 'react'
import { Card, Grid } from '@mui/material'
import { Container } from '@mui/material'

import 'Container/Footer/Footer.scss'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'

export const Footer = () => {
    return (
        <>
            <Card
                className="footerCard"
                style={{
                    borderRadius: 5,
                }}
            >
                <Container className="footer">
                    <Grid container mb={2} spacing={3}>
                        <Grid item sm={12} md={4} className="ft1">
                            <h2 className="titleSlider">Nos coordonnées:</h2>

                            <p className="pDarkTheme">
                                79, avenue la Bruyere
                                <br />
                                94400 Vitry-Sur-Seine, FRANCE
                                <br />
                                mail:associationbalzachanska@gmail.com
                                <br />
                                tel: +33(0)123456789
                            </p>
                            <p className="pDarkTheme">
                                Ukraine, 13301, Berdychiv,
                                <br />
                                RUE EUROPEYSKA, bâtiment 26, bureau 422
                                <br />
                                mail:associationbalzachanska@gmail.com
                                <br />
                                tel: +38 063 613 87 46
                            </p>
                        </Grid>

                        <Grid item sm={12} md={4} className="ft2">
                            <h2 className="titleSlider">Nous suivre:</h2>

                            <SocialMedia />

                            <h2 className="titleSlider">
                                Faire un don
                                <a
                                    className="footerTitle"
                                    href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    via HELLOASSO
                                </a>
                            </h2>
                            <div></div>
                            <p
                                className="pDarkTheme"
                                style={{
                                    textAlign: 'justify',
                                    paddingRight: 10,
                                }}
                            >
                                L’Association Franco Ukrainienne BALZAC HANSKA
                                est une Association loi de 1901 N° W941007660 –
                                ouvrant droit à une réduction d’impôt et
                                délivrance d’un certificat de déductibilité
                                fiscale.
                            </p>
                        </Grid>
                        <Grid item sm={12} md={4} className="ft3">
                            <h2 className="titleSlider">
                                S'abonner à la Newsletter
                            </h2>

                            <form>
                                <div>
                                    <input
                                        type="email"
                                        id="input-email"
                                        placeholder="*Email address"
                                    />
                                </div>

                                <input
                                    type="submit"
                                    value="Submit"
                                    id="input-submit"
                                />
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Card>

            <Grid item xs={12} sm={10}>
                <div className="pDarkTheme footer-end">
                    ©2022-23 TeriV | tvlviv@yahoo.com
                </div>
            </Grid>
            <Grid item xs={12} sm={2}>
                <a href="#Top_bar">
                    <img
                        className="footer-img"
                        src="./assets/arrow-up-20.png"
                        alt=""
                    />
                </a>
            </Grid>
        </>
    )
}
