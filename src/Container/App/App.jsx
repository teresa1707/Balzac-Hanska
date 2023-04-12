import { ContactForm } from 'Components/ContactForm/ContactForm'
import { Header } from 'Container/Header/Header'
import { CulturePage } from 'Container/pages/Culturel/CulturePage'
import { HumanitarianPage } from 'Container/pages/Humanitaire/HumanitarianPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { gsap } from 'gsap'

import './App.scss'
import { Main } from '../Main/Main'
import { ScrollUp } from 'Components/ScrollUp/ScrollUp'

import { BalzacList } from 'Components/BalzacList/BalzacList'
import { Footer } from 'Container/Footer/Footer'
import { ProjectItem } from 'Components/ProjectsSlider/ProjectItem/ProjectItem'
import { NotFound } from 'Container/pages/NotFound/NotFound'

import { BalzacItem } from 'Components/BalzacList/BalzacItem/BalzacItem'
import { useState } from 'react'
import { NewsItem } from 'Components/HumaNewsSlider/HumaNewsItem/NewsItem'
import { PdfReader } from 'Components/PdfReader/PdfReader'
import { HumaPresentation } from 'Components/HumaPresentation/HumaPresentation'

export const App = () => {
    //animation
    const onLoad = () => {
        gsap.timeline()
            .fromTo(
                '.logo',
                { opacity: 0, scale: 1 },
                {
                    y: -35,
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
                opacity: 1,
                y: 200,
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
    //contactForm and newsletter
    const [sent, setSent] = useState(false)
    const [newForm, setNewForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const changeHandler = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value })
    }

    const resetForm = () => {
        setNewForm({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
        setTimeout(() => {
            setSent({ sent: false })
        }, 2000)
    }

    const sendMessage = (e) => {
        e.preventDefault()

        if (window.Email) {
            if (newForm.name === '') {
                alert('Mettez votre nom')
                return false
            }
            if (
                newForm.email === '' &&
                newForm.email.indexOf('@', 0) < 0 &&
                newForm.email.indexOf('.', 0) < 0
            ) {
                alert('Mettez une adresse email valide')
                return false
            }

            if (newForm.message === '') {
                alert('Merci de saisir votre message')
                return false
            } else {
                window.Email.send({
                    SecureToken: 'b2225f60-8235-4d95-8b93-170c0a69dca1',
                    To: 'contact@associationbalzachanska.com',
                    From: 'contact@associationbalzachanska.com',
                    Subject: `contact de ${newForm.email}`,
                    Body: `<p><b>nom: </b> ${newForm.name}</p>
                    <p><b>email: </b> ${newForm.email}</p>
                    <p><b>subject: </b>${newForm.subject}</p>
                    <p><b>message: </b>${newForm.message}</p>
                   
                   
                   
            `,
                })
                    .then((message) => {
                        console.log(message)
                        setSent({ sent: true, type: 'success' })
                    })
                    .catch((error) => {
                        setSent({ sent: false, type: 'error', error })
                    })
            }
            resetForm()
        }
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
                            />
                        </>
                    }
                />
                <Route
                    path="/humanitarian/aboutUs"
                    element={<HumaPresentation />}
                />
                <Route
                    path="/culture"
                    element={
                        <>
                            <CulturePage
                                slideUp={slideUp}
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
                            <ContactForm
                                sent={sent}
                                newForm={newForm}
                                changeHandler={changeHandler}
                                resetForm={resetForm}
                                sendMessage={sendMessage}
                            />
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
                            <ProjectItem />
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
                    path="/pdf/:id"
                    element={
                        <>
                            <PdfReader />
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
            <Footer
                sent={sent}
                newForm={newForm}
                changeHandler={changeHandler}
                resetForm={resetForm}
                sendMessage={sendMessage}
            />
            <ScrollUp height={400} />
        </>
    )
}
