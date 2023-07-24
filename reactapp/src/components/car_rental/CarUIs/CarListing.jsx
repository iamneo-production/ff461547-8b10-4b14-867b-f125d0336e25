import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col } from "reactstrap";
import { Link } from "react-router-dom";

import CarImage from '../carAssests/img/findcarr.jpeg';

const CarListing = () => {
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      // Fetch car data from the backend
      axios
        .get('/findcar')
        .then(response => {
          const allCars = response.data;
          const filteredData = allCars.filter(car => car.carid >= 1 && car.carid <= 6);
          setCars(filteredData);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    
  return (
    
    <div className="p-4 col-span-2">
          <Row>
      {cars.map(car => (
        <Col lg="4" md="6" sm="12" className="mb-5" key={car.carid}>
          <div className="car__item car__img">
          <img src={require(`../carAssests/img/carList_imgs/${car.carname.toLowerCase().replace(/\s+/g, '')}.jpg`)} alt={CarImage} className="w-100" />
              <div className="car__item-content mt-4">
              <h4 className="section__title text-center">{car.carname}</h4>
              <h6 className="rent__price text-center mt-">
                Rs: {car.price}.00 <span>/ Hour</span>
              </h6>

              <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-wheelchair-line" style={{ color: "#c826f9" }}></i>{" "}
                  {car.no_of_seat - 1}+1
                </span>

                <span className=" d-flex align-items-center gap-1">
                  <i class="ri-map-pin-line" style={{ color: "#c826f9" }}></i>{" "}
                  {car.location}
                </span>

                <span className=" d-flex align-items-center gap-1">
                        <i class="ri-suitcase-line" style={{ color: "#c826f9" }}></i>{" "}
                        {car.no_of_seat-3}
                </span>

                <span className=" d-flex align-items-center gap-1">
                  <i class="ri-timer-flash-line"></i> {}20Km/hr
                </span>
                
              </div>
              <button className="w-100 car__item-btn car__btn-rent">
                      <Link to={`/rental-cars/booking/${car.carid}`}>Book Now</Link>
              </button>
            </div>


        
          </div>
        </Col>
      ))}
    </Row>
  </div>

  

  );};


export default CarListing;
