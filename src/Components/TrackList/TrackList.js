
import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material"
import React from "react"
import { tracks } from "utils/tracks"
import './TrackList.scss'

export const TrackList = ()=>{
  const newLocal = "Subheader"
  return(
    <>
   
   <Grid container spacing={1}>
    {tracks.map((track)=>(<Grid item xs={12} sm={6} md={4}>
        <Card className="projectCard">
      <CardActionArea >
        <CardMedia className="projectPhoto"
          component="img"
          image={track.image}
          alt=""
        />
        <CardContent>
          <h5>
          {track.title}
          </h5>
          <div>
{track.shortText}
          </div>
          <h5>
          {track.budget}
          </h5>
          <h5>
          {track.link}{track.id}{track.date}
          </h5>
        </CardContent>
      </CardActionArea>
    </Card>
   </Grid>))}
      
  
    </Grid>

    
          
    </>
  )
}