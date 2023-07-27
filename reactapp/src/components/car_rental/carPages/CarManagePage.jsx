import React, { useState } from "react";
import axios from 'axios';

import "../../../style/cars_style/manage-page.css";

const ManageBookingForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setBookingId(e.target.value);
  };
  const handleViewBooking = () => {
    if (bookingId.trim() === "") {
      setError("Please enter a valid Booking ID.");
      setBookingDetails(null);
      return;
    }
  
    axios.get(`/bookingDetails?booking_id=${bookingId}`)
      .then((response) => {
        if (response.data) {
          setBookingDetails(response.data);
          setError("");
        } else {
          setError("No booking data found for the entered ID. Enter valid Booking Id");
          
          setBookingDetails(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Error retrieving booking data. Please try again later.");
        setBookingDetails(null);
      });
  };
  

  const handleCancelBooking = () => {
    if (bookingId.trim() === "") {
      setError("Please enter a valid Booking ID.");
      return;
    }

    if (!bookingDetails) {
      setError("Booking details not found. Please view the booking first.");
      return;
    }

    const currentTime = new Date().getTime();
    const pickupDateTime = new Date(
      `${bookingDetails.pick_up_date} ${bookingDetails.pick_up_time}`
    ).getTime();
    const timeDiff = pickupDateTime - currentTime;
    const hoursDiff = Math.ceil(timeDiff / (1000 * 60 * 60));

    if (hoursDiff >= 1) {
      const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
      if (confirmCancel) {
        axios
          .delete(`/cancelBooking?booking_id=${bookingId}`)
          .then((response) => {
            console.log(response);
            alert("Your booking has been successfully cancelled.");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      alert("You can only cancel your booking 1 hour before the pick-up time.");
    }
  };

  return (
    <div className="box__item">
      <div className="container">
        <h2 className="section-title text-center">MANAGE YOUR CAR BOOKING</h2>
        <div className="manage-booking-form">
          <label>Enter your Booking ID:</label><br></br><br></br>
          <input className="idbox" type="text" value={bookingId} onChange={handleInputChange} />

          <br></br><br></br>
         
          {error && <h6 className="error-message">{error}</h6>}

          {bookingDetails ? (
            <div className="box__items">
              <h3>Booking Details</h3>
              <p>Name: {bookingDetails.fname} {bookingDetails.lname}</p>
              <p>Pick-up Time: {bookingDetails.pick_up_time}</p>
              <p>Email Id:{bookingDetails.emailid}</p>
              <p>Pick-up Address: {bookingDetails.pick_up_address}</p>
              <p>Pick-up Time: {bookingDetails.pick_up_time}</p>
              <p>Contact Number:{bookingDetails.phone_no}</p>
              
            </div>
          ) : null}
          <button onClick={handleViewBooking} className="w-40 box__btn-view box__item-btn">View Booking</button>
        <button onClick={handleCancelBooking} className="w-40 box__btn-cancel box__item-btn" >Cancel Booking</button>

        </div>
        
      </div>
    </div>
  );
};
export default ManageBookingForm;
