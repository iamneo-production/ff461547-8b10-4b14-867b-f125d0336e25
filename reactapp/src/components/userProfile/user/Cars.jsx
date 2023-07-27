import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCar, faCircle, faStop } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/userprofile_style/yourOrders.css'
import { useNavigate } from 'react-router-dom';

const Cars = () => {
const navigate=useNavigate();
const handleNavigation=()=>{
    navigate('/rental-cars/manage');
}
    return (
        <div className='cards booking-cards'>
            <h2>My Bookings</h2><br />
            <div className='column'>
                <div class="orderscontainer">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4>Destination Place</h4>
                            <p>Booked Date<br /><FontAwesomeIcon icon={faIndianRupeeSign} /> Amount</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p>Booking ID - xxxxxxx</p>
                        </div>
                    </div>
                    <div className='row view-car'>
                        <hr />
                        <div className='col-lg-12'>
                            <h5><FontAwesomeIcon icon={faCar} /> Car_type (Vehicle_number)</h5>
                            <table>
                                <tr>
                                    <FontAwesomeIcon icon={faCircle} /><td>City - <br />Pick Up Address</td>
                                    <FontAwesomeIcon icon={faStop} /><td>City - <br />Drop Off Address</td>
                                </tr>
                            </table>
                            <div className='row'>
                                
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <button type="button" class="btn btn-light" onClick={handleNavigation}>Manage Booking</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div >
    )
}
export default Cars;