import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
import Banner from './banner/Banner.js';
import AccountSettings from './user/AccountSettings.js';
import YourOrders from './user/YourOrders.js';
import './UserProfile.css';
import './SiseBar.css';

const UserProfile = () => {

    // const { activepage } = useParams()
    const [showAccount, setShowAccount] = useState(false);
    const [showOrders, setShowOrders] = useState(false);

    const handleAccountClick = () => {
        setShowAccount(true);
        setShowOrders(false);
    };

    const handleOrdersClick = () => {
        setShowAccount(false);
        setShowOrders(true);
    };
    return (
        <div className='outercontainer'>
            {/*  <Navbar /> */}
            <Banner
                heading='My profile'
                image='https://wallpapercave.com/wp/wp2352568.jpg'
            />
            <div class='container'>
                <div class='left col-md-3'>
                    <div className='sideBar'>
                        <div className={`s1 ${showAccount ? 'active' : 'active'}`} id='account' onClick={handleAccountClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span>Account Settings</span>
                        </div>
                        <div className={`s1 ${showOrders ? 'active' : ''}`} id='orders' onClick={handleOrdersClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span>My Bookings</span>
                        </div>
                    </div>
                </div>
                <div class='right col-md-9'>
                    {showAccount && <AccountSettings />}
                    {showOrders && <YourOrders />}
                </div>
            </div>
        </div>

    )
}
export default UserProfile;