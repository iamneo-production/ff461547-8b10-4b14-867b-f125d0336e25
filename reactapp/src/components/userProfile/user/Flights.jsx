import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCircleCheck, faTicket, faSuitcase, faSuitcaseRolling, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
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
                        <div className='col-lg-9 col-md-7 col-sm-12'>
                            <h4>Source - Destination</h4>
                            <p>Booking ID - xxxxxxx ~ Booked Date<br /><br />AirlineName - FlightNo.</p>
                        </div>
                        <div className='col-lg-3 col-md-5 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>View & Manage</button><br />
                            <button type="button" class="btn btn-light" >Web Check-in</button>
                        </div>
                    </div>
                    <hr />
                    <table>
                        <tr>
                            <th>DEPARTURE</th>
                            <th>ARRIVAL</th>
                            <th>STOPS</th>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>Date</td>
                            <td>Non-Stop</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>Time</td>
                        </tr>
                    </table>

                    <div id='view-manage' className='view-flight'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Flight Booking Confirmed!</h5>
                        <div className='details-button'>
                            <div className='col-lg-6 col-md-7 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Download E-Ticket</a></button>
                            </div>
                            <div className='col-lg-6 col-md-5 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Cancel</a></button>
                            </div>
                        </div>
                        <ul>
                            <table>
                                <tr>
                                    <th>Sector</th>
                                    <th>Seat</th>
                                </tr>
                                <tr>
                                    <td>CCU - MAA</td>
                                    <td>6A(Window)</td>
                                </tr>
                            </table>
                            <li><FontAwesomeIcon icon={faTicket} /> Economy</li>
                            <li><FontAwesomeIcon icon={faSuitcase} /> Cabin Baggage - 7 Kg</li>
                            <li><FontAwesomeIcon icon={faSuitcaseRolling} /> Check-In Baggage - 15 Kgs</li>
                            <li><FontAwesomeIcon icon={faMoneyBill} /> Fare - xxxx </li>
                        </ul>
                    </div>
                </div>

                {/* <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-9 col-md-7 col-sm-12'>
                            <h4><img src={indigo} /> Bengaluru-Kolkata</h4>
                            <p>Booking ID - xxxxxxx</p>
                            <p>Seat No.</p>
                        </div>
                        <div className='col-lg-3 col-md-5 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>View & Manage</button>
                        </div>
                    </div>
                    <hr />
                    <table>
                        <tr>
                            <th>DEPARTURE</th>
                            <th>ARRIVAL</th>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>Time</td>
                        </tr>
                    </table>
                    <div id='view-manage'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Flight Booking Confirmed!</h5>
                        <div className='details-button'>
                            <div className='col-lg-6 col-md-7 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Web Check-in</a></button>
                            </div>
                            <div className='col-lg-6 col-md-5 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Cancel</a></button>
                            </div>
                        </div>
                        <ul>
                            <li><FontAwesomeIcon icon={faTicket} /> Economy</li>
                            <li><FontAwesomeIcon icon={faSuitcase} /> Cabin Baggage - 7 Kg</li>
                            <li><FontAwesomeIcon icon={faSuitcaseRolling} /> Check-In Baggage - 15 Kgs</li>
                            <li><FontAwesomeIcon icon={faMoneyBill} /> Fare - xxxx </li>
                        </ul>
                    </div>
                </div> */}


            </div>

        </div >
    )
}
export default Flights;