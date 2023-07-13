import { City, Country } from 'country-state-city';
import moment from 'moment';
import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { HotelActions, HotelContext } from '../HotelContext';

function HotelInputHelper() {
    const { hotelState, hotelDispatch } = useContext(HotelContext);
    const { country, checkInDate, checkOutDate } = hotelState;

    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    const handleCheckInDateChange = value => {
        hotelDispatch({ type: HotelActions.SET_CHECK_IN_DATE, payload: value })
    }
    const handleCheckOutDateChange = value => {
        hotelDispatch({ type: HotelActions.SET_CHECK_OUT_DATE, payload: value })
    }

    return (
        <>
            <Form.Label className='mt-3'>Where are you going?</Form.Label>
            <div className='flex gap-3'>
                <Form.Select onChange={(event) =>
                    hotelDispatch({ type: HotelActions.SET_COUNTRY, payload: event.currentTarget.value })}>
                    <option>Select Country</option>
                    {Country.getAllCountries().map((country, index) => (
                        <option key={index} value={country.isoCode}>{country.name}</option>
                    ))
                    }
                </Form.Select>
                <Form.Select onChange={(event) =>
                    hotelDispatch({ type: HotelActions.SET_CITY, payload: event.currentTarget.value })}>
                    <option>Select City</option>
                    {country.length > 1 &&
                        City.getCitiesOfCountry(country).map((city, index) => (
                            <option key={index} value={city.name}>{city.name}</option>
                        ))
                    }
                </Form.Select>
            </div>
            <div className='flex gap-3 mt-3 w-full'>
                <div className='w-full'>
                    <Form.Label>Check In</Form.Label>
                    <DatePicker onChange={handleCheckInDateChange} value={checkInDate} dateFormat="DD-MM-YYYY"
                        timeFormat={false} isValidDate={disablePastDt} closeOnSelect={true} name="check-in" />
                </div>
                <div className='w-full'>
                    <Form.Label>Check Out</Form.Label>
                    <DatePicker onChange={handleCheckOutDateChange}
                        value={checkOutDate} dateFormat="DD-MM-YYYY" timeFormat={false}
                        isValidDate={(current) => { return current.isAfter(checkInDate) }} closeOnSelect={true} name="check-out" />
                </div>
            </div>
        </>
    )
}

export default HotelInputHelper;