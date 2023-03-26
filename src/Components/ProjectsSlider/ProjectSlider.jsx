import { Grid } from '@mui/material'
import React from 'react'
import './ProjectSlider.scss'
import ReactPaginate from 'react-paginate'
import { projects } from 'utils/projects'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlidingButton } from 'Components/MyButton/SlidingButton'
import { ButtonYellow } from 'Components/MyButton/ButtonYellow'

export const ProjectSlider = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const numCard = 2
    const endOffset = itemOffset + numCard
    const currentItems = projects.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(projects.length / numCard)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * numCard) % projects.length
        setItemOffset(newOffset)
    }

    return (
        <>
            <Grid container spacing={3} className="container">
                {currentItems.map((project) => (
                    <Grid item sm={12} md={6} key={project.id}>
                        <Link to={`/humanitaire/projets/${project.id}`}>
                            <div className="right">
                                <div className="left">
                                    <div>
                                        <div className="text1">
                                            {project.title}
                                        </div>
                                        <p className="text2 projectSpan">
                                            - {project.budget}
                                        </p>
                                        <p className="text2 projectSpan">
                                            - {project.date}
                                        </p>
                                        <ButtonYellow text="Lire plus" />
                                    </div>
                                </div>

                                <div className="textRight">
                                    <div className="projectImg">
                                        {' '}
                                        <img
                                            alt={project.title}
                                            src={project.imageTitle}
                                        />
                                    </div>

                                    <p>{project.shortText1}</p>
                                </div>
                            </div>
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
