import React, {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './CulturePage.scss'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const CulturePage = () =>{

  const titleRef = useRef()
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

      const onEnter=({currentTarget})=>{
        gsap.to(currentTarget, {
          backgroundColor:"black",
          color:"white",
        })
      }

      const onLeave=({currentTarget})=>{
        gsap.to(currentTarget, {
          backgroundColor:"red",
          color:"white",
        })
      }

   
  useEffect(()=>{
    slideToUp('#box1','1','2');
  }, [])
  useEffect(()=>{
    slideToUp('#box2');
  }, [])
  useEffect(()=>{
    slideToLeft('#box3');
  }, [])
  useEffect(()=>{
    slideToLeft('#box4');
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
    <p className="card__quoteCulture "><span>All men dream, but not equally. Those who dream by night in the dusty recesses of their minds, wake in the day to find that it was vanity; but the dreamers of the day are dangerous men, for they may act on their dreams with open eyes to make it a reality.</span></p>
  </div>
</div> </div>
 
  
</div></div>

  </>
)
}