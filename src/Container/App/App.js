
import { ContactForm } from "Components/ContactForm/ContactForm";
import { Header } from "Container/Header/Header";
import { CulturePage } from "Container/pages/Culturel/CulturePage";
import { HumanitaryPage } from "Container/pages/Humanitaire/HumanitaryPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../Footer/Footer";

import { Main } from "../Main/Main";


export const App = () => {
    return (
        <> 
           
            <Header/>
            <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/humanitary" element={<HumanitaryPage/>}/>
        <Route path="/culture" element={<CulturePage/>}/>
        
</Routes>
<ContactForm/>
            <Footer/>
        </>
    );
};