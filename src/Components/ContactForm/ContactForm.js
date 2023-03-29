import React from 'react'
import 'Components/ContactForm/ContactForm.scss'
import { Grid } from '@mui/material'

export const ContactForm = ({ sent, newForm, changeHandler, sendMessage }) => {
    return (
        <>
            <Grid className="contactForm">
                <h1>Nous contacter</h1>
                <form method="post" onSubmit={sendMessage}>
                    <div>
                        <input
                            name="name"
                            type="text"
                            id="input-name"
                            placeholder="*Name"
                            value={newForm.name}
                            onChange={changeHandler}
                        />
                        <input
                            name="email"
                            type="email"
                            id="input-email"
                            placeholder="*Email address"
                            value={newForm.email}
                            onChange={changeHandler}
                        />
                        <input
                            name="subject"
                            type="text"
                            id="input-subject"
                            placeholder="Subject"
                            value={newForm.subject}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            type="text"
                            id="input-message"
                            placeholder="Message"
                            value={newForm.message}
                            onChange={changeHandler}
                        ></textarea>
                    </div>

                    <div>
                        {sent?.type === 'success' && (
                            <p className="messageSent">
                                Message envoyé avec success
                            </p>
                        )}
                        {sent?.type === 'error' && (
                            <p className="messageSent">Echec d'envoi</p>
                        )}
                    </div>
                    <input
                        className="button formButton"
                        type="submit"
                        value="Envoyer"
                        id="submit"
                    />
                </form>
            </Grid>
        </>
    )
}
