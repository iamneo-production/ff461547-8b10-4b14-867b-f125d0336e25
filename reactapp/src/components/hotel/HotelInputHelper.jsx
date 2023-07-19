import React,{ useState } from 'react'
import { Country, City } from 'country-state-city';
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';



function HotelInputHelper() {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const[checkInDate, setCheckInDate]=useState(moment())
    const [checkOutDate, setCheckOutDate] = useState(moment().add(1,'day'))
    
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    const handleChange=value=>{
        setCheckInDate(value);
        const newCheckOutDate = moment(value).add(1, 'day');
        setCheckOutDate(newCheckOutDate);
    }

    return (
        <>
            <Form.Label className='mt-3'>Where are you going?</Form.Label>
            <div className='flex gap-3'>
                <Form.Select onChange={(event) => setCountry(event.currentTarget.value)}>
                    <option>Select Country</option>
                    {Country.getAllCountries().map((country, index) => (
                        <option key={index} value={country.isoCode}>{country.name}</option>
                    ))
                    }
                </Form.Select>
                <Form.Select onChange={(event) => setCity(event.currentTarget.value)}>
                    <option>Select City</option>
                    {country.length > 1 &&
                        City.getCitiesOfCountry(country).map((city, index) => (
                            <option key={index} value={city}>{city.name}</option>
                        ))
                    }
                </Form.Select>
            </div>
            <div className='flex gap-3 mt-3 w-full'>
                <div className='w-full'>
                    <Form.Label>Check In</Form.Label>
                    <DatePicker onChange={handleChange} value={checkInDate} dateFormat="DD-MM-YYYY" timeFormat={false} isValidDate={disablePastDt} closeOnSelect={true} name="check-in"/>
                </div>
                <div className='w-full'>
                    <Form.Label>Check Out</Form.Label>
                    <DatePicker onChange={e => setCheckOutDate(e)} value={checkOutDate} dateFormat="DD-MM-YYYY" timeFormat={false} isValidDate={(current) => { return current.isAfter(checkInDate) }} closeOnSelect={true} name="check-out" />
                </div>
            </div>
        </>
    )
}

export default HotelInputHelper