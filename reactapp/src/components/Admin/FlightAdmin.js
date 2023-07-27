import React, { useState , useEffect } from "react";
import axios from 'axios';
import FlightImage from "../flight/assets/flighticon.png";
import '../../style/Admin_style/flightAdmin.css'


export const FlightAdmin = () => {
 
  const [flightName, setFlightName] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [deptDate, setDeptDate] = useState("");
  const [deptTime, setDeptTime] = useState("");
  const [arrTime, setArrTime] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [isFlightAdded, setIsFlightAdded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]); 


  useEffect(() => {
    axios
      .get(`/flights`)
      .then((response) => {
        setTickets(response.data);
        setFilteredTickets(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const handleFlightNameChange = (e) => {
    setFlightName(e.target.value);
  };

 
  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleArrivalChange = (e) => {
    setArrival(e.target.value);
  };

  const handleDeptDateChange = (e) => {
    setDeptDate(e.target.value);
  };

  const handleDeptTimeChange = (e) => {
    setDeptTime(e.target.value);
  };

  const handleArrTimeChange = (e) => {
    setArrTime(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleAddFlight = () => {
    const newFlight = {
      flight_name: flightName,
      departure: departure,
      arrival: arrival,
      dept_date: deptDate,
      dept_time: deptTime,
      arr_time: arrTime,
      price: parseFloat(price),
      duration: duration,
    };

    setFlightName("");
    setDeparture("");
    setArrival("");
    setDeptDate("");
    setDeptTime("");
    setArrTime("");
    setPrice("");
    setDuration("");
  

    axios.post(`/flights`, newFlight)
      .then((response) => {
        const data = response.data;
        console.log("Flight added successfully:", data);

        setIsFlightAdded(true);
        

        setFilteredTickets([...filteredTickets, data]);

        setTimeout(() => {
          setIsFlightAdded(false);
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error adding flight:", error);
      });
  };

  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDeleteFlight = (flightId) => {
    axios.delete(`/flights/${flightId}`)
      .then((response) => {
        console.log("Flight deleted successfully:", response.data);
        setDeleteMessage("Flight deleted successfully!");
        setFilteredTickets(filteredTickets.filter((flight) => flight.flightid !== flightId));
        setTimeout(() => {
          setDeleteMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error deleting flight:", error);
      });
  };



  return (
    <div>
        <div className="text-center font-bold text-2xl">FLIGHT DETAILS</div>
      <div className="flightAdmin_container">
        <div className="text-center font-bold text-1xl">ADD FLIGHTS</div>
        <div className="FlightAdmin-content">
          <span>Flight Name</span>
          <input
            type="text"
            value={flightName}
            onChange={handleFlightNameChange}
            placeholder="Flight Name"
          />
          Departure
          <input
            type="text"
            value={departure}
            onChange={handleDepartureChange}
            placeholder="Departure"
          />
          Arrival
          <input
            type="text"
            value={arrival}
            onChange={handleArrivalChange}
            placeholder="Arrival"
          />
          <div>
            <label>Departure Date </label>
            <input
              type="date"
              value={deptDate}
              className="border border-black rounded-lg"
              onChange={handleDeptDateChange}
              placeholder="Departure Date"
            />
          </div>

          <div>
            <label>Departure Time </label>
            <input
              type="time"
              value={deptTime}
              className="border border-black rounded-lg"
              onChange={handleDeptTimeChange}
              placeholder="Departure Time"
              step="1"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
            />
          </div>

          <div>
            <label>Arrival Time</label>
            <input
              type="time"
              value={arrTime}
              className="border border-black rounded-lg"
              onChange={handleArrTimeChange}
              placeholder="Arrival Time"
              step="1"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
            />
          </div>
          Price
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Price"
          />
          Duration
          <input
            type="text"
            value={duration}
            onChange={handleDurationChange}
            placeholder="Duration"
          />
        </div>
        <button onClick={handleAddFlight}>
          <div className='py-2 px-2 bg-rose-400 text-sm m-3 rounded-lg'>
            <p className='text-white'>ADD FLIGHTS</p>
          </div>
        </button>
        {isFlightAdded && (
        <p className="text-green-500">Flight added successfully!</p>
      )}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
      <div className="border border-black  mt-5 mb-8 mx-500 px-5 py-5 rounded-lg 
      inset-y-0 right-0 max-w-[740px] shadow-[0px 0px 50px -5px rgba(0,0,0,0.4)] m-auto pt-[25px] pb-[25px] px-[25px] bg-white">
        <div className="text-center font-bold text-2xl">LIST OF FLIGHTS</div>
                <div className=" pl-5 pr-5 pt-5 pb-5 mt-5"> 
                    <div className=" grid grid-cols-1 gap-2">               
                    {tickets.map((item) => (
                        <div key={`ticket-list-${item.flightid}`} className="border border-red-500 px-4 py-4 text-center mr-5 rounded-lg shadow- justify-center">
                            <div className ="grid grid-cols-1 gap-2">   
                                <div className="grid grid-cols-7 gap-2 ">                                 
                                
                                    <div><img src={FlightImage} className="h-[50px] w-[80px] rounded-lg" /> </div>
                                    <div><p className="mt-2 font-semibold flex justify-center items-center">{item.flight_name}</p></div>
                                    <div>
                                        <p className=" flex justify-center items-center font-semibold">{item.dept_time}</p>
                                        <p className="mt-2 font-semibold">{item.departure}</p></div>
                                    <div className="">
                                        <p className="mt-2 font-semibold flex justify-center items-center">{item.duration}</p>
                                        <div className="border-b-[5px] border-b-yellow-400 pb-2 max-w-[150px] 
                                        flex justify-center items-center" />
                                    </div>                                 
                                    <div>
                                        <p className=" flex justify-center items-center font-semibold">{item.arr_time}</p>
                                        <p className="mt-2 font-semibold">{item.arrival}</p>
                                    </div>
                                    <div>
                                        <p className="mt-2 font-semibold">{item.price}</p>
                                    </div>   
                                                               
                                    <div>
                                        <button onClick={() => handleDeleteFlight(item.flightid)}>
                                            <div className="py-2 px-2 bg-yellow-400 text-sm m-3 rounded-lg">
                                                <p className="text-white">Delete</p>
                                            </div>
                                        </button> 
                                    </div>
                                    
                                </div> 

                            </div>
                        </div>    

                        )
                    )}
                
                    </div> 
                </div>
            </div>
        </div>
   
  );
};