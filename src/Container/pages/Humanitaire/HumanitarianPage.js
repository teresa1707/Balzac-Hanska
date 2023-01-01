import React, {useEffect,useRef, useState} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { TrackList } from 'Components/TrackList/TrackList'

import { ColumnElement } from 'Components/ColumnElement/ColumnElement'



gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const HumanitarianPage = () =>{
let text="Il vous suffit de cliquer sur le lien et de vous laisser guider.L’Association Franco Ukrainienne BALZAC HANSKA est une Association loi de 1901 N° W941007660 –ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale."
let title="OU..."
let link = "https://www.chateaudelarocheguyon.fr/le-potager-fruitier/"
  
return(
  <>
  <div className="App">
  <div className='humaPadding'></div>
  <div className="card animated fadeInDownBig">
  <div className="card__img animated fadeInLeft"></div>
  <div className="card__content">
    <h1 className="card__title animated fadeInDown">
      <span >A la une</span>
      <span className="small">de</span> 
      <span>nos actions numanitaires</span>
    </h1>
    <p className="card__quote animated fadeInUp">Le huitième camion bien rempli à quitté la France le 21 decembre 2022 et est arrivé sans incident en Ukraine le 26 decembre. Grace aux efforts de nous tous reunis nous avons pu envoyer les produits de première necessité , tant attendus par nos amis ukrainiens. </p>
  </div>
</div>

<div className='humaPadding'><ColumnElement text={text} title={title} link={link}/></div>


     

    <ProjectSlider/>
    <div className='humaPadding'></div>
      <TrackList/>

   
 
     
      
</div>
 


  </>
)
}