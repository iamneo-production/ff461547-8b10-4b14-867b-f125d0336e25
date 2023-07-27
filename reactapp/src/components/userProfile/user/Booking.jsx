import React, { useState } from 'react'
import '../../../style/userprofile_style/yourOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { Flights, Cars, Hotels } from '../index';


const Booking = () => {
    const [showFlights, setShowFlights] = useState(false);
    const [showCars, setShowCars] = useState(false);
    const [showHotels, setShowHotels] = useState(false);
    const handleFlightsClick = () => {

        setShowFlights(true);
        setShowCars(false);
        setShowHotels(false);
    };
    const handleCarsClick = () => {

        setShowFlights(false);
        setShowCars(true);
        setShowHotels(false);
    };
    const handleHotelsClick = () => {

        setShowFlights(false);
        setShowCars(false);
        setShowHotels(true);
    };
    return (
        <div className='your-bookings'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className={`s1 ${showFlights ? 'active' : ''}`} id='orders' onClick={handleFlightsClick}>
                        <button className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faPlaneUp} />
                            <span> Flights</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className={`s1 ${showCars ? 'active' : ''}`} id='orders' onClick={handleCarsClick}>
                        <button className='btn btn-secondary'>
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

                {showFlights && <Flights />}
                {showCars && <Cars />}
                {showHotels && <Hotels />}

            </div>
        </div >
    )
}
export default Booking;
