import React from 'react'
import { Grid } from '@mui/material'
import 'Container/Footer/Footer.scss'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'

export const Footer = ({ closeMenu }) => {
    return (
        <>
            <div className="footerCard">
                <Grid container mb={2} spacing={3} className="footer">
                    <Grid item sm={12} md={3} className="ft1">
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

                    <Grid item sm={12} md={3} className="ft2">
                        <h2 className="titleSlider">Nous suivre:</h2>

                        <SocialMedia />
                        <hr></hr>
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
                                paddingBottom: 10,
                            }}
                        >
                            L’Association Franco Ukrainienne BALZAC HANSKA est
                            une Association loi de 1901 N° W941007660 – ouvrant
                            droit à une réduction d’impôt et délivrance d’un
                            certificat de déductibilité fiscale.
                        </p>
                    </Grid>
                    <Grid item sm={12} md={3} className="ft3">
                        <div className="footerMenu">
                            <Link to="/">Accueil</Link>

                            <Link to="/culture">Culture</Link>

                            <Link to="/humanitarian">Humanitaire</Link>

                            <Link to="/contact">Contact</Link>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={3} className="ft4">
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
                                className="formButton"
                                type="submit"
                                value="Submit"
                                id="input-submit"
                            />
                        </form>
                    </Grid>
                </Grid>
            </div>

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
