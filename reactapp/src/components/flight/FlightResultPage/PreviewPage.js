import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export const PreviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, contact, passengers } = location.state;
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);
  const [amount, setAmount] = useState(0);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleEdit = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    const confirmed = window.confirm('Are you sure you want to cancel?');
  
    if (confirmed) {
      navigate('/');
    }
  };
  
  const handleGetTickets = () => {
    navigate('/BoardingPass', { state: { flight: flight, contact: contact,passengers: passengers } });
  };
  

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    passengers.forEach((passenger) => {
      if (passenger.pass_type === 'Adult') {
        totalAmount += flight.price;
        if (contact.contact_class === 'Business') {
          totalAmount += 3000;
        }
      } else if (passenger.pass_type === 'Child') {
        totalAmount += (flight.price - 1500);
        if (contact.contact_class === 'Business') {
          totalAmount += 3000;
        }
      }
    });
    return totalAmount;
  };

  const handleSubmit = () => {
    setAmount(calculateTotalAmount());
    setShowPaymentSummary(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      // Razorpay payment logic here
      var options = {
        key: "rzp_test_qx5jFG42zoDjbW",
        key_secret: "ydbu5fdkAEz1IQ8tuSlWYGaZ",
        amount: calculateTotalAmount() * 100,
        currency: "INR",
        name: "Payment mode",
        description: "for testing purpose",
        handler: function (response) {
            var paymentId = response.razorpay_payment_id;
            alert("Payment successful! Your payment ID is: " + paymentId);
        //   alert(response.razorpay_payment_id);
          setPaymentSuccessful(true);
        },
        prefill: {
          name: "Admin",
          email: "admin@gmail.com",
          contact: "1234567890"
        },
        notes: {
          address: "Razorpay corporate office"
        },
        theme: {
          color: '#3399cc'
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };



  return (
    <div>
      <div className="max-h-[100%] mt-5 mb-8 mx-500 px-5 py-5
       rounded-lg inset-y-0 right-0 max-w-[742px] shadow-[0px 0px 50px -5px rgba(0,0,0,0.4)]
        m-auto pt-[25px] pb-[25px] px-[25px] bg-white border border-black">

        <div>
          <p className="uppercase font-bold text-center">Confirm Your Details</p>
        </div>
        <div className="flight_container mx-auto">
          <h1 className="font-bold mb-6 text-xl">Travel Details</h1>
          {flight ? (
            <div className="bg-teal-700 border border-black p-4 rounded">
              <p className="mb-2"><span className="font-semibold">Flight Name:</span> {flight.flight_name}</p>
              <p className="mb-2"><span className="font-semibold">Departure:</span> {flight.departure}</p>
              <p className="mb-2"><span className="font-semibold">Arrival:</span> {flight.arrival}</p>
              <p className="mb-2"><span className="font-semibold">Departure Date:</span> {flight.dept_date}</p>
              <p className="mb-2"><span className="font-semibold">Departure Date:</span> {flight.dept_time}</p>
              <p className="mb-2"><span className="font-semibold">Departure Date:</span> {flight.arr_time}</p>
              <p className="mb-2"><span className="font-semibold">Price:</span> {flight.price}</p>
            </div>
          ) : (
            <p>No flight details available</p>
          )}
        </div>
        <br></br>
        <div className="flight_container mx-auto">
          <h1 className="font-bold mb-2 text-xl">Contact Details</h1>
          {contact ? (
            <div className="bg-teal-700 border border-black p-4 rounded">
              <p className="mb-2"><span className="font-semibold">Name:</span> {contact.contact_name}</p>
              <p className="mb-2"><span className="font-semibold">Phone Number:</span> {contact.contact_phone}</p>
              <p className="mb-2"><span className="font-semibold">Email Id:</span> {contact.contact_email}</p>
              <p className="mb-2"><span className="font-semibold">Class:</span> {contact.contact_class}</p>
            </div>
          ) : (
            <p>No contact details available</p>
          )}
        </div>
        <br></br>
        <div className="flight_container mx-auto ">
          <h1 className="font-bold mb-2 text-xl">Passenger Details</h1>
          {passengers && passengers.length > 0 ? (
            <div>
              {passengers.map((passenger, index) => (
                <div className="bg-teal-700 border border-black p-4 rounded-md mb-4" key={index}>
                  <p className="mb-2"><span className="font-semibold">First Name:</span> {passenger.first_name}</p>
                  <p className="mb-2"><span className="font-semibold">Last Name:</span> {passenger.last_name}</p>
                  <p className="mb-2"><span className="font-semibold">Gender:</span> {passenger.gender}</p>
                  <p className="mb-2"><span className="font-semibold">Passenger Type:</span> {passenger.pass_type}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No passenger details available</p>
          )}
        </div>
        <br></br>
        <div className="flex space-x-4">
          <button onClick={handleEdit}>
            <div className="py-2 px-4 bg-red-800 text-white font-semibold">
              EDIT
            </div>
          </button>
          <button onClick={handleCancel}>
            <div className="py-2 px-4 bg-red-800 text-white font-semibold">
              CANCEL BOOKING
            </div>
          </button>
          <button onClick={handleSubmit}>
            <div className="py-2 px-4 bg-red-800 text-white font-semibold">
              PROCEED TO PAYMENT
            </div>
          </button>
        </div>
        {showPaymentSummary && (
          <div className="container mx-auto ">
            <h1 className="text-2xl font-bold mt-20 ">Passenger Summary</h1>
            <div className="bg-teal-700 border border-black p-4 rounded-md mb-4">
              <p>Calculation Summary:</p>
              <p>Adult:
                ${flight.price + (contact.contact_class === 'Business' ? 3000 : 0)} * {passengers.filter(passenger => passenger.pass_type === 'Adult').length} = 
                ${(flight.price + (contact.contact_class === 'Business' ? 3000 : 0)) * passengers.filter(passenger => passenger.pass_type === 'Adult').length}
              </p>
              <p>Child: 
                ${(flight.price - 1500) + (contact.contact_class === 'Business' ? 3000 : 0)} * {passengers.filter(passenger => passenger.pass_type === 'Child').length} = 
                ${((flight.price - 1500) + (contact.contact_class === 'Business' ? 3000 : 0)) * passengers.filter(passenger => passenger.pass_type === 'Child').length}
              </p>
              <p>Total Amount: ${amount}</p>
              {paymentSuccessful ? (
                <div>
                  <p className="text-red-600 font-semibold">Payment Successful!</p>
                  <button className="py-2 px-2 bg-red-800 text-white font-semibold" onClick={handleGetTickets}>
                    GET TICKETS
                  </button>
                </div>
              ) : (
                <button className="py-2 px-2 bg-red-800 text-white font-semibold" onClick={handlePayment}>
                  PAY NOW
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};