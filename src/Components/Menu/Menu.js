import React, { useState } from "react";
import { Logo } from "../LogoBalzacHanska/Logo";

import "./Menu.scss";


export const Menu=()=>{
const [sticky, setSticky]=useState(false)

const stickyNav = () =>{
  if(window.scrollY > 250 ){
setSticky(true)}
else{
  setSticky(false)
}
}

  window.addEventListener("scroll", stickyNav)

  return (<>
    
    <div className={sticky===false?"main_h":"main_h  sticky"}>
     
      <div className="menu">
        <div className="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Logo/>
        <nav >
          <ul>
            <li><a href=""> Projets culturelles</a></li>
            <li><a href="">Projets humanitaires</a></li>
          </ul>
        </nav>
      </div>
    
    </div>

    </>
  );
}