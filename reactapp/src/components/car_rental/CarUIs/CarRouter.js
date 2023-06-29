import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CarHome from "../carPages/CarHome";
import CarListing from "../carPages/CarListing";
import CarDetails from "../carPages/CarDetails";
import NotFound from "../carPages/NotFound";

const CarRouters = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/car-rentals" />} />
      <Route path="/car-rentals" element={<CarHome/>} />
      <Route path="/cars" element={<CarListing />} /> 
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CarRouters;
