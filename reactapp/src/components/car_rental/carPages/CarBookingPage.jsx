import React, { useEffect, useState } from "react";
import "../../../style/cars_style/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

import CarImage from '../carAssets/imgs/findcarr.jpeg';

const CarBookingForm = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  // Setting to post the data in the table
  const sub = () => {
    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    let four = document.getElementById("four").value;
    let five = document.getElementById("five").value;
    let six = document.getElementById("six").value;
    let seven = document.getElementById("seven").value;
    let eight = document.getElementById("eight").value;
    let nine = document.getElementById("nine").value;

    const bookingId = `${id}${one.slice(0, 3)}${two}${four.slice(-4)}`;

    const json = {
      "booking_id": bookingId,      
      "fname": one,
      "lname": two,
      "emailid": three,
      "phone_no": four,
      "pick_up_address": five,
      "drop_off_address": six,
      "pick_up_time": seven,
      "pick_up_date": eight,
      "drop_off_date": nine
    };

    axios.post("http://localhost:8080/bookform", json)
      .then(response => {
        alert(`Booking ID: ${bookingId}. Note down this ID for viewing and managing your car booking.`);
      })
      .catch(err => console.log(err));
  };

  // Get img from frontend using carname in the backend
  const getImageUrl = (carName) => {
    const imageName = carName.toLowerCase().replace(/\s+/g, '');
    let imageUrl;
    try {
      return (imageUrl = require(`../carAssets/imgs/carList_imgs/${imageName}.jpg`));
    } catch (error) {
      imageUrl = null;
    }
    return imageUrl ? imageUrl.default : CarImage;
  };

  // Get the particular car details by id
  useEffect(() => {
    axios.get(`http://localhost:8080/findcarbyId?carid=${id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Date setting functions
  const currentDate = new Date().toISOString().split("T")[0];

  const handlePickupDateChange = (e) => {
    const selectedDate = e.target.value;
    setPickupDate(selectedDate);
    if (dropoffDate < selectedDate) {
      setDropoffDate(selectedDate);
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-20">
      <div className="row">
        <div className="col-md-6">
          <div className="car-details">
            <h2>Car Details:</h2>
            <h6>Car Name: {car.carname}</h6>
            <h6>Car Rent: {car.price}/Day</h6>
            <h6>Seats: {car.no_of_seat-1}</h6>
            <h6>Pick-Up Location: {car.location}</h6>
            <img src={getImageUrl(car.carname)} alt="Car" className="w-100" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="booking-form">
            <Form className="form-container">
              <FormGroup className="booking__form">
                <label>First Name:</label>
                <input id="one" type="text"/>
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Last Name:</label>
                <input id="two" type="text" />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Email Address:</label>
                <input id="three" type="email"/>
              </FormGroup>
              <FormGroup className="booking__form">
                <label>Phone Number:</label>
                <input id="four" type="number"/>
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Pick-Up Address:</label>
                <input id="five" type="text"/>
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Drop-Off Address:</label>
                <input id="six" type="text"/>
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Pick Up Time:</label>
                <input
                 id="seven"
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="form-control"
                />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Pick Up Date:</label>
                <input
                  id="eight"
                  type="date"
                  placeholder="Pick Up Date"
                  value={pickupDate}
                  min={currentDate}
                  onChange={handlePickupDateChange}
                />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Drop Off Date:</label>
                <input
                  id="nine"
                  type="date"
                  value={dropoffDate}
                  min={pickupDate}
                  disabled={pickupDate === ""}
                  onChange={(e) => setDropoffDate(e.target.value)}
                />
              </FormGroup>
            
              <div className="text-center">
                <div className="d-flex justify-content-center align-items-center ">
                  <button className="booking__form car__item-btn car__btn-rent" onClick={sub} style={{ flex: "0 0 auto", borderRadius: "5px", minWidth: "200px" ,margin:"10px"}}>
                    <Link to="/rental-cars/manage" className="text-black no-underline">Proceed to Pay
                    </Link>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBookingForm;
