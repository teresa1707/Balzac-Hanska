
import { Card, CardActionArea, CardMedia,CardContent, Grid, Pagination, } from "@mui/material"
import React from "react"
import './ProjectSlider.scss'
import ReactPaginate from 'react-paginate';
import { projects } from "utils/projects"
import { useState } from "react";


export const ProjectSlider = () => {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 3;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / 3);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % projects.length;
    setItemOffset(newOffset);
  };

  return(
    <>
    <Grid container className="art-grid " spacing={2}>
      {currentItems.map((project) => (
                <Grid item xs={12} sm ={6} md={4} className="art-item">
                    
                        <div className="art-img-wrap">
                            <img alt={project.title} className="art-img" src={project.image} />
                        </div>
                        <div className="art-meta">
                            {project.date}
                        </div>
                        <Card className="art-category">
                           
                                
                                       
                                <div className="name-cat">
                                            {project.title}  
                                </div>
                            
                            <div className="art-text">
                                <p>{project.shortText}</p>
                            </div>
                          
                        </Card>
                  
                </Grid> 
                ))}

<ReactPaginate className="pagination"
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