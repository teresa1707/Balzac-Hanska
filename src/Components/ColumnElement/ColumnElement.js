import React from "react";
import './ColumnElement.scss'
import { Grid } from "@mui/material";
import { SocialMedia } from "Components/SocialMedia/SocialMedia";

export const ColumnElement =({title,text, link})=>{
  return(
    <>
   <Grid container spacing={4}>
    <Grid item sm={12} md={4}><div className="cardItem">
                        <div className="title2">Ce n’est que le début !</div>
                        <div className="text2 italic">
                            <p>
                             Vous pouvez nous rejoindre dans cette belle aventure humaine et nous aider dans nos différentes actions à venir et/ou par vos contributions financière sur le compte de notre association  <span style={{color:"white"}}>- IBAN FR76 3007 6020 8918 4734 0020 022.</span>
                            </p>
                            <p><SocialMedia/></p>
                        </div></div>
                
                    </Grid>
    <Grid item sm={12} md={4}><div className="cardItem">
                        <div className="title2">Ou...</div>
                        <div className="text2">
                            
                            <p>Il vous suffit de cliquer sur <a href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska/formulaires/1." target="_blank" title="HELLOASSO" rel="noreferrer">le lien </a>et de vous laisser guider.L’Association Franco Ukrainienne BALZAC HANSKA est une Association loi de 1901 N° W941007660 – <span>ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale.</span>
                            </p>
                        </div>
                    </div>
                    </Grid>
    <Grid item sm={12} md={4}>
    <div className="cardItem">
                        <div className="title2">Donner...</div>
                        <div className="text2">
                            <p>
                             ici le text concernant nos capacités
                                <span
                                    style={{
                                        color: 'orangered',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Want to join us?
                                </span>
                            </p>
                        </div>
                       
                    </div>
                    {/* <div className="cardItem">
                        <div className="title2">{title}</div>
                        <div className="text2">
                            <p>
                               {text} <a href={link} target="_blank" >LIEN</a>
                            </p>
                           
                        </div>
                       
                    </div> */}
                    </Grid>
   </Grid>
              
                    
                
                
                    
               

                
                   
                
            
    </>
  )
}