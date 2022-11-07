import React, { useState } from "react";
import { Logo } from "Components/LogoBalzacHanska/Logo";

import "./Menu.scss";


export const Menu=()=>{


  return (<>
   <a href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska">HELLO ASSO</a>
    <div className="menuMain">
       
       <Logo/>
    
    </div>

    </>
  );
}