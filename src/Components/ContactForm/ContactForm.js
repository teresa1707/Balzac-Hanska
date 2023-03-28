import React, { useState } from 'react'
import 'Components/ContactForm/ContactForm.scss'
import { Grid } from '@mui/material'

export const ContactForm = () => {
    const [newForm, setNewForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [sent, setSent] = useState({
        sent: false,
    })

    const handleName = (e) => {
        setNewForm((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleEmail = (e) => {
        setNewForm((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const handleSubject = (e) => {
        setNewForm((prevState) => ({
            ...prevState,
            subject: e.target.value,
        }))
    }

    const handleMessage = (e) => {
        setNewForm((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const sendMessage = (e) => {
        e.preventDefault()
        setNewForm({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

        if (window.Email) {
            window.Email.send({
                SecureToken: 'b2225f60-8235-4d95-8b93-170c0a69dca1',
                To: 'contact@associationbalzachanska.com',
                From: 'contact@associationbalzachanska.com',
                Subject: `contact de ${newForm.email}`,
                Body: `nom: ${newForm.name}
                   email: ${newForm.email}
                   subject:${newForm.subject}
                   message:${newForm.message}
            `,
            }).then((message) => alert(message))
        }
    }

    console.log(newForm)
    return (
        <>
            <Grid className="contactForm">
                <h1>Nous contacter</h1>
                <form method="post">
                    <div>
                        <input
                            name="name"
                            type="text"
                            id="input-name"
                            placeholder="*Name"
                            required
                            value={newForm.name}
                            onChange={handleName}
                        />
                        <input
                            name="email"
                            type="email"
                            id="input-email"
                            placeholder="*Email address"
                            value={newForm.email}
                            onChange={handleEmail}
                        />
                        <input
                            name="input-subject"
                            type="text"
                            id="input-subject"
                            placeholder="Subject"
                            value={newForm.subject}
                            onChange={handleSubject}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            type="text"
                            id="input-message"
                            placeholder="Message"
                            value={newForm.message}
                            onChange={handleMessage}
                        ></textarea>
                    </div>

                    <div
                        className={
                            sent
                                ? 'messageSentShow messageSentHide'
                                : 'messageSentShow'
                        }
                    >
                        Votre message a été envoyé avec success
                    </div>
                    <input
                        className="button formButton"
                        type="submit"
                        value="Submit"
                        id="input-submit"
                        onClick={sendMessage}
                    />
                </form>
            </Grid>
        </>
    )
}
