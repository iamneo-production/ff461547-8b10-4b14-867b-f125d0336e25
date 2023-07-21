import React, { useState } from 'react'
//import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faUser, faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { Banner, AccountSettings, Flights, Cars, Hotels } from '../components/userProfile/index'
import '../style/banner.css';
import '../style/userProfile.css';
import '../style/sideBar.css';

const UserProfile = () => {

    //const { activepage } = useParams()
    const [showAccount, setShowAccount] = useState(true);
    const [showFlights, setShowFlights] = useState(false);
    const [showCars, setShowCars] = useState(false);
    const [showHotels, setShowHotels] = useState(false);

    const handleAccountClick = () => {
        setShowAccount(true);
        setShowFlights(false);
        setShowCars(false);
        setShowHotels(false);
    };
    const handleFlightsClick = () => {
        setShowAccount(false);
        setShowFlights(true);
        setShowCars(false);
        setShowHotels(false);
    };
    const handleCarsClick = () => {
        setShowAccount(false);
        setShowFlights(false);
        setShowCars(true);
        setShowHotels(false);
    };
    const handleHotelsClick = () => {
        setShowAccount(false);
        setShowFlights(false);
        setShowCars(false);
        setShowHotels(true);
    };
    return (
        <div className='outercontainer'>
            <Banner
                heading='My profile'
                image='https://wallpapercave.com/wp/wp2352568.jpg'
            />
            <div class='container'>
                <div class='left col-md-3'>
                    <div className='sideBar'>
                        <div className={`s1 ${showAccount ? 'active' : 'active'}`} id='account' onClick={handleAccountClick}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Account Settings</span>
                        </div>
                        <div className={`s1 ${showFlights ? 'active' : ''}`} id='orders' onClick={handleFlightsClick}>
                            <FontAwesomeIcon icon={faPlaneUp} />
                            <span>Flights</span>
                        </div>
                        <div className={`s1 ${showCars ? 'active' : ''}`} id='orders' onClick={handleCarsClick}>
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car Rentals</span>
                        </div>
                        <div className={`s1 ${showHotels ? 'active' : ''}`} id='orders' onClick={handleHotelsClick}>
                            <FontAwesomeIcon icon={faHotel} />
                            <span>My Stays</span>
                        </div>
                    </div>
                </div>
                <div class='right col-md-9'>
                    {showAccount && <AccountSettings />}
                    {showFlights && <Flights />}
                    {showCars && <Cars />}
                    {showHotels && <Hotels />}
                </div>
            </div>
        </div>

    )
}
export default UserProfile;