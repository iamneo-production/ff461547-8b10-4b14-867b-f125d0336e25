import React, { useEffect, useState } from "react";
import "../../../style/cars_style/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarBookingForm = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [amount, setAmount] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const sub = (e) => {
    e.preventDefault();
    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    let four = document.getElementById("four").value;
    let five = document.getElementById("five").value;
    let six = document.getElementById("six").value;
    let seven = document.getElementById("seven").value;
    let eight = document.getElementById("eight").value;
    let nine = document.getElementById("nine").value;

    // Validate all input fields to check if they are not blank
    if (
      one.trim() === "" ||
      two.trim() === "" ||
      three.trim() === "" ||
      four.trim() === "" ||
      five.trim() === "" ||
      six.trim() === "" ||
      seven.trim() === "" ||
      eight.trim() === "" ||
      nine.trim() === ""
    ) {
      alert("Please fill all the Details.");
      return;
    }

    // Additional validation for email and phone number
    if (!validateEmail(three)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePhone(four)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    } else {
      setPhoneError("");
    }

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
    

    axios.post("/bookform", json)
      .then(response => {
        const options = {
          key: "rzp_test_LNZzUeK2lflRiR",
          key_secret: "K77DHemN5AKEJvmogIJP6yni",
          amount: amount * 100,
          currency: "INR",
          name: "Select your payment mode",
          description: "for testing purpose",
          handler: function (response) {
            const confirmationMessage = `Booking ID: ${bookingId} is used for managing your car booking later. Click 'OK' to download the Booking ID.`;
            if (window.confirm(confirmationMessage)) {
              // Create a Blob with the booking ID text and trigger download
              const blob = new Blob([`Booking ID: ${bookingId}`], { type: "text/plain;charset=utf-8" });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `booking_id_${bookingId}.txt`;
              link.click();
            }
        
            setPaymentCompleted(true);
            setBookingId(bookingId);
            window.location.href = "/rental-cars/feedback";
          },
          prefill: {
            name: "Krishnapriya k",
            email: "ksbitupriya@gmail.com",
            contact: "9443479629"
          },
          notes: {
            address: "Razorpay corporate office"
          },
          theme: {
            color: '#3399cc'
          }
        };

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      })
      .catch(err => console.log(err));
     

  };

  useEffect(() => {
    axios.get(`/findcarbyId?carid=${id}`)
      .then((response) => {
        setCar(response.data);
        setAmount(response.data.price);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
            <h6>Car Rent: {car.price}/Hr</h6>
            <p>(Fuel Charge + Rs.15/km after 1 hour)</p>
            <h6>Seats: {car.no_of_seat - 1}</h6>
            <h6>Pick-Up Location: {car.location}</h6>
            <img src={require(`../carAssests/img/carList_imgs/${car.carname.toLowerCase().replace(/\s+/g, '')}.jpg`)} alt="Car" className="w-100" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="booking-form">
            <Form className="form-container">
              <FormGroup className="booking__form">
                <label>First Name:</label>
                <input id="one" type="text" />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Last Name:</label>
                <input id="two" type="text" />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Email Address:</label>
                <input id="three" type="email" />
                {emailError && <p className="error-message">{emailError}</p>}
              </FormGroup>
              <FormGroup className="booking__form">
                <label>Phone Number:</label>
                <input id="four" type="tel" />
                {phoneError && <p className="error-message">{phoneError}</p>}
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Pick-Up Address:</label>
                <input id="five" type="text" />
              </FormGroup>

              <FormGroup className="booking__form">
                <label>Drop-Off Address:</label>
                <input id="six" type="text" />
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
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  {amount !== "" && (
                    <p className="car-rent-amount">Car Rent Amount(Advance):<b>Rs.{amount}/-</b><p>(Fuel Charge + Rs.15/km after 1 hour)</p></p>
                  )}
                  <button
                    className="booking__form car__item-btn car__btn-rent"
                    onClick={sub}
                    style={{ flex: "0 0 auto", borderRadius: "5px", minWidth: "200px", margin: "10px" }}
                    type="button">
                  Pay Now
                  </button>
                </div>
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
