import React from 'react'
import { Card, Grid } from '@mui/material'
import { Container } from '@mui/system'

import 'Container/Footer/Footer.scss'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'

export const Footer = () => {
    return (
        <>
            <div className="wrapper-beige">
                <Container className="footer">
                    <Grid container mb={2} spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="footerCard"
                                style={{
                                    borderRadius: 8,
                                }}
                            >
                                <h1 className="title2">Follow us</h1>

                                <p
                                    style={{
                                        color: 'grey',
                                    }}
                                >
                                    We are here :
                                </p>
                                <div style={{ margin: '10px 30px' }}>
                                    <SocialMedia />
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Card
                                className="footerCard"
                                style={{
                                    borderRadius: 8,
                                }}
                            >
                                <h4 className="title2">Where we are</h4>

                                <p
                                    style={{
                                        color: 'grey',
                                    }}
                                >
                                    10, avenue de champs Elisée
                                    <br />
                                    75008 PARIS, FRANCE
                                    <br />
                                    mail:name@domaine.com
                                    <br />
                                    tel: +33(0)123456789
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="footerCard"
                                style={{
                                    borderRadius: 8,
                                }}
                            >
                                <h4 className="title2">Title</h4>

                                <p
                                    style={{
                                        color: 'grey',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Alias nemo iusto ab eum
                                    consequuntur suscipit magni voluptatum
                                    dicta, corrupti recusandae.
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="wrapper-dark">
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={10} className="footer-end">
                            <div>©2022 Teresa V | All rights reserved</div>
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
                    </Grid>
                </Container>
            </div>
        </>
    )
}
