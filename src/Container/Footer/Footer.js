import React from 'react'
import { Card, Grid } from '@mui/material'
import { Container } from '@mui/material'

import 'Container/Footer/Footer.scss'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'


export const Footer = () => {
    return (
        <>
            <div className="footer">
            <Container>      
            <Card
                                className="footerCard"
                                style={{
                                    borderRadius: 5,
                                }}
                            >
                    <Grid container mb={2} spacing={3}>
                        <Grid item sm={12} md={4} className="ft1">
                         
                                <h2 className="footerTitle">Nous suivre</h2>
                              <div style={{ margin: '10px 30px' }}>
                                    <SocialMedia />
                                    
                                </div>
                                
                        </Grid>

                        <Grid item sm={12} md={4} className="ft2">
                          
                                <h2 className="footerTitle">Nos coordonnées:</h2>

                                <p
                                    style={{
                                        color: 'grey',
                                    }}
                                >
                                    79, avenue la Bruyere
                                    <br />
                                    94400 Vitry-Sur-Seine, FRANCE
                                    <br />
                                    mail:associationbalzachanska@gmail.com
                                    <br />
                                    tel: +33(0)123456789
                                </p>
                                <p
                                    style={{
                                        color: 'grey',
                                    }}
                                >
                                    79, avenue la Bruyere
                                    <br />
                                    94400 Vitry-Sur-Seine, FRANCE
                                    <br />
                                    mail:associationbalzachanska@gmail.com
                                    <br />
                                    tel: +33(0)123456789
                                </p>
                           
                        </Grid>
                        <Grid item sm={12} md={4} className="ft3">
                           
                                <h2 className="footerTitle">S'abonner à la Newsletter</h2>

                                <form >
  <div>
    
    <input type="email" id="input-email" placeholder="*Email address"/>
    
  </div>
 
  <input type="submit" value="Submit" id="input-submit" />
</form>
                         
                        </Grid>
                    </Grid>  
               </Card  >   
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
