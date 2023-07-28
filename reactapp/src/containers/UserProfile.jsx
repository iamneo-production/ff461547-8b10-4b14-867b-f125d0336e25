import React, { useState } from 'react'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faLock } from '@fortawesome/free-solid-svg-icons'
import { Banner, AccountSettings, Booking ,ChangePassword} from '../components/userProfile/index'
import '../style/userprofile_style/userProfile.css';
import '../style/userprofile_style/sideBar.css';


const UserProfile = () => {

    const [showAccount, setShowAccount] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    const handleAccountClick = () => {
        setShowAccount(true);
        setShowPassword(false);
        setShowBooking(false);
    };
    const handleChangePasswordClick = () => {
        setShowAccount(false);
        setShowPassword(true);
        setShowBooking(false);
    };

    const handleBookingsClick = () => {
        setShowAccount(false);
        setShowPassword(false);
        setShowBooking(true);
    }

    return (
        <div className='outercontainer bannercontainer'>
            <Banner
                heading='My profile'
                image='https://wallpapercave.com/wp/wp2352568.jpg'
            />
            <div class='container secondcontainer row'>

                <div class='left col-md-3'>
                    <div className='sideBar'>
                        <div className={`s1 ${showAccount ? 'active' : 'active'}`} id='account' onClick={handleAccountClick}>
                            <FontAwesomeIcon icon={faUser} />
                            <span> Account Settings</span>
                        </div>
                        <div className={`s1 ${showPassword ? 'active' : 'active'}`} id='account' onClick={handleChangePasswordClick}>
                            <FontAwesomeIcon icon={faLock} />
                            <span>Change Password</span>
                        </div>
                        <div className='bookings'>
                            <div className={`s1 ${showBooking ? 'active' : ''}`} id='orders' onClick={handleBookingsClick}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span> Bookings</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div class='right col-md-9'>
                    {showAccount && <AccountSettings />}
                    {showPassword && <ChangePassword />}
                    {showBooking && <Booking />}
                </div>

            </div>

        </div >

    )
}
export default UserProfile;