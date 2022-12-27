
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material"
import React from "react"
import { tracks } from "utils/tracks"
import './TrackList.scss'

export const TrackList = ()=>{
  const newLocal = "Subheader"
  return(
    <>
   <ImageList sx={{ width: "100vw"}} cols={3}>    
   {tracks.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.date}</span>}
            position="below"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.date}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  )
}