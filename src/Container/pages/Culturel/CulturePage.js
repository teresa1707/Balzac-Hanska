import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './CulturePage.scss'
import { AnimationTemplate } from 'Components/AnimationTemplate.js/AnimationTemplate'
import { BalzacList} from 'Components/BalzacList/BalzacList'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const CulturePage = () =>{
  function slideToUp(elem, delay, duration) {
    gsap.fromTo(elem, {
      opacity: 0,
      y: -200
    },
      {
        opacity: 1,
        y: -100,
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
  <><div className='humaPadding'></div>
  <div className="AppCulture">
  
    <div id='nextSection' className='section'>
  
      <div id='box1' className='box box1'>   
  <div className="cardCulture ">
  <div className="card__imgCulture"></div>
  <div className="card__contentCulture">
    <h1 className="card__titleCulture ">
      <span >Balzac 
      </span>
      <span className="small">et</span> 
      <span>Hanska</span>
    </h1>
    <p className="card__quoteCulture"><span>
Nous voulons faire connaitre le lien de Balzac avec l’Ukraine au travers de son histoire d’amour avec la princesse Hanska</span></p>
  </div>
</div>
 </div>
 
</div>


    </div>
    
                            <BalzacList/>

  </>
)
}