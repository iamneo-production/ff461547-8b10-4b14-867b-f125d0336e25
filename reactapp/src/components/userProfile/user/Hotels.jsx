import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCircleCheck, faCircle, faStop } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/userprofile_style/yourOrders.css';

const Hotels = () => {
    const [customer, setCustomer] = useState([])

    function toggleDetails() {
        var addDetails = document.getElementById("view-manage")
        if (addDetails.style.display === "none") {
            addDetails.style.display = "block";
        }
        else {
            addDetails.style.display = "none";
        }
    }
    useEffect(() => {
        getHotelBookingDetails();
    }, []);
    const getHotelBookingDetails = async () => {
        try {
            const response = await axios.get("");
            setCustomer(response.data);
        }
        catch (error) {
            console.log('Error fetching customer booking details : ', error)
        }
    };
    return (
        <div className='cards booking-cards'>
            <h2>My Bookings</h2><br />
            <div className='column'>
                <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4>hotelName{customer.hotelName}</h4>
                            <p>city{customer.city}, country{customer.country}<br/>
                            hotelBookingId{customer.hotelBookingId}</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>View & Manage</button>
                        </div>
                    </div>
                    <div id='view-manage' className='view-hotels'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Booking Cofirmed!</h5>
                        <br />
                        <p>Number of guests - {customer.totalTravellers} <br />Number of Rooms - {customer.totalRooms}</p>
                        <table>
                            <tr>
                                <th>Verified By -</th>
                                <th>Total Amount</th>
                            </tr>
                            <tr>
                                <td>{customer.idType}idType</td>
                                <td>{customer.totalAmount}total_amount</td>
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
                            
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <button type="button" class="btn btn-light" ><a href='#'>Cancel</a></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}
export default Hotels;