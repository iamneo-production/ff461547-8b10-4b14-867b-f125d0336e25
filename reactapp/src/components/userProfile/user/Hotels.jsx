import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCircleCheck, faCircle, faStop } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/userprofile_style/yourOrders.css';

const Hotels = () => {
    const [customer, setCustomer] = useState([])
const customer_id=1;
    useEffect(() => {
        getCustomerDetails();
    }, []);

    const getCustomerDetails = async () => {
        try {
            const response = await axios.get(`booking/hotel/customerId?customerId=${customer_id}`);
            setCustomer(response.data);
        }
        catch (error) {
            console.error('Error fetching user details : ', error)
        }
    };

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
    const handleDelete=(bookingId)=>{
        axios.delete(`/booking/hotel/bookingId?bookingId=${bookingId}`)
    };
    return (
        
        <div className='cards booking-cards'>
            <h2>My Bookings</h2><br />
            {
            customer.length === 0 ? (
                <p>You have no bookings.</p>
            ) : (customer.map((booking)=>
            <div className='column'>
                <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4>Hotel Name- {booking.hotelName}</h4>
                            <p>city{booking.city}, country{booking.country}<br/>
                            BookingId - {booking.hotelBookingId}</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <button type="button" class="btn btn-light" onClick={toggleDetails}>Details</button>
                        </div>
                    </div>
                    <div id='view-manage' className='view-hotels'>
                        <hr />
                        <h5><FontAwesomeIcon icon={faCircleCheck} /> Booking Cofirmed!</h5>
                        <br />
                        <p>Number of guests - {booking.totalTravellers} <br />Number of Rooms - {booking.totalRooms}</p>
                        <table>
                            <tr>
                                <th>Verified By -</th>
                                <th>Total Amount</th>
                            </tr>
                            <tr>
                                <td>{booking.idType}idType</td>
                                <td>{booking.totalAmount}total_amount</td>
                            </tr>
                        </table>

                        <div className='details-button'>
                       
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <button type="button" class="btn btn-light" onClick={()=>handleDelete(booking.bookingId)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
))};
        </div >
        
    )
}
export default Hotels;