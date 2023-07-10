import React, { useEffect, useState } from 'react';
import { FaCar, FaWheelchair} from 'react-icons/fa';
import axios from 'axios';
import "../../../style/cars_style/car-item.css";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CarImage from '../carAssets/imgs/findcarr.jpeg';

const CarFindForm = () => {
  const [locationQuery, setLocationQuery] = useState('');
  const [seatCountQuery, setSeatCountQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [isHalfPage, setIsHalfPage] = useState(false);

  useEffect(() => {
    // Fetch car data from the backend
    axios
      .get('http://localhost:8080/findcar')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Check if it's a half page
    const handleResize = () => {
      setIsHalfPage(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = e => {
    e.preventDefault();

    const filteredData = cars.filter(item => {
      const locationMatch = item.location.toLowerCase().includes(locationQuery.toLowerCase());
      const seatCountMatch = item.no_of_seat.toString().includes(seatCountQuery);
      return locationMatch && seatCountMatch;
    });
    setFilteredCars(filteredData);
  };

  const getImageUrl = (carName) => {
    const imageName = carName.toLowerCase().replace(/\s+/g, ''); // Convert carName to lowercase and remove spaces
    let imageUrl;
    try {
      return imageUrl = require(`../carAssets/imgs/carList_imgs/${imageName}.jpg`);
    } catch (error) {
      // If the image does not exist, set imageUrl to null
      imageUrl = null;
    }
    return imageUrl ? imageUrl.default : CarImage;
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        {/* left side search container code */}
        <div className="flex p-4 item-center justify-center">
          <React.Fragment>
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
                        <FaCar className="text-2xl absolute right-4 top-6" />
                        <p className="font-semibold">LOCATION</p>
                        <input
                          type="text"
                          value={locationQuery}
                          onChange={e => setLocationQuery(e.target.value)}
                          placeholder="Enter Pick Up Location"
                          className="w-full p-2 h-15 rounded-lg border border-gray-300"
                        />
                      </div>
                      <div className="relative pt-3">
                        <p className="font-semibold">SEAT COUNT</p>
                        <FaWheelchair className="text-2xl absolute right-4 top-4" />
                        <input
                          type="text"
                          value={seatCountQuery}
                          onChange={e => setSeatCountQuery(e.target.value)}
                          placeholder="Enter Seat Count"
                          className="w-full p-2 h-15 rounded-lg border border-gray-300"
                        />
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
          </React.Fragment>
        </div>
        
        <div className="p-4 col-span-2">
          {/* Display the filtered car results */}
          
          <Row>
            {filteredCars.map((car) => (
              <Col lg={isHalfPage ? "6" : "4"} md="6" sm="12" className="mb-5" key={car.carid}>
                <div className="car__item car__img">
                   <img src={getImageUrl(car.carname)} alt={CarImage} className="w-100" />
            

                  <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{car.carname}</h4>
                    <h6 className="rent__price text-center mt-">
                      Rs: {car.price}.00 <span>/ Day</span>
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
