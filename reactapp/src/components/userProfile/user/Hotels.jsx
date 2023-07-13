import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCircleCheck, faCircle, faStop } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/yourOrders.css';

const Flights = () => {
    function toggleDetails() {
        var addDetails = document.getElementById("view-manage")
        if (addDetails.style.display === "none") {
            addDetails.style.display = "block";
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
                            <h4>Hotel_Name</h4>
                            <p>(Hotel-Location)<br />
                                Booking ID - xxxxxxx ~ Booked Date</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>View & Manage</button>
                        </div>
                    </div>
                    <div id='view-manage' className='view-hotels'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Stay Booking Confirmed!</h5>
                        <table>
                            <tr>
                                <th>Num_guests</th>
                                <th>Num_rooms_booked</th>
                                <th>Room_no.</th>
                                <th>Total Amount</th>
                            </tr>
                            <tr>
                                <td>int</td>
                                <td>int</td>
                                <td>room_id</td>
                                <td>total_amount</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>CHECK-IN</th>
                                <th>CHECK-OUT</th>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Time</td>
                            </tr>
                        </table>

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
                            <h4>JW Marriot</h4>
                            <p>Booking ID - xxxxxxx<br />
                                No.& Type of Rooms</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>View & Manage</button>
                        </div>
                    </div>
                    <div id='view-manage' className='view-hotels'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Stay Booking Confirmed!</h5>
                        <ul>
                        </ul>
                        <table>
                            <tr>
                                <th>CHECK-IN</th>
                                <th>CHECK-OUT</th>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Time</td>
                            </tr>
                        </table>
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
export default Flights;