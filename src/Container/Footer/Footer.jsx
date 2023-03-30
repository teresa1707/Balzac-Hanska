import React from 'react'
import { Grid } from '@mui/material'
import 'Container/Footer/Footer.scss'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Footer = () => {
    const [nlForm, setNlForm] = useState({ email: '' })
    const changeHandler = (e) => {
        setNlForm({ ...nlForm, [e.target.name]: e.target.value })
    }
    const resetForm = () => {
        setNlForm({
            email: '',
        })
    }
    const sendMessage = (e) => {
        e.preventDefault()

        if (window.Email) {
            if (
                nlForm.email === '' &&
                nlForm.email.indexOf('@', 0) < 0 &&
                nlForm.email.indexOf('.', 0) < 0
            ) {
                alert('Mettez une adresse email valide')
                return false
            } else {
                window.Email.send({
                    SecureToken: 'b2225f60-8235-4d95-8b93-170c0a69dca1',
                    To: 'contact@associationbalzachanska.com',
                    From: 'contact@associationbalzachanska.com',
                    Subject: `souscrire la newsLetter de ${nlForm.email}`,
                    Body: `
                    <p><b>email: </b> ${nlForm.email}</p>    
            `,
                })
                    .then((message) => {
                        console.log(message)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            resetForm()
        }
    }

    return (
        <>
            <div className="footerCard">
                <Grid container spacing={3} className="footer">
                    <Grid item sm={12} md={6} lg={3} className="ft1">
                        <h2 className="titleSlider">Nos coordonnées:</h2>

                        <p className="pDarkTheme small">
                            79, avenue la Bruyere
                            <br />
                            94400 Vitry-Sur-Seine, FRANCE
                            <br />
                            mail:associationbalzachanska@gmail.com
                            <br />
                            tel: +33(0)123456789
                        </p>
                        <p className="pDarkTheme small">
                            Ukraine, 13301, Berdychiv,
                            <br />
                            RUE EUROPEYSKA, bâtiment 26, bureau 422
                            <br />
                            mail:associationbalzachanska@gmail.com
                            <br />
                            tel: +38 063 613 87 46
                        </p>
                    </Grid>

                    <Grid item sm={12} md={6} lg={3} className="ft2">
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
                    <Grid item sm={12} md={6} lg={3} className="ft3">
                        <div className="footerMenu">
                            <Link to="/">Accueil</Link>

                            <Link to="/culture">Culture</Link>

                            <Link to="/humanitarian">Humanitaire</Link>

                            <Link to="/contact">Contact</Link>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3} className="ft4">
                        <h2 className="titleSlider">
                            S'abonner à la Newsletter
                        </h2>

                        <form method="POST" onSubmit={sendMessage}>
                            <input
                                name="email"
                                type="email"
                                id="input-email"
                                value={nlForm.email}
                                placeholder="*Email address"
                                onChange={changeHandler}
                            />

                            <input
                                className="button formButton"
                                type="submit"
                                value="Envoyer"
                                id="input-submit"
                            />
                        </form>
                    </Grid>
                </Grid>
            </div>

            <div className="pDarkTheme footer-end">
                ©2022-23 TeriV | tvlviv@yahoo.com
            </div>
        </>
    )
}
