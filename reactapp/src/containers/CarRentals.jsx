
import React, { Fragment } from "react";
import Footer from "../components/car_rental/carDesign/CarFooter";
import CarRouters from "../components/car_rental/carUIs/CarRouters";
import CarHome from "../components/car_rental/carPages/CarHome"

const CarRentals = () => {
  return (
    <Fragment>
      <CarHome/>          
      <Footer/>
    </Fragment>
  );
};

export default CarRentals;
