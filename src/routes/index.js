import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "routes/home";
import About from "routes/about";
import Product from 'routes/servicos';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<About/>} />
        <Route path="/Servicos/:slang" element={<Product/>} />
    </Routes>
);

export default AppRoutes;
