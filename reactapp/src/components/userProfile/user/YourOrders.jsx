import React from 'react'
import '@fortawesome/free-solid-svg-icons';
import './YourOrders.css';
import '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

const YourOrders = () => {
    return (
        <div className='cards'>
            <h2>My Bookings</h2><br />
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div class="orderscontainer">
                        <h2>A to B</h2>
                        <p><i class="fa fa-inr" aria-hidden="true"></i>5,999</p>
                        <button type="button" class="btn btn-light">DETAILS</button><br />
                        <button type="button" class="btn btn-dark">MANAGE</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div class="orderscontainer">
                        <h2>A to B</h2>
                        <p><i class="fa fa-inr" aria-hidden="true"></i>5,999</p>
                        <button type="button" class="btn btn-light">DETAILS</button><br />
                        <button type="button" class="btn btn-dark">MANAGE</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div class="orderscontainer">
                        <h2>A to B</h2>
                        <p><i class="fa fa-inr" aria-hidden="true"></i>5,999</p>
                        <button type="button" class="btn btn-light">DETAILS</button><br />
                        <button type="button" class="btn btn-dark">MANAGE</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div class="orderscontainer">
                        <h2>A to B</h2>
                        <p><i class="fa fa-inr" aria-hidden="true"></i>5,999</p>
                        <button type="button" class="btn btn-light">DETAILS</button><br />
                        <button type="button" class="btn btn-dark">MANAGE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default YourOrders;