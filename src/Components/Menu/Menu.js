import React, { useState } from "react";
import { Logo } from "Components/LogoBalzacHanska/Logo";

import "./Menu.scss";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";


export const Menu=()=>{


  return (<>

        <nav className="menu">
          <ul>
            <li><Link to="/culture">Projets Culturels</Link></li>
            <li><Link to="/humanitary">Projets Humanitaires</Link></li>
           
          </ul>
        </nav>
    </>
  );
}