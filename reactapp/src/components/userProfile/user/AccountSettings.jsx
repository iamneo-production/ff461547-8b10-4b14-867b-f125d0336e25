import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/userprofile_style/accountSettings.css'

const AccountSettings = () => {

    const [customer, setCustomer] = useState([])
    const [defaultdetails, setdefaultdetails] = useState([]);
    const [editModeName, setEditModeName] = useState(false);
    const [editModePhoneNo, setEditModePhoneNo] = useState(false);
    const [editModeAddress, setEditModeAddress] = useState(false);
    const [editModeEmail, setEditModeEmail] = useState(false);
    const customer_id=2;

    const handleEditPhoneNoClick = () => {
        setEditModePhoneNo(true);
    }
    const handleEditAddressClick = () => {
        setEditModeAddress(true);
    }
    useEffect(() => {
        getCustomerDetails();
    }, []);

    const getCustomerDetails = async () => {
        try {
            const response = await axios.get(`/customers/${customer_id}`);
            setCustomer(response.data);
            setdefaultdetails(response.data);
        }
        catch (error) {
            console.error('Error fetching user details : ', error)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomerDetails) => ({
            ...prevCustomerDetails,
            [name]: value,
        }));
    };

    const handleCancelChangesClick = () => {
        setCustomer(defaultdetails);
        setEditModePhoneNo(false);
        setEditModeAddress(false);
       
    }
    const handleSaveChangesClick = async (e) => {
        try {
           await  axios.put(`/customers/${customer.customerId}`, customer);

            setEditModeName(false);
            setEditModePhoneNo(false);
            setEditModeEmail(false);
            
            alert('Changes saved successfully!');


        } catch (error) {
            console.error('Error saving customer details:', error);
            alert('Error saving changes. Please try again later.');
        }
    };

    return (
        <div id='settings'>
            <div className='accountsettings'>
                <h2 className='mainhead1'>Personal Information</h2>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <input type='text' name='firstName' id='firstName' value={customer.firstName}  disabled={!editModeName} />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <input type='text' name='lastName' id='lastName' value={customer.lastName} disabled={!editModeName} />
                            </div>
                        </div>
                    </div>
                    
                    <div className='form-group emailbutton'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' value={customer.email}  disabled={!editModeEmail} />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone' >Phone/Mobile Number</label>
                        <div className='row editbutton'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='number' name='phone' id='phone' value={customer.phone} onChange={handleChange} disabled={!editModePhoneNo} />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-dark" onClick={handleEditPhoneNoClick} >Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='address' >Address</label>
                        <div className='row editbutton'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='text' name='address' id='address' value={customer.address} onChange={handleChange} disabled={!editModeAddress} />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-dark" onClick={handleEditAddressClick} >Edit</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='row setting-button'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <button type="button" class="btn btn-danger" id='save' onClick={handleSaveChangesClick}>Save Changes</button>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <button type="button" class="btn btn-dark" id='cancel' onClick={handleCancelChangesClick}>Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AccountSettings