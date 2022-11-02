import React from "react";
import { Logo } from "../LogoBalzacHanska/Logo";
import "./HeaderIntro.scss";
import Balzac from "../../Assets/Balzac-Image.jpg"

export const HeaderIntro=()=>{
  return (
    <div className="headerContainer">
        <Logo/>
     <img src={Balzac}/>
    
    
    
    </div>    
  );
}