import React, { useContext, useState } from 'react'
import { Country } from 'country-state-city'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import swal from 'sweetalert'
import { HotelActions, HotelContext } from '../HotelContext'
import HotelInputHelper from './HotelInputHelper'
import Travelers from './Travelers'
import ErrorPage from '../../../containers/ErrorPage'

function HotelInput() {
    const { hotelState, hotelDispatch } = useContext(HotelContext);
    const { country, city, rooms } = hotelState;
    const [error, setError] = useState({});


    function handleFormSubmit(e) {
        e.preventDefault();

        if (country === '' || city === '') {
            swal("Wanring!", "Please Select Country and City", "warning");

        } else {
            console.log(hotelState)
            const searchCriteria = createSearchCriteria(country, city, rooms);
            searchHotels(searchCriteria);
        }
    }
    const searchHotels = async (searchCriteria) => {
        try {
            const responseData = await (axios.post("/hotels/search", searchCriteria)).then(response => response.data);
            hotelDispatch({ type: HotelActions.SET_SEARCH_RESPONSE, payload: responseData })
        } catch (error) {
            setError(error.response.data);
            swal("Opps!", "Something Went Wrong , Please Try Again...", "error");
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
        <>
            {
                error.message ? <ErrorPage error={error} /> :
                    <>
                        <div className='left-side'>
                            <h5>Book Best Hotels At Ease</h5>
                            <Form onSubmit={handleFormSubmit}>
                                <HotelInputHelper />
                                <Travelers />
                            </Form>
                        </div>
                    </>
            }
        </>
    )
}

export default HotelInput;