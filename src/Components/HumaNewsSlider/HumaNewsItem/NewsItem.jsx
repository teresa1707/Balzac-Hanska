import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import './NewsItem.scss'
import { humaNews } from 'utils/humaNews'
import { getObject } from 'utils/projects'
import { Container } from '@mui/material'
import DOMPurify from 'dompurify'
import { Button } from 'Components/MyButton/Button'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'
import { SocialMedia } from 'Components/SocialMedia/SocialMedia'
import { CommentAider } from 'Components/CommentAider/CommentAider'
import { MdDateRange } from 'react-icons/md'
import { NewsSlider } from 'Components/Slider/Slider'

export const NewsItem = ({ newsObject = getObject(humaNews) }) => {
    let { id } = useParams()

    return (
        <div className="humaPadding">
            <Container className="newsItem">
                <TitleBlock title={newsObject[id].title} />
                <Button BtnText="<< Actualités" />

                <div className="cover item">
                    <NewsSlider items={humaNews[id - 1].imageArray} />
                </div>
                <div className="post-info item">
                    <div className="title"></div>
                    <div className="desc">
                        <span
                            style={{
                                fontSize: 18,
                                color: 'gray',
                            }}
                        >
                            <MdDateRange /> {newsObject[id].date}
                        </span>
                        <span
                            style={{
                                scale: '1.2',
                            }}
                        >
                            <SocialMedia />
                        </span>
                        {/*  <span></span> */}
                    </div>
                </div>
                <Grid
                    container
                    className="item textBody"
                    justifyContent="center"
                >
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
                        <CommentAider />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className="newsPhoto">
                            <img
                                src={newsObject[id].imageArray[0].image}
                                alt={newsObject[id].imageArray[0].description}
                            />{' '}
                            <br />
                            <span className="text">
                                {newsObject[id].imageArray[0].description}
                            </span>
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
                    </Grid>{' '}
                    <Grid item sm={12} md={6}>
                        <div className="newsPhoto">
                            <span className="text">
                                {newsObject[id].image[1].description}
                            </span>
                            <img
                                src={newsObject[id].imageArray[1].image}
                                alt={newsObject[id].imageArray[1].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[2]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[3]
                                ),
                            }}
                        ></p>
                    </Grid>{' '}
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    newsObject[id].text[4]
                                ),
                            }}
                        ></p>
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
                    <Button BtnText="Retour aux actualités" />
                </Grid>
            </Container>
        </div>
    )
}
