import React from "react"
import 'Components/ContactForm/ContactForm.scss'
import { Grid } from "@mui/material"

export const ContactForm = () => {
  return(
    <>
<Grid className="contactForm">
<h1>Nous contacter</h1>
<form >
  <div>
    <input type="text" id="input-name" placeholder="*Name" required/>
    <input type="email" id="input-email" placeholder="*Email address"/>
    <input type="text" id="input-subject" placeholder="Subject"/>
  </div>
  <div >
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit" />
</form>
</Grid>
    </>
  )
}