import React, { useState } from 'react'
import '../../../style/userprofile_style/yourOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import {  Hotels } from '../index';
import { useNavigate } from 'react-router-dom';


const Booking = () => {
    
    const [showHotels, setShowHotels] = useState(false);

    const navigate=useNavigate();

    const handleNavigationCars=()=>{
    navigate('/rental-cars/manage');
    }
    const handleNavigationFlights=()=>{
        navigate('/BoardingPass');
    }

    const handleHotelsClick = () => {
        setShowHotels(true);
    };
    return (
        <div className='your-bookings'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className="s1" id='orders'>
                        <button className='btn btn-secondary' onClick={handleNavigationFlights}>
                            <FontAwesomeIcon icon={faPlaneUp} />
                            <span> Flights</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className="s1" id='orders' >
                        <button className='btn btn-secondary' onClick={handleNavigationCars}>
                            <FontAwesomeIcon icon={faCar} />
                            <span> Car Rentals</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className={`s1 ${showHotels ? 'active' : ''}`} id='orders' onClick={handleHotelsClick}>
                        <button className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faHotel} />
                            <span> My Stays</span>
                        </button>
                    </div>
                </div>

               
                {showHotels && <Hotels />}

            </div>
        </div >
    )
}
export default Booking;
