import { Grid } from '@mui/material'
import React from 'react'
import './ProjectSlider.scss'
import ReactPaginate from 'react-paginate'
import { projects } from 'utils/projects'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CardSlider } from 'Components/Items/CardSlider'

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
        <div className="container">
            <Grid container spacing={2} justifyContent="center">
                {currentItems.map((project) => (
                    <Grid item sm={12} md={6} key={project.id}>
                        <Link to={`/humanitaire/projets/${project.id}`}>
                            <CardSlider
                                title={project.title}
                                text1={project.budget}
                                text2={project.date}
                                buttonText="Lire plus"
                            />
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
        </div>
    )
}
