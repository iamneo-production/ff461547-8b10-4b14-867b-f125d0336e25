
import React, {useEffect } from "react";
import CarHome from "../components/car_rental/carPages/CarHomePage"

const CarRentals = () => {
useEffect(()=>{
        document.title = "Cars | Travel.com"
    },[])
  return (
      <CarHome/>   
  );
};

export default CarRentals;
