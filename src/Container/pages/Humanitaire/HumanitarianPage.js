import React, {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { TrackList } from 'Components/TrackList/TrackList'

import { Container } from '@mui/system'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const HumanitarianPage = () =>{

  
return(
  <>
  <div className="App">
  
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
<Container>
    
      <ColumnElement/>
     

    <ProjectSlider/>
      <TrackList/>

   
 </Container>
      <div id='box3' className='box box3'>BOX 3</div>
      <div id='box4' className='box box4'>BOX 4</div>
      
</div>

  </>
)
}