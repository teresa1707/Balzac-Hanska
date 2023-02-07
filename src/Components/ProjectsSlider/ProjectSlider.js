import { Card, Grid } from '@mui/material'
import React from 'react'
import './ProjectSlider.scss'
import ReactPaginate from 'react-paginate'
import { projects } from 'utils/projects'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ProjectSlider = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const numCard = 4
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
                <Grid item sm={12} className="titleSlider">
                    L’UKRAINE A BESOIN DE NOUS, AIDONS-LA ET SOYONS ENGAGES !!
                    <p className="pDarkTheme">
                        Cette terrible guerre en Ukraine n’a malheureusement pas
                        cessé... L’hiver arrive et nos amis ukrainiens ont
                        besoin de nous.L’état ukrainien a demandé aux régions de
                        réouvrir des anciens hôpitaux ou autres centres
                        d’accueil fermés afin de pouvoir accueillir la
                        population déplacée dans l’ouest de l’Ukraine qui se
                        compte par millions de personnes.
                    </p>
                    <p className="pDarkTheme">
                        Cependant les infrastructures sont souvent vétustes.La
                        plupart du temps ces réouvertures se sont faites dans
                        l’urgence afin de procurer à ces déplacés le minimum en
                        matière de logement pour survivre avec des conditions
                        sanitaires à la limite de l’acceptabilité. La capacité
                        de ces établissements varie entre 150 et 300 déplacés.
                        Nous souhaitons leur venir en aide! Ci-après un exemple
                        urgent identifié lors de nos dernières missions en
                        Ukraine.
                    </p>
                </Grid>
                <div className="humaPaddingSlider"></div>
                {currentItems.map((project) => (
                    <Grid
                        item
                        sm={6}
                        md={3}
                        className="art-item"
                        key={project.id}
                    >
                        <Link to={`/humanitaire/projets/${project.id}`}>
                            <Card className="art-category bgClear" id="caption">
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
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}
