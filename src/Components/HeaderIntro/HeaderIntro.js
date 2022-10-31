import React from "react";
import { Logo } from "../LogoBalzacHanska/Logo";
import "./HeaderIntro.scss";
import Balzac from "../../Assets/Balzac-Image.jpg"

export const HeaderIntro=()=>{
  return (
    <div className="headerContainer">
      <Logo/>
     <img src={Balzac}/>
     <div>
      <iframe
        src="https://www.youtube.com/embed/C0DPdy98e4c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div>
    </div>
  );
}