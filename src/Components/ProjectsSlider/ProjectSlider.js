
import { Card, CardActionArea, CardMedia,CardContent, Grid, Pagination, } from "@mui/material"
import React from "react"
import './ProjectSlider.scss'
import newLocal from 'Assets/Balzac-Image.jpg'
import { projects } from "utils/projects"


export const ProjectSlider = () => {

  return(
    <>
    <Grid container className="art-grid " spacing={2}>
      {projects.map((project) => (
                <Grid item sm ={12} md={4} className="art-item">
                    
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
            </Grid>
  
    </>
  )
}