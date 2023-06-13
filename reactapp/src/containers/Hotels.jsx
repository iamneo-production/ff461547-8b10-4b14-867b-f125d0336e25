import React from 'react'
import HotelInput from '../components/hotel/HotelInput';
import HotelResults from '../components/hotel/HotelResults';

function Hotels() {
    return (
        <div className='mt-10 container flex gap-4'>
            <HotelInput />
            <HotelResults />
        </div>
    )
}

export default Hotels;