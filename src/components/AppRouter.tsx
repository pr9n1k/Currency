import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Buy from './../pages/Buy';
import Sell from './../pages/Sell';
import About from './../pages/About';
import Success from './../pages/Success';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<Navigate to={'/buy'} />} />
        </Routes>
    );
};

export default AppRouter;
