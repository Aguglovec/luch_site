import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import MainModule from '../../main/pages/MainModule';
import Services from '../../main/pages/ServicesPage'
import Gallery from '../../main/pages/GalleryPage'
import Prices from '../../main/pages/PricesPage'
import Location from '../../main/pages/LocationPage'
import Reviews from '../../main/pages/ReviewsPage'



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/main" />}></Route>
                <Route path="main" element={<MainModule />}></Route>
                <Route path="services" element={<Services />}></Route>
                <Route path="gallery" element={<Gallery />}></Route>
                <Route path="prices" element={<Prices />}></Route>
                <Route path="location" element={<Location />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
