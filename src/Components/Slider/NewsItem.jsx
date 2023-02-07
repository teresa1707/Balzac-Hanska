import { Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './NewsItem.scss'
import { humaNews } from 'utils/humaNews'
import { getObject } from 'utils/projects'
import { Container } from '@mui/material'
import DOMPurify from 'dompurify'
import { VideoPlayer } from 'Components/VideoPlayer/VideoPlayer'

export const NewsItem = ({ newsObject = getObject(humaNews ) }) => {
    let { id } = useParams()

    return (
        <div className="bgClear">
            <Container className="humaPadding newsItem">
                <h1>{newsObject[id].title}</h1>
                <Link to="/humanitarian">RETOUR</Link>
                <Grid
                    container
                    className="balzacItem item"
                    justifyContent="center"
                    alignItems="center"
                > <div id="caption">
                            <span className="text">
                                {newsObject[id].title}
                            </span>
                            <img
                                src={newsObject[id].image}
                                alt={newsObject[id].image}
                            />
                        </div>
                        <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[0].description}
                            </span>
                            <img
                                src={newsObject[id].image[0].image1}
                                alt={newsObject[id].image[0].description}
                            />
                        </div>
                    </Grid>
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
                                {newsObject[id].image[0].description}
                            </span>
                            <img
                                src={newsObject[id].image[0].image1}
                                alt={newsObject[id].image[0].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[1].description}
                            </span>
                            <img
                                src={newsObject[id].image[1].image2}
                                alt={newsObject[id].image[1].description}
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
                                {newsObject[id].image[2].description}
                            </span>
                            <img
                                src={newsObject[id].image[2].image3}
                                alt={newsObject[id].image[2].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {newsObject[id].image[3].description}
                            </span>
                            <img
                                src={newsObject[id].image[3].image4}
                                alt={newsObject[id].image[3].description}
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
                                src={newsObject[id].image[4].image5}
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
                                src={newsObject[id].image[5].image6}
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
                                src={newsObject[id].image[6].image7}
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
                                src={newsObject[id].image[7].image8}
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
                                src={newsObject[id].image[8].image9}
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
                    <VideoPlayer video={newsObject[id].video}/>
                    <Link to="/humanitaire" style={{ color: 'black' }}>
                        RETOUR
                    </Link>
                </Grid>
            </Container>
        </div>
    )
}
