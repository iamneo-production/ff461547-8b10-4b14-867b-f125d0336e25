import React from 'react'
import HotelInput from '../components/hotel/hotelInput/HotelInput';
import HotelResults from '../components/hotel/hotelresult/HotelResult';
import { HotelProvider } from '../components/hotel/HotelContext';

function Hotels() {
    return (
        <HotelProvider >
            <div className='mt-10 container flex gap-4'>
                <HotelInput />
                <HotelResults />
            </div>
        </HotelProvider >
    )
}

export default Hotels;