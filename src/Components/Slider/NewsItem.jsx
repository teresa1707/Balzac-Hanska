import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import './NewsItem.scss'
import { humaNews } from 'utils/humaNews'
import { getObject } from 'utils/projects'
import { Container } from '@mui/material'
import DOMPurify from 'dompurify'
import { Button } from 'Components/MyButton/Button'

export const NewsItem = ({ newsObject = getObject(humaNews) }) => {
    let { id } = useParams()

    return (
        <div className="humaPadding">
            <Container className="newsItem">
                <h1>{newsObject[id].title}</h1>
                <Button BtnText="<<< Actualités" />
                <Grid
                    container
                    className="balzacItem item"
                    justifyContent="center"
                    alignItems="center"
                >
                    {' '}
                    <div id="caption">
                        <img
                            src={newsObject[id].image}
                            alt={newsObject[id].image}
                        />
                    </div>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[0]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].imageArray[0].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[0].image}
                                alt={newsObject[id].imageArray[0].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].imageArray[1].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[1].image}
                                alt={newsObject[id].imageArray[1].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].imageArray[2].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[2].image}
                                alt={newsObject[id].imageArray[2].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[1]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[2]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].imageArray[3].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[3].image}
                                alt={newsObject[id].imageArray[3].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].imageArray[4].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[4].image}
                                alt={newsObject[id].imageArray[4].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[3]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[4]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[4].description}
                            </span>
                            <img
                                src={newsObject[id].image[4].image}
                                alt={newsObject[id].image[4].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[5]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[5].description}
                            </span>
                            <img
                                src={newsObject[id].image[5].image}
                                alt={newsObject[id].image[5].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[6]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[7]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[8]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[6].description}
                            </span>
                            <img
                                src={newsObject[id].image[6].image}
                                alt={newsObject[id].image[6].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[7].description}
                            </span>
                            <img
                                src={newsObject[id].image[7].image}
                                alt={newsObject[id].image[7].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[9]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[10]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[8].description}
                            </span>
                            <img
                                src={newsObject[id].image[8].image}
                                alt={newsObject[id].image[8].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[11]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Button BtnText="Actualités" />
                </Grid>
            </Container>
        </div>
    )
}
