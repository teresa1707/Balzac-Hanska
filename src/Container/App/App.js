
import { Slider } from "Container/Slider/Slider";
import { Header } from "Container/Header/Header";
import React from "react";

import { Footer } from "../Footer/Footer";

import { Main } from "../Main/Main";


export const App = () => {
    return (
        <> 
           <Header/>
            <Slider/>
            <Main />
            <Footer />
        </>
    );
};