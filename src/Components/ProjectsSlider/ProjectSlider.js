import { Card, Grid } from '@mui/material'
import React from 'react'
import './ProjectSlider.scss'
import ReactPaginate from 'react-paginate'
import { projects } from 'utils/projects'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ProjectSlider = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const numCard = 3
    const endOffset = itemOffset + numCard
    const currentItems = projects.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(projects.length / numCard)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * numCard) % projects.length
        setItemOffset(newOffset)
    }

    return (
        <>
            <Grid container className="art-grid container">
                <div className="humaPaddingSlider"></div>
                {currentItems.map((project) => (
                    <Grid item sm={6} md={4} key={project.id}>
                        <Link
                            to={`/humanitaire/projets/${project.id}`}
                            className="art-item"
                        >
                            <Card id="caption">
                                <div className="art-img-wrap">
                                    <img
                                        alt={project.title}
                                        className="art-img"
                                        src={project.imageTitle}
                                    />
                                    <div className="name-cat">
                                        {project.title}
                                        <br></br>
                                        {project.budget}
                                        <br></br>
                                        {project.date}
                                    </div>
                                </div>
                                <div className="text bgClear">
                                    <div className="art-text">
                                        <p>{project.shortText1}</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}
