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
    
    <div className="main_h">
       
       <div className="logo"><Logo/></div>
    
    </div>

    </>
  );
}