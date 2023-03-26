import { Card, Grid } from '@mui/material'
import React from 'react'
import './CultureSlider.scss'
import ReactPaginate from 'react-paginate'
import { presse } from 'utils/presse'
import { useState } from 'react'
import DOMPurify from 'dompurify'

export const CultureSlider = () => {
    const [itemOffset, setItemOffset] = useState(0)
    const numCard = 4
    const endOffset = itemOffset + numCard
    const currentItems = presse.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(presse.length / numCard)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * numCard) % presse.length
        setItemOffset(newOffset)
    }

    return (
        <>
            <Grid container className="art-grid container">
                {currentItems.map((article) => (
                    <Grid item sm={6} md={3} key={article.id}>
                        <a href={article.link} className="art-item">
                            <Card id="card">
                                <div className="art-img-wrap">
                                    <img
                                        alt={article.title}
                                        className="art-img"
                                        src={article.image}
                                    />
                                    <div
                                        className="name-cat"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                article.title
                                            ),
                                        }}
                                    ></div>
                                </div>
                                <div>
                                    <p
                                        className="text bgClear"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                article.shortText
                                            ),
                                        }}
                                    ></p>
                                </div>
                            </Card>
                        </a>
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
