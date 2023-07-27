import React, { useEffect, useState } from 'react';
import {FaPlaneArrival, FaPlaneDeparture} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FlightImage from "../assets/flighticon.png";


export const SearchFlight =()=>{
    const [departureQuery, setDepartureQuery] = useState('');
    const [arrivalQuery, setArrivalQuery] = useState('');
    const [deptDateQuery, setDeptDateQuery] = useState('');
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch ticket data from the backend
        axios
          .get('/flights')
          .then(response => {
            setTickets(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredData = tickets.filter(item => {
          const departureMatch = item.departure.toLowerCase().includes(departureQuery.toLowerCase());
          const arrivalMatch = item.arrival.toLowerCase().includes(arrivalQuery.toLowerCase());
          const deptDateMatch = item.dept_date.toLowerCase().includes(deptDateQuery.toLowerCase());
          return departureMatch && arrivalMatch && deptDateMatch;
        });
        setFilteredTickets(filteredData);
      };
      const handleBook = (flight) => {
        navigate('/PassengerDetails', { state: { flight } });
      };

    return(
        <div>
            <div class="grid grid-cols-3 gap-1">
                <div className="flex p-2 item-center justify-center">
                  <React.Fragment>
                    <section >
                        <form onSubmit={handleSearch} className="flex justify-start">               
                            <div>
                                <div className="bg-gray-500 max-h-[750px] mt-5 mb-8 mx-500 px-5 py-5 rounded-lg  inset-y-0 right-0
                                max-w-[742px] shadow-[0px_0px_50px_-5px_rgba(0,0,0,0.4)]
                                m-auto pt-[25px] pb-[25px] px-[25px]; background: #fff;">
                                    <div>
                                        <p className="uppercase font-bold text-5sm text-center">
                                            Choose YOur Travel 
                                        </p>
                                    </div>
                                    <div className="grid jutify-center space-y-3 pb-10">
                                        <div>
                                            <div className="relative pt-5">
                                                <p className="font-semibold"> FLYING FROM</p>
                                                <input
                                                    type="text"
                                                    value={departureQuery}
                                                    onChange={e => setDepartureQuery(e.target.value)}
                                                    placeholder="Enter Your Departure"
                                                    className="w-full p-2 h-15 rounded-lg border border-gray-300"
                                                />                                    
                                                <FaPlaneDeparture className="text-2xl absolute right-4 top-24"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative pt-4">
                                                <p className="font-semibold"> FLYING TO</p>
                                                <input
                                                    type="text"
                                                    value={arrivalQuery}
                                                    onChange={e => setArrivalQuery(e.target.value)}
                                                    placeholder="Enter Your Arrival"
                                                    className="w-full p-2  rounded-lg border border-gray-300"
                                                />                                   
                                                <FaPlaneArrival className="text-2xl absolute right-4 top-16"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative pt-2">
                                                <p className="font-semibold"> Departure Date</p>
                                                <input
                                                    type="text"
                                                    value={deptDateQuery}
                                                    onChange={e => setDeptDateQuery(e.target.value)}
                                                    placeholder="Departure date"
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                    pattern="\d{4}-\d{2}-\d{2}"
                                                    title="Please enter a date"
                                                    onKeyDown={e => e.preventDefault()}
                                                    onFocus={e => (e.currentTarget.type = 'date')}
                                                    onBlur={e => (e.currentTarget.type = 'text')}
                                                    min={new Date().toISOString().split('T')[0]}
                                                />                          
                                            </div>
                                        </div>
                                       <div className="flex justify-center">
                                            <div className="p-5 h-11">
                                                <button onClick={handleSearch} 
                                                    className="uppercase rounded-lg bg-red-500 text-white font-semibold px-4 py-2">
                                                Show Flights
                                                </button>
                                            </div>
                                        </div>    
                                    </div>    
                                </div>     
                            </div>
                        </form>
                    </section>
                  </React.Fragment>      
                </div>             
                        
            <div className="col-span-2">
            <div>
                <div className="bg-gray-300 border border-black-800">
                    <div className="grid grid-cols-7 gap-2 ">
                        <div className="p-5 h-11  flex items-center justify-center">
                            <p className="text-black font-semibold">Sorted By:</p>
      </div>
      <div className="p-5 h-11 flex items-center justify-center">
        <p className="text-black font-semibold">Flight Name</p>
      </div>  
      <div className="p-5 h-11 flex items-center justify-center">
        <p className="text-black font-semibold">Departure</p>
      </div> 
      <div className="p-5 h-11 flex items-center justify-center">
        <p className="text-black font-semibold">Duration</p>
      </div> 
      <div className="p-5 h-11 flex items-center justify-center">
        <p className="text-black font-semibold">Arrival</p>
      </div> 
      <div className="p-3 h-15 flex items-center justify-center">
        <p className="text-black font-semibold">
          Price 
          <br />
          per travelling
        </p>
      </div>
      <div className="pt-5 h-11 flex items-center justify-center">
        <p className="text-black font-semibold">Booking</p>
      </div>
    </div>            
  </div>
</div>
              {/* Ticket Listing Code */}

                <div className=" pl-5 pr-5 pt-5 pb-5 mt-5"> 
                    <div className=" grid grid-cols-1 gap-2">               
                    {filteredTickets.map((item) => (
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
                                        <button onClick={() => handleBook(item)}>
                                            <div className="uppercase rounded-lg bg-yellow-500 text-white font-semibold px-4 py-2">
                                                BOOK
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
        </div>
    )}