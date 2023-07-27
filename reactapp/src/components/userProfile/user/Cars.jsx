import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCar, faCircle, faStop } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/yourOrders.css';
import { useNavigate } from 'react-router-dom'
const Cars = () => {
    const navigate = useNavigate();
    function toggleDetails() {
        var addDetails = document.getElementById("view-manage")
        if (addDetails.style.display === "none") {
            addDetails.style.display = "block";
            navigate('/rental-cars/manage');
        }
        else {
            addDetails.style.display = "none";
        }
    }
    return (
        <div className='cards'>
            <h2>My Bookings</h2><br />
            <div className='column'>
                <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h4>Please keep your car booking ID ready </h4>
                        <p>which was provided to you upon successful booking</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails} >View & Manage</button>
                        </div>
                    </div>

                    <div id='view-manage' className='row view-car'>
                        <hr />
                        <div className='col-lg-12'>
                            <h5><FontAwesomeIcon icon={faCar} /> Car_type (Vehicle_number)</h5>
                            <table>
                                {/* <tr>
                                    <th>DEPARTURE</th>
                                    <th>ARRIVAL</th>
                                </tr> */}
                                <tr>
                                    <FontAwesomeIcon icon={faCircle} /><td>City - Pick Up Address <br /> Time</td>
                                    <FontAwesomeIcon icon={faStop} /><td>City - Drop Off Address <br /> Time</td>
                                </tr>
                            </table>
                        </div>
                        <div className='details-button'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Repeat</a></button>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Download E-Ticket</a></button>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Cancel</a></button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4>Destination Place</h4>
                            <p>Booking ID - xxxxxxx<br />Date / <FontAwesomeIcon icon={faIndianRupeeSign} /> Amount</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails} >View & Manage</button>
                        </div>
                    </div>

                    <div id='view-manage' className='row view-car'>

                        <div>
                            <hr />
                            <table>
                                <tr>
                                    <th>DEPARTURE</th>
                                    <th>ARRIVAL</th>
                                </tr>
                                <tr>
                                    <td>xxxxxxx</td>
                                    <td>xxxxxxxx</td>
                                </tr>
                            </table>
                            <hr />
                        </div>

                        <div className='col-lg-12'>
                            <h5><FontAwesomeIcon icon={faCar} /> XL Ride</h5>
                            <ul>
                                <li><FontAwesomeIcon icon={faCircle} /> Pick Up Address</li>
                                <li><FontAwesomeIcon icon={faStop} /> Drop Off Address</li>
                            </ul>
                        </div>
                        <div className='details-button'>
                            <div className='col-lg-6 col-md-7 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Repeat</a></button>
                            </div>
                            <div className='col-lg-6 col-md-5 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Cancel</a></button>
                            </div>
                        </div>

                    </div>
                </div> */}

            </div>

        </div >
    )
}
export default Cars;