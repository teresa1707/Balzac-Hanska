
import {  CardMedia, Grid} from "@mui/material"
import React from "react"
import { tracks } from "utils/tracks"
import './TrackList.scss'
import ReactPaginate from 'react-paginate';
import { useState } from "react";

export const TrackList = ()=>{
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 3;
  const currentItems = tracks.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tracks.length / 3);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % tracks.length;
    setItemOffset(newOffset);
  };
  return(
    <>
   
   <Grid container spacing={1} className="trackList">
    {currentItems.map((track)=>(<Grid item xs={12} sm={6} md={4} key={track.id}>
        <div className="projectCard cardItem" >
      
        <CardMedia className="projectPhoto"
          component="img"
          image={track.image}
          alt=""
        />
        <div className="cardContent">
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
        </div>
     
    </div>

 
   </Grid>))}
      
   <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  
    </Grid>

    
          
    </>
  )
}