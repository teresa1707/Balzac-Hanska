import { Slider } from "Container/Slider/Slider";
import React from "react";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
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