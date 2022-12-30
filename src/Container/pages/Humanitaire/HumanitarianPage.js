import React, {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { TrackList } from 'Components/TrackList/TrackList'
import { Grid } from '@mui/material'


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
    <p className="card__quote animated fadeInUp"><span>All men dream, but not equally. Those who dream by night in the dusty recesses of their minds, wake in the day to find that it was vanity; but the dreamers of the day are dangerous men, for they may act on their dreams with open eyes to make it a reality.</span></p>
  </div>
</div>


    <div id='nextSection' classNameName='section'>
  
      <div id='box1' classNameName='box box1'><ProjectSlider/></div>
      <div id='box2' classNameName='box box2'><TrackList/></div>
      <div id='box3' classNameName='box box3'>BOX 3</div>
      <div id='box4' classNameName='box box4'>BOX 4</div>
    
</div>
<div id='lastSection' classNameName='section' >
<div id='box5' classNameName='box'>LAST SECTION</div>
   </div>
  </div>


  </>
)
}