import React, { useState } from "react";
import { Logo } from "Components/LogoBalzacHanska/Logo";

import "./Menu.scss";
import { Container, Grid } from "@mui/material";


export const Menu=()=>{


  return (<>
  <Container>
    
    <Grid item><a href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska">HELLO ASSO</a>
    </Grid>
    
    <Grid item>
      <nav>
        <li>Culturelle</li>
        
        <li>Humanitaire</li>
          
          
      </nav>
    </Grid>
    </Container>

   
       
     

    </>
  );
}