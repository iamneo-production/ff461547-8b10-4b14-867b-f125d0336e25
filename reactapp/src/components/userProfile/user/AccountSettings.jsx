import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/accountSettings.css';

const AccountSettings = () => {

    const [customer, setCustomer] = useState([])
    const [defaultdetails, setdefaultdetails] = useState([]);
    const [editModeName, setEditModeName] = useState(false);
    const [editModePhoneNo, setEditModePhoneNo] = useState(false);
    const [editModeEmail, setEditModeEmail] = useState(false);
    const [editModePassword, setEditModePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const handleEditPhoneNoClick = () => {
        setEditModePhoneNo(true);
    };
    const handleEditEamilClick = () => {
        setEditModeEmail(true);
    };
    const handleEditPasswordClick = () => {
        setEditModePassword(true);
        setShowConfirmPassword(true);
    };

    useEffect(() => {
        getCustomerDetails();
    }, []);

    const getCustomerDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customers/1");
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
        setEditModeName(false);
        setEditModePhoneNo(false);
        setEditModeEmail(false);
        setEditModePassword(false);
        setShowConfirmPassword(false);
    }
    const handleSaveChangesClick = async (e) => {
        try {
            if (editModePassword) {
                if (customer.password !== customer.confirmpassword) {
                    alert('Password and Confirm Password must match.');
                    return;
                }
                if (!regExp.test(customer.password)) {
                    alert('Password must be of more than 8 characters, a capital & small letter, a special character and a number.');
                    return;
                }

            }

            await axios.put(`http://localhost:8080/customers/${customer.customerId}`, customer);

            setEditModeName(false);
            setEditModePhoneNo(false);
            setEditModeEmail(false);
            setEditModePassword(false);
            setShowConfirmPassword(false);
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
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <input type='text' name='firstName' id='firstName' value={customer.firstName} onChange={handleChange} disabled={!editModeName} />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <input type='text' name='lastName' id='lastName' value={customer.lastName} onChange={handleChange} disabled={!editModeName} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Username</label>
                        <div className='row'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-6'>
                                    <input type='text' name='userName' id='userName' value={customer.userName} onChange={handleChange} disabled={!editModeName} />
                                </div>

                            </div>
                        </div>
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
                        <label htmlFor='email'>Email</label>
                        <div className='row editbutton'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='email' name='email' id='email' value={customer.email} onChange={handleChange} disabled={!editModeEmail} />
                            </div><br />
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-dark" onClick={handleEditEamilClick} >Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='changepassword'>
                    <h2 className='mainhead1'>Change Password</h2>
                    <div className='form'>
                        <div className='form-group'>
                            <label>Password </label>
                            <div className='row editbutton'>
                                <div className='col-lg-8 col-md-8 col-sm-9'>
                                    <input type="password" name='password' id='password' value={customer.password} onChange={handleChange} disabled={!editModePassword} />
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-3'>
                                    <button type="button" class="btn btn-dark" onClick={handleEditPasswordClick}>Edit</button>
                                </div>
                            </div>
                        </div>
                        {showConfirmPassword && (
                            <div className='form-group confirm-password'>
                                <label>Confirm Password</label>
                                <div className='col-lg-8 col-md-8 col-sm-9'>
                                    <input type="password" name='confirmpassword' id='confirmpassword' onChange={handleChange} disabled={!editModePassword} />
                                </div>
                            </div>
                        )}
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
        </div>
    )
}

export default AccountSettings