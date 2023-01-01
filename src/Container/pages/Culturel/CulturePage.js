import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './CulturePage.scss'
import { AnimationTemplate } from 'Components/AnimationTemplate.js/AnimationTemplate'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const CulturePage = () =>{
  function slideToUp(elem, delay, duration) {
    gsap.fromTo(elem, {
      opacity: 0,
      y: -200
    },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.6,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideToLeft = (elem, delay, duration)=>{
    gsap.fromTo(elem, {
      opacity:0,
      x:-200,
    },
    {
      opacity:1,
      x:0,
      delay: delay || 0.6,
      duration: duration || 0.6,
      scrollTrigger:{
        trigger:elem,
        start:"top center",
        end:"bottom center"
      }
    }
    )
      }

 
 useEffect(()=>{
    slideToUp('#box1','1','2');
  }, [])
   
      useEffect(()=>{
        slideToLeft('.footerCard','0','2');
      }, [])

      useEffect(()=>{
        slideToUp('.ft1','1','2');
      }, [])
      useEffect(()=>{
        slideToLeft('.ft2','2','2');
      }, [])
      useEffect(()=>{
        slideToUp('.ft3','3','2');
      }, [])

return(
  <>
  <div className="AppCulture">
    <div id='nextSection' className='section'>
  
      <div id='box1' className='box box1'>   
  <div className="cardCulture ">
  <div className="card__imgCulture"></div>
  <div className="card__contentCulture">
    <h1 className="card__titleCulture ">
      <span >Cette page 
      </span>
      <span className="smallCulture">est</span> 
      <span>en construction</span>
    </h1>
    <p className="card__quoteCulture"><span>A bientôt!</span></p>
  </div>
</div> </div>
 
  
</div></div>
<AnimationTemplate/>
  </>
)
}