import React from 'react'
import './Header.scss'
import { useState} from 'react'
import { Menu } from 'Components/Menu/Menu'
import { Container, Grid } from '@mui/material'
import { Logo } from 'Components/LogoBalzacHanska/Logo'
import { SlidingButton } from 'Components/MyButton/SlidingButton'

export const Header = ({buttonText}) => {
    
    const [sticky, setSticky] = useState(false)

    const stickyNav = () => {
        if (window.scrollY > 300 ) {
            setSticky(true)
        }
        else {
            setSticky(false)
        } 
    }

    window.addEventListener("scroll", stickyNav)


  buttonText = "Faire un don ou adherer"

 
    return (
        <>   <div className={sticky ? "main_h sticky" : "main_h"}>
            <Container>
            <Grid container >
                <Grid item xs={12} sm={6} md={4} className="slidingButton" ><SlidingButton buttonText={buttonText}/></Grid>
                <Grid item xs={12} sm={6} md={4} className="logo"><Logo /></Grid>
                <Grid item xs={12} sm={12}md={4} className="headerMenu"><Menu/></Grid>
                     
    


</Grid>
</Container>    
 
        </div>
        
        </>
    )
}

