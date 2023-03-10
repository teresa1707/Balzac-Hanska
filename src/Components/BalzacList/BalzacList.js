import { Grid } from '@mui/material'
import React from 'react'
import { balzac } from 'utils/balzac'
import './BalzacList.scss'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const BalzacList = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 3
    const endOffset = itemOffset + itemsPerPage
    const currentItems = balzac.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(balzac.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % balzac.length
        setItemOffset(newOffset)
    }
    return (
        <>
            <div className="balzacList bgClear">
                <Grid container spacing={6} justifyContent="center">
                    {currentItems.map(({ id, mainImage, title, text }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Link
                                to={`/culture/${id}`}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <div className="projectPhoto">
                                    <div className="title2">{title}</div>
                                    <img src={mainImage} alt="mainPhoto" />
                                    <div className="cardContent">
                                        <div className="text2">{text[0]}</div>
                                        <h5>Lire la suite</h5>
                                    </div>
                                </div>{' '}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}
