import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/support.css';
import { questions } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Accodion from './Accodion';

const Support = () => {
    const [data, setData] = useState(questions);
    const [customer, setCustomer] = useState([])
    // const [editModeName, setEditModeName] = useState(false);
    // const [editModePhoneNo, setEditModePhoneNo] = useState(false);
    // const [editModeEmail, setEditModeEmail] = useState(false);
    const [formData, setFormData] = useState({
        message: '',
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    }

    useEffect(() => {
        getCustomerDetails();
    }, []);


    const getCustomerDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customers/1");
            setCustomer(response.data);
        }
        catch (error) {
            console.error('Error fetching user details : ', error)
        }
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for raising the query, we will get back to you!");
        setFormData({
            message: '',
        });
    };


    return (
        <div className='support-help'>
            <h2>Help & Support
                <button className='btn btn-danger'>Open Support Ticket</button>
            </h2>
            <div className='row'>
                <div className='questions col-lg-6 col-md-12 col-sm-12'>
                    <h1><FontAwesomeIcon icon={faCircleQuestion} /> FAQ's</h1>
                    {
                        data.map((currentElement) => {
                            const { id } = currentElement;
                            return <Accodion key={id} {...currentElement} />
                        })
                    }
                </div>
                <div className='contact-form col-lg-6 col-md-12 col-sm-12'>
                    <h1><FontAwesomeIcon icon={faEnvelope} /> Contact Us</h1>
                    <div className='form'>
                        {/* <div className='form-group'>
                            <label htmlFor='email'>Your Email</label><br />
                            <input type='email' name='email' id='email' value={customer.email} disabled={!editModeName} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone' >Youre Phone/Mobile Number</label>
                            <input type='number' name='phone' id='phone' value={customer.phone}  disabled={!editModeName} />
                        </div> */}
                        <div className='form-group'>
                            <label htmlFor='name'>Message</label><br />
                            <textarea type='text' name='message' id='message' value={formData.message} placeholder='Enter your message here...' onChange={handleChange}></textarea>
                        </div>

                        <button type='submit' className='btn btn-secondary' onClick={handleSubmit} >Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;