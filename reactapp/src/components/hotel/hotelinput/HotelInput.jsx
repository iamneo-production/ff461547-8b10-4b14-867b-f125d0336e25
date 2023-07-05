import React from 'react'
import Form from 'react-bootstrap/Form'
import Travelers from './Travelers'
import HotelInputHelper from './HotelInputHelper'

function HotelInput() {
    return (
        <div className='left-side'>
            <h5>Book Best Hotels At Ease</h5>
            <Form >
                <HotelInputHelper />
                <Travelers />
            </Form>
        </div>
    )
}

export default HotelInput;