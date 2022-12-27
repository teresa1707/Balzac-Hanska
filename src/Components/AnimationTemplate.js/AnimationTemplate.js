import React, {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import './HumanitaryPage.scss'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const HumanitaryPage = () =>{

  const titleRef = useRef()

  const onLoad = () =>{
    gsap.timeline().fromTo(".letter",{
     x:-100,
     opacity:0,
    },{
     x:0,
     opacity:1,
     stagger:0.33,
     delay:0.7, 
    }
    ).to(".title",{
      y:45,
      delay:0.7,
    }).to(".letter",{
      margin:"0 5px",
      delay:0.7,
      duration:0.5,
    }).to(".letter",{
      margin:0,
      delay:0.7,
      duration:0.5,
    }).to(".letter",{
      x:-titleRef.current.clientWidth,
      delay:1,
      duration:2,
      rotate:360,
    }).to(window,{
      duration:2,
      scrollTo:("#nextSection"),
    }).to("#nextSection",{
      backgroundColor:"green",
      color:"white",
      duration:0.2,
    
    }).to(".title",{
      y:0,
    
    }).to(".letter",{
      x:0,
  
  })
  }


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
        onLoad();
      }, [])
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
  <div className="App">
    <h1 className="title" ref={titleRef}>
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
  
      <div id='box1' className='box box1'>BOX 1</div>
      <div id='box2' className='box box2'>BOX 2</div>
      <div id='box3' className='box box3'>BOX 3</div>
      <div id='box4' className='box box4'>BOX 4</div>
    
</div>
<div id='lastSection' className='section' onMouseEnter={onEnter} onMouseOut={onLeave}>
<div id='box5' className='box'>LAST SECTION</div>
   </div>
  </div>


  </>
)
}