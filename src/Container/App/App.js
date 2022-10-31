import React from "react";
// import 'semantic-ui-css/semantic.min.css'
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";


export const App = () => {
    return (
        <> 
            <Header/>
            <Main />
            <Footer />
        </>
    );
};