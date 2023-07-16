import axios from 'axios'
import { Country } from 'country-state-city'
import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { HotelActions, HotelContext } from '../HotelContext'
import HotelInputHelper from './HotelInputHelper'
import Travelers from './Travelers'


function HotelInput() {
    const { hotelState, hotelDispatch } = useContext(HotelContext);
    const { country, city, rooms } = hotelState;
    const [errorMessage, setErrorMessage] = useState('');


    function handleFormSubmit(e) {
        e.preventDefault();

        if (country === '' || city === '') {
            alert("Please Select Country and City");

        } else {
            const searchCriteria = createSearchCriteria(country, city, rooms);
            searchHotels(searchCriteria);
        }
    }
    const searchHotels = async (searchCriteria) => {
        try {
            const responseData = await (axios.post("/hotels/search", searchCriteria)).then(response => response.data);
            hotelDispatch({ type: HotelActions.SET_SEARCH_RESPONSE, payload: responseData })
        } catch (error) {
            setErrorMessage(error.message);
            alert('Something Went Wrong , Please Try Again...');
        }
    }
    function createSearchCriteria(country, city, rooms) {
        const searchCriteria = {
            "country": Country.getCountryByCode(country).name,
            "city": city,
            "numOfRooms": rooms.length
        }
        const roomCapacity = rooms.map(room => room.adult + room.child);
        return { ...searchCriteria, roomCapacity };
    }
    return (
        <div className='left-side'>
            <h5>Book Best Hotels At Ease</h5>
            <Form onSubmit={handleFormSubmit}>
                <HotelInputHelper />
                <Travelers />
            </Form>
        </div>
    )
}

export default HotelInput;