import { Card, CardActionArea, CardMedia,CardContent, Grid, Pagination, } from "@mui/material"
import React from "react"
import './ProjectSlider.scss'
import newLocal from 'Assets/Balzac-Image.jpg'


export const ProjectSlider = () => {

  return(
    <>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="projectCard">
      <CardActionArea >
        <CardMedia className="projectPhoto"
          component="img"
          image={newLocal}
          alt=""
        />
        <CardContent>
          <h5>
          CHAUDIERE Ust-Chorna
          </h5>
          <div>
          Il s’agit de mettre en place une nouvelle chaudière avant les mois d’hiver afin de permettre à tous les déplacés (actuels et futurs) d’être accueillis dans ces locaux et d’avoir accès à un chauffage et eau chaude.Le chauffage bois permettra à la communauté de réaliser des économies, le bois étant disponible sur place ...
          </div>
          <h5>
          Budget chaudière : 40 000€
          </h5>
          <h5>
          Voir le details
          </h5>
        </CardContent>
      </CardActionArea>
    </Card>
   </Grid>
    
   <Grid item xs={12} sm={6} md={4}>
        <Card className="projectCard">
      <CardActionArea >
        <CardMedia className="projectPhoto"
          component="img"
          image={newLocal}
          alt=""
        />
        <CardContent>
          <h5>
          CHAUDIERE Ust-Chorna
          </h5>
          <div>
          Il s’agit de mettre en place une nouvelle chaudière avant les mois d’hiver afin de permettre à tous les déplacés (actuels et futurs) d’être accueillis dans ces locaux et d’avoir accès à un chauffage et eau chaude.Le chauffage bois permettra à la communauté de réaliser des économies, le bois étant disponible sur place ...
          </div>
          <h5>
          Budget chaudière : 40 000€
          </h5>
          <h5>
          Voir le details
          </h5>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
   
 
    <Grid item xs={12} sm={6} md={4}> 
    <Card className="projectCard">
      <CardActionArea >
        <CardMedia className="projectPhoto"
          component="img"      
          image={newLocal}
          alt=""
        />
        <CardContent>
          <h5>
          CHAUDIERE Ust-Chorna
          </h5>
          <div>
          Il s’agit de mettre en place une nouvelle chaudière avant les mois d’hiver afin de permettre à tous les déplacés (actuels et futurs) d’être accueillis dans ces locaux et d’avoir accès à un chauffage et eau chaude.Le chauffage bois permettra à la communauté de réaliser des économies, le bois étant disponible sur place ...
          </div>
          <h5>
          Budget chaudière : 40 000€
          </h5>
          <h5>
          Voir le details
          </h5>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    </Grid>
    <Pagination count={10} />
    
  
    </>
  )
}