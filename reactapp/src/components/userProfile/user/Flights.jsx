import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleCheck, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/userprofile_style/yourOrders.css';
import { useNavigate } from "react-router-dom";

const Flights = () => {
    //const [customer, setCustomer] = useState([])
    const navigate=useNavigate();

    const handleNavigation=()=>{
        navigate('/BoardingPass');
    }
    
    // useEffect(() => {
    //     getCustomerDetails();
    // }, []);

    // const getCustomerDetails = async () => {
    //     try {
    //         const response = await axios.get("/customers/1");
    //         setCustomer(response.data);
    //         setdefaultdetails(response.data);
    //     }
    //     catch (error) {
    //         console.error('Error fetching user details : ', error)
    //     }
    // };
    return (
        <div className='cards booking-cards'>
            <h2>My Bookings</h2><br />
            <div className='column'>
                <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-9 col-md-7 col-sm-12'>
                            <h4>Source - Destination</h4>
                            <p>Booking ID - xxxxxxx<br /><br />
                                <FontAwesomeIcon icon={faPlaneCircleCheck} /> AirlineName - FlightNo.</p>
                        </div>
                        <div className='col-lg-3 col-md-5 col-sm-12'>
                           
                            <button type="button" class="btn btn-light" onClick={handleNavigation}>Boarding Pass</button>

                        </div>
                    </div>


                    <div id='view-manage' className='view-flight'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Flight Booking Confirmed!</h5>
                        <br />
                        <table>
                            <tr>
                                <th>DEPARTURE</th>
                                <th>ARRIVAL</th>
                                <th>DURATION</th>
                                <th>Boarding Time</th>
                            </tr>
                            <tr>
                                <td>date</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Time</td>
                            </tr>
                        </table>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Flights;