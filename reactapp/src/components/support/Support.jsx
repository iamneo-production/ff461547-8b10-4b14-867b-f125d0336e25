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
    const [customer, setCustomer] = useState([]);
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