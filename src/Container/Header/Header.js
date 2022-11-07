import React from 'react'

import './Header.scss'
import Balzac from "../../Assets/Balzac-Image.jpg"
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react'
import { Menu } from 'Components/Menu/Menu'
import { SliderMenu } from 'Components/SliderMenu/SliderMenu'
import { Grid } from '@mui/material'






export const Header = () => {
    const [sticky, setSticky] = useState(false)

    const stickyNav = () => {
        if (window.scrollY > 550) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    window.addEventListener("scroll", stickyNav)

    return (
        <>   <div className='fond'>
                     <div className={sticky ? "main_h sticky" : "main_h"}>

<div className="logo"><Menu /></div>

</div>

            <Grid   container
  direction="row"
  justifyContent="center"
  alignItems="center">
            <Grid item md={5}><img className='imgBalzac' src={Balzac} style={{maxWidth:"600px"}}/> </Grid>
                <Grid item md={7}>
                    <h3 className='headerH3'>Bienvenue sur le site de notre association!</h3>

                   

                    <p>Beaucoup d’événements, de personnes, relient l’Ukraine à la France (et la France à l’Ukraine) et l’amour de Balzac et de Madame Hanska en est un et l’un des plus méconnus.</p>

                    <p>Notre association a été créée dans le but de perpétuer, célébrer et rendre hommage à la mémoire des amours d'Honoré de Balzac et de la Comtesse Ewelyna Hanska.</p>

                    <p>Depuis notre création en 2012, nous avons déjà réalisé quelques projets, notamment la création d’un musée du souvenir à Berditchev dans le Centre Commercial «&nbsp;Galerie Balzac&nbsp;», situé juste en face de l’église ou se sont mariés Honoré de Balzac et Madame Hanska. Nous avons également apporté notre aide à la première traduction en langue ukrainienne d’une des œuvres de Balzac «&nbsp;Scènes de la vie parisienne&nbsp;» &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.</p>

                    <p>Et de nombreux projets se profilent, des expositions, d’autres traductions des œuvres de Balzac en langue ukrainienne, etc.</p>

                    <p >Mais notre projet le plus important est à terme de pouvoir rénover le Château de Verhivnya qui par manque de moyens, comme malheureusement beaucoup d’endroits historiques en Ukraine, se dégrade régulièrement, et ce serait une énorme perte car un véritable petit musée y a été créé, rattaché au Musée de Jytomyr, qui enferme de vrai merveilles lié à Balzac, à la Comtesse Hanska, et à leur amour.</p>

                    <p>Sur ce site, vous pourrez trouver l’histoire des voyages de Balzac pour rejoindre son aimée &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;, nos &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;, si notre cause vous intéresse vous pourrez également faire une &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;.
                    </p>
                    <p >N’hésitez pas à nous contacter, nous sommes à votre disposition&nbsp;</p>
                </Grid>
               
            </Grid>
 
        </div>
        <SliderMenu/>
        </>
    )
}