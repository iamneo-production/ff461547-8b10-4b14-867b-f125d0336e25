import React, { useState, useEffect } from 'react'
import '../../../style/userprofile_style/accountSettings.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const ChangePassword = () => {

    const [customer, setCustomer] = useState([])
    const [defaultdetails, setdefaultdetails] = useState([]);
    const [editModePassword, setEditModePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const user__Id = 2;

    const handleEditPasswordClick = () => {
        setEditModePassword(true);
        setShowConfirmPassword(true);
    }

    useEffect(() => {
        getCustomerDetails();
    }, []);

    const getCustomerDetails = async() => {
        await axios.get(`/users/usersId?userId=${user__Id}`).then(response => {
            setCustomer(response.data);
            setdefaultdetails(response.data);
        }).catch(error => {
            console.error('Error fetching user details : ', error)
        });
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
        setEditModePassword(false);
        setShowConfirmPassword(false);
    }
    const handleSaveChangesClick = (e) => {
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
            axios.put(`/users/update/password/userId?userId=${userId}`,{password:""});

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
export default ChangePassword;
