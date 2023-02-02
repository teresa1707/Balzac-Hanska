import { Container, Grid } from '@mui/material'
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
            <div className="balzacList">
                <Grid container spacing={1} justifyContent="center">
                    {currentItems.map((article) => (
                        <Link
                            key={article.id}
                            to={`/culture/${article.id}`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Grid item xs={12}>
                                <div className="cardItem">
                                    <div className="projectPhoto">
                                        <img
                                            src={article.mainImage}
                                            alt="mainPhoto"
                                        />
                                    </div>

                                    <div className="cardContent">
                                        <div className="title2">
                                            {article.title}
                                        </div>
                                        <div className="text2">
                                            {article.text[0]}
                                        </div>
                                        <h5>{article.budget}</h5>
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
