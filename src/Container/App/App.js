
import { ContactForm } from "Components/ContactForm/ContactForm";
import { Header } from "Container/Header/Header";
import { CulturePage } from "Container/pages/Culturel/CulturePage";
import { HumanitarianPage } from "Container/pages/Humanitaire/HumanitarianPage";
import React,{useRef, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { Footer } from "../Footer/Footer";
import "./App.scss"
import { Main } from "../Main/Main";
import { ScrollUp } from "Components/ScrollUp/ScrollUp";


export const App = () => {
    const titleRef = useRef()
    const onLoad = () =>{
        gsap.timeline().fromTo(".logo",{
         opacity:0,
         scale:1.4,
        },{
         y:0,
         x:0,
         opacity:1,
         stagger:0.33,
         duration:1,
         delay:0.5, 
         scale:0.9,
        }
        ).fromTo(".menu", {
            x:100,
            opacity:0,
        },{
            x:0,
            opacity:1,
            delay:0.5,
            duration:1.5,
        }).fromTo(".slidingButton", {
            x:-100,
            opacity:0,
        },{
            x:0,
            opacity:1,
            delay:1,
            duration:1.5,
            
        }).to(".logo",{
            scale:0.8,
            duration:1,
           }
           )
      } 
      
      useEffect(()=>{
    onLoad();
  }, [])

    return (
        <> 
           
            <Header/>
            <Routes>
        <Route path="/" element={<><Main /></>}/>
        <Route path="/humanitarian" element={<><HumanitarianPage/> <ContactForm /></>}/>
        <Route path="/culture" element={<><CulturePage/></>}/>
        <Route path="/contact" element={<><ContactForm /></>}/>
        
</Routes>
            <Footer/>
            <ScrollUp height={400} />
        </>
    );
};