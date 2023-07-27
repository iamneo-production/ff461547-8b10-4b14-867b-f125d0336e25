import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../../style/cars_style/car.css";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CarImage from '../carAssests/img/findcarr.jpeg';

const CarFindForm = () => {
  const [locationQuery, setLocationQuery] = useState('');
  const [seatCountQuery, setSeatCountQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data from the backend
    axios
      .get('/findcar')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

 

  const handleSearch = e => {
    e.preventDefault();

    const filteredData = cars.filter(item => {
      const locationMatch = item.location.toLowerCase().includes(locationQuery.toLowerCase());
      const seatCountMatch = item.no_of_seat.toString().includes(seatCountQuery);
      return locationMatch && seatCountMatch;
    });
    setFilteredCars(filteredData);
    if (filteredData.length === 0) {
      alert('No cars available in the given location. Please try other near by city!');
    }
  };

  return (
    <div>
      <div className="grid gap-1 md:grid-cols-3 sm:grid-cols-2">

        {/* left side search container code */}
        <div className="flex p-4 item-center justify-center">
            <section>
              <form onSubmit={handleSearch} className="flex justify-start">
                <div>
                  <div className="bg-gray-500 max-h-[750px] mt-5 mb-8 mx-500 px-5 py-5 rounded-lg  inset-y-0 right-0
                  max-w-[742px] shadow-[0px_0px_50px_-5px_rgba(0,0,0,0.4)]
                  m-auto pt-[25px] pb-[25px] px-[25px]; background: #fff;">
                    <div>
                      <p className="font-bold text-5sm text-center">CHOOSE YOUR CAR</p>
                    </div>
                    <div className="grid jutify-center space-y-3 pb-10">
                      <div className="relative pt-4">
                        <p className=" ri-map-pin-line font-semibold">LOCATION</p>
                        <input
                          type="text"
                          value={locationQuery}
                          onChange={e => setLocationQuery(e.target.value)}
                          placeholder="Enter Pick Up City"
                          className="w-full p-2 h-15 rounded-lg border border-gray-300"
                          required
                        />
                      </div>
                      <div className="relative pt-3">
                        <p  className=" ri-wheelchair-line font-semibold">SEAT COUNT</p>
                        <select
                        value={seatCountQuery}
                        onChange={e => setSeatCountQuery(e.target.value)}
                        className="w-full p-2 h-15 rounded-lg border border-gray-300"
                        required
                      >
                        <option value="">Select Seat Count</option>
                        <option value="5">1-4 seats</option>
                        <option value="8">5-8 seats</option>
                        <option value="15">9-14 seats</option>
                      </select>
                      </div>
                  
                      <div className="relative pt-3 font-semibold flex justify-center">
                        <button type="submit" className="w-48 py-3 mt-3 text-white bg-green-500 rounded-lg">
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
        </div>
        
        <div className="p-4 md:col-span-2">

          
          <Row>
            {filteredCars.map((car) => (
              <Col lg= "4" md="6" sm="12" className="mb-5" key={car.carid}>
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
                        <i class="ri-timer-flash-line"></i> 20Km/hr
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
      </div>
      <Row>
        <Col className="text-center">
          <Link to="/car-rentals">
            <button>Back to Car Home Page</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CarFindForm;
