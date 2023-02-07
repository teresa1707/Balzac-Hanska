import { ContactForm } from 'Components/ContactForm/ContactForm'
import { Header } from 'Container/Header/Header'
import { CulturePage } from 'Container/pages/Culturel/CulturePage'
import { HumanitarianPage } from 'Container/pages/Humanitaire/HumanitarianPage'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { gsap } from 'gsap'

import './App.scss'
import { Main } from '../Main/Main'
import { ScrollUp } from 'Components/ScrollUp/ScrollUp'
import { BalzacItem } from 'Container/pages/Culturel/BalzacItem/BalzacItem'
import { BalzacList } from 'Components/BalzacList/BalzacList'
import { Footer } from 'Container/Footer/Footer'
import { ArticleItem } from 'Container/pages/Humanitaire/ArticleItem/ArticleItem'
import { NotFound } from 'Container/pages/NotFound/NotFound'
import { NewsSlider } from 'Components/Slider/Slider'
import { NewsItem } from 'Components/Slider/NewsItem'

export const App = () => {
    const onLoad = () => {
        gsap.timeline()
            .fromTo(
                '.logo',
                { opacity: 0, scale: 1 },
                {
                    y: -10,
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    duration: 1,
                    delay: 0.5,
                    scale: 0.6,
                }
            )
            .fromTo(
                '.navLinks',
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                }
            )
            .fromTo(
                '.slidingButton',
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    delay: 0.5,
                    duration: 1,
                }
            )
            .fromTo(
                '.logo',
                {
                    scale: 0.6,
                },
                {
                    scale: 0.7,
                }
            )
            .to('.logo', { scale: 0.6 })
    }
    function slideFade(elem, delay, duration) {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                stagger: {
                    each: 0.5,
                },
                delay: delay || 0.6,

                scrollTrigger: {
                    trigger: elem,
                },
                duration: duration || 0.6,
                ease: 'none',
                y: 0,
            }
        )
    }
    const slideUp = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || 0.6,
                duration: duration || 0.6,
                stagger: {
                    each: 0.2,
                },
                scrollTrigger: {
                    trigger: elem,
                    // start: 'top center',
                    // end: 'bottom center',
                },
            }
        )
    }
    function slideToUp(elem, delay, duration) {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || 0.6,
                duration: duration || 0.6,
                scrollTrigger: {
                    trigger: elem,
                    start: 'top center',
                    end: 'bottom center',
                },
            }
        )
    }

    const slideToLeft = (elem, delay, duration, stagger) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -200,
            },
            {
                opacity: 1,
                x: 0,
                delay: delay || 0.6,
                duration: duration || 0.6,
                stagger: {
                    each: stagger,
                },
                scrollTrigger: {
                    trigger: elem,
                    start: 'top center',
                    end: 'bottom center',
                },
            }
        )
    }

    return (
        <>
            <Header onLoad={onLoad} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main slideFade={slideFade} slideUp={slideUp} />
                        </>
                    }
                />
                <Route
                    path="/humanitarian"
                    element={
                        <>
                            <HumanitarianPage
                                slideToLeft={slideToLeft}
                                slideToUp={slideToUp}
                            />{' '}
                            <ContactForm />
                        </>
                    }
                />
                <Route
                    path="/culture"
                    element={
                        <>
                            <CulturePage
                                slideToUp={slideToUp}
                                slideToLeft={slideToLeft}
                            />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <ContactForm />
                        </>
                    }
                />
                <Route
                    path="/culture/balzacList"
                    element={
                        <>
                            <BalzacList />
                        </>
                    }
                />
                <Route
                    path="/culture/:id"
                    element={
                        <>
                            <BalzacItem />
                        </>
                    }
                />

                <Route
                    path="/humanitaire/projets/:id"
                    element={
                        <>
                            <ArticleItem />
                        </>
                    }
                />
                <Route
                    path="/humanitaire/news/:id"
                    element={
                        <>
                            <NewsItem />
                        </>
                    }
                />
                <Route
                    path="*"
                    element={
                        <>
                            <NotFound />
                        </>
                    }
                />
            </Routes>
            <Footer />
            <ScrollUp height={400} />
        </>
    )
}
