import React, { useRef, useState } from "react";
import FlightImage from "../../flight/assets/flighticon.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

export const BoardingPass = () => {
  const location = useLocation();
  const { flight, contact, passengers } = location.state || {};
  const boardingPassRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const navigate = useNavigate();

  if (!flight || !contact || !passengers) {
    return <div>No flight details available</div>;
  }

  const formatTime = (time) => {
    const [hours, minutes, seconds] = time.split(":");
    return new Date(0, 0, 0, hours, minutes, seconds);
  };


  const calculateBoardingTime = (time) => {
    const dateTime = formatTime(time);
    dateTime.setHours(dateTime.getHours() - 1);
    return dateTime.toLocaleTimeString("en-US", { hour12: false });
  };


  const handleDownloadClick = () => {
    setIsDownloading(true);
    toPng(boardingPassRef.current)
      .then((dataUrl) => {
       
        saveAs(dataUrl, 'boarding_pass.png');
  
        
        const ticketData = {
          flight,
          contact,
          passengers
        };
        navigate('/feedback');
  
      
      })
      .catch((error) => {
        console.error("Error downloading ticket:", error);
        alert("An error occurred while downloading the ticket. Please try again later.");
        setIsDownloading(false);
      });
  };
  
  
  

  return (
    <div>
      <div ref={boardingPassRef}>
        {passengers.map((passenger, index) => (
          <div key={index} className="bg-yellow-300 max-h-[750px] mt-5 mb-8 mx-500 px-5 py-5 rounded-lg inset-y-0 right-0 max-w-[740px] shadow-[0px 0px 50px -5px rgba(0,0,0,0.4)] m-auto pt-[25px] pb-[25px] px-[25px]">
            <div className="grid grid-cols-1 gap-2" >
              <div className="grid grid-cols-4 gap-2" >
                <div>
                  <div className="text-3xl uppercase font-bold">{contact.contact_class}</div>
                  <div className="text-2xl font-semibold uppercase">{flight.flight_name}</div>
                  <div className="grid grid-cols-2 gap-2 pt-[10px]">
                    <p className="font-semibold">{passenger.first_name} {passenger.last_name}</p>
                    <p className="font-semibold uppercase">{passenger.gender}</p>
                  </div>
                  <div className="pt-[25px]">
                    <p>FROM</p>
                    <p className="text-3xl font-semibold uppercase">{flight.departure}</p>
                    <p className="uppercase">{flight.dept_time}</p>
                  </div>
                </div>              <div className="pt-[105px]">
                <div className="flex justify-center items-center">
                  <img src={FlightImage} className="h-[40px] w-[40px] rounded-lg" alt="Flight Icon" />
                </div>
                <p className="flex justify-center items-center font-semibold">{flight.duration}</p>
              </div> 
                <div>
                  <div className="pt-[105px]">
                    <p>TO</p>
                    <p className="text-3xl font-semibold uppercase">{flight.arrival}</p>
                    <p className="uppercase">{flight.arr_time}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-black">
                  <p className="flex justify-center items-center pt-[25px]">BOARDING DATA</p>
                  <div className="grid grid-cols-2 gap-2 pt-[25px]">
                    <div className="border border-red-500 rounded">
                      <p className="flex justify-center items-center text-sm">BOARDING</p>
                      <p className="flex justify-center items-center text-sm">{calculateBoardingTime(flight.dept_time)}</p>
                    </div>
                    <div className="border border-red-500 rounded">
                      <p className="flex justify-center items-center text-sm">DEPARTURE</p>
                      <p className="flex justify-center items-center text-sm">{flight.dept_time}</p>
                    </div>
                    <div className="border border-red-500 rounded">
                      <p className="flex justify-center items-center text-sm">GATE</p>
                      <p className="flex justify-center items-center text-sm">3</p>
                    </div>
                    <div className="border border-red-500 rounded">
                      <p className="flex justify-center items-center text-sm">ARRIVAL</p>
                      <p className="flex justify-center items-center text-sm">{flight.arr_time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 mb-8 mx-500 px-5">
        <button
          onClick={handleDownloadClick}
          className={`ml-2 px-4 py-2 ${isDownloading || isDownloaded ? "bg-gray-500 text-gray-300" : "bg-green-500 text-white"} rounded-lg`}
          disabled={isDownloading || isDownloaded} // Disable the button when downloading or after download
        >
          {isDownloading ? "Downloading..." : "Download Ticket"}
        </button>
        <button
          onClick={() => navigate('/feedback')}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          style={{ display: isDownloaded ? 'inline-block' : 'none' }}
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};
