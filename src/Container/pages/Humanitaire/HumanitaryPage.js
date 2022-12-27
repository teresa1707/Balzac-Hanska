import React, {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './HumanitaryPage.scss'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { TrackList } from 'Components/TrackList/TrackList'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const HumanitaryPage = () =>{

  
return(
  <>
  <div className="App">
    <h1 className="title" >
      <span className='letter'>N</span>
      <span className='letter'>O</span>
      <span className='letter'>S</span>
      <span className='letter'>  </span>
      <span className='letter'>A</span>
      <span className='letter'>C</span>
      <span className='letter'>T</span>
      <span className='letter'>U</span> 
      <span className='letter'>A</span>
      <span className='letter'>L</span>
      <span className='letter'>I</span>
      <span className='letter'>T</span>
      <span className='letter'>E</span>
      <span className='letter'>S</span></h1>
    <div id='nextSection' className='section'>
  
      <div id='box1' className='box box1'><ProjectSlider/></div>
      <div id='box2' className='box box2'><TrackList/></div>
      <div id='box3' className='box box3'>BOX 3</div>
      <div id='box4' className='box box4'>BOX 4</div>
    
</div>
<div id='lastSection' className='section' >
<div id='box5' className='box'>LAST SECTION</div>
   </div>
  </div>


  </>
)
}