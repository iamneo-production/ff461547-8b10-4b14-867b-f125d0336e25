import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import FlightImage from "../assets/flighticon.png";
import PassengerContacts from "./PassengerContacts";

export const PassengerDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight } = location.state;

  const handleNext = (contact, passengersData) => {
    navigate('/PreviewPage', { state: { flight, contact, passengers: passengersData } });
  };
  

  return (
    <div>
      <div className="flight_container">
        <div className="text-xs" >
        <h5>Flight Details</h5>
        </div>
        {flight ? (
          <div>
            <div className="border border-red-500 px-4 py-4 text-center mr-5 rounded-lg shadow- justify-center">
              <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-7 gap-2 ">
                  <div><img src={FlightImage} className="h-[50px] w-[80px] rounded-lg" /> </div>
                  <div><p className="mt-2 font-semibold flex justify-center items-center">{flight.flight_name}</p></div>
                  <div >
                    <p className=" flex justify-center items-center font-semibold">{flight.dept_time}</p>
                    <p className="mt-2 font-semibold">{flight.departure}</p>
                  </div>
                  <div className="">
                    <p className="mt-2 font-semibold flex justify-center items-center">{flight.duration}</p>
                    <div className="border-b-[5px] border-b-yellow-400 pb-2 max-w-[150px] 
                                       flex justify-center items-center" />
                  </div>
                  <div>
                    <p className=" flex justify-center items-center font-semibold">{flight.arr_time}</p>
                    <p className="mt-2 font-semibold">{flight.arrival}</p>
                  </div>
                  <div><p className="mt-2 font-semibold">{flight.price}</p></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No flight details available</p>
        )}
      </div>
      <br></br>
      <div>
        <PassengerContacts handleNext={handleNext} flight={flight} />
      </div>
      <br></br>
      <div>
      </div>
    </div>
  );
};
   