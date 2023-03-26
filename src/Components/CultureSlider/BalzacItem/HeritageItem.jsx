import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import './HeritageItem.scss'
import { balzac } from 'utils/balzac'
import { getObject } from 'utils/projects'
import { Container } from '@mui/material'
import DOMPurify from 'dompurify'
import { Button } from 'Components/MyButton/Button'

export const HeritageItem = ({ balzacObject = getObject(balzac), goBack }) => {
    let { id } = useParams()

    return (
        <>
            <div className="humaPadding"></div>
            <Container className="bgClear">
                <h1>{balzacObject[id].title}</h1>

                <Button BtnText="RETOUR >>>" goBack={goBack} />

                <Grid
                    container
                    className="balzacItem item"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[0]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[0].description}
                            </span>
                            <img
                                src={balzacObject[id].image[0].image1}
                                alt={balzacObject[id].image[0].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[1].description}
                            </span>
                            <img
                                src={balzacObject[id].image[1].image2}
                                alt={balzacObject[id].image[1].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[1]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[2]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[2].description}
                            </span>
                            <img
                                src={balzacObject[id].image[2].image3}
                                alt={balzacObject[id].image[2].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[3].description}
                            </span>
                            <img
                                src={balzacObject[id].image[3].image4}
                                alt={balzacObject[id].image[3].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[3]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[4]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[4].description}
                            </span>
                            <img
                                src={balzacObject[id].image[4].image5}
                                alt={balzacObject[id].image[4].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[5]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[5].description}
                            </span>
                            <img
                                src={balzacObject[id].image[5].image6}
                                alt={balzacObject[id].image[5].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[6]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[7]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[8]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[6].description}
                            </span>
                            <img
                                src={balzacObject[id].image[6].image7}
                                alt={balzacObject[id].image[6].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[7].description}
                            </span>
                            <img
                                src={balzacObject[id].image[7].image8}
                                alt={balzacObject[id].image[7].description}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[9]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[10]
                                ),
                            }}
                        ></p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div id="caption">
                            <span className="text">
                                {balzacObject[id].image[8].description}
                            </span>
                            <img
                                src={balzacObject[id].image[8].image9}
                                alt={balzacObject[id].image[8].description}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    balzacObject[id].text[11]
                                ),
                            }}
                        ></p>
                    </Grid>

                    <Button BtnText="RETOUR >>>" goBack={goBack} />
                </Grid>
            </Container>
        </>
    )
}
