import { Grid } from '@mui/material'
import React from 'react'
import { balzac } from 'utils/balzac'
import './BalzacList.scss'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const BalzacList = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 9
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
                <Grid container spacing={1} justifyContent="center">
                    {currentItems.map(({ id, mainImage, title, text }) => (
                        <Link
                            key={id}
                            to={`/culture/${id}`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Grid item xs={12}>
                                <div className="cardItem">
                                    <div className="projectPhoto">
                                        <img src={mainImage} alt="mainPhoto" />
                                    </div>

                                    <div className="cardContent">
                                        <div className="title2">{title}</div>
                                        <div className="text2">{text[0]}</div>
                                        <h5>Lire la suite</h5>
                                        <h5></h5>
                                    </div>
                                </div>
                            </Grid>
                        </Link>
                    ))}
                </Grid>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}
