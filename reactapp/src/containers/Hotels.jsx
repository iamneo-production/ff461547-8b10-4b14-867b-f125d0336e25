import React from 'react'
<<<<<<< HEAD
import HotelInput from '../components/hotel/HotelInput';
import HotelResults from '../components/hotel/HotelResults';

function Hotels() {
    return (
        <div className='mt-10 container flex gap-4'>
            <HotelInput />
            <HotelResults />
        </div>
=======
import HotelInput from '../components/hotel/hotelInput/HotelInput';
import HotelResults from '../components/hotel/hotelresult/HotelResults';
import { HotelProvider } from '../components/hotel/HotelContext';

function Hotels() {
    return (
        <HotelProvider >
            <div className='mt-10 container flex gap-4'>
                <HotelInput />
                <HotelResults />
            </div>
        </HotelProvider >
>>>>>>> main
    )
}

export default Hotels;