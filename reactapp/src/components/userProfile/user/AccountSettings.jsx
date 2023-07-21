import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/accountSettings.css';

const AccountSettings = () => {

    //const [user, setUser] = useState([])
    const [editModeName, setEditModeName] = useState(false);
    const [editModePhoneNo, setEditModePhoneNo] = useState(false);
    const [editModeEmail, setEditModeEmail] = useState(false);
    const [editModePassword, setEditModePassword] = useState(false);
    
    // useEffect(() => {
    //     console.log("Sneha");
    // })

    const handleEditNameClick = () => {
        setEditModeName(true);
    };
    const handleEditPhoneNoClick = () => {
        setEditModePhoneNo(true);
    };
    const handleEditEamilClick = () => {
        setEditModeEmail(true);
    };
    const handleEditPasswordClick = () => {
        setEditModePassword(true);
    };

    const handleSaveChangesClick = () => {
        setEditModeName(false);
        setEditModePhoneNo(false);
        setEditModeEmail(false);
        setEditModePassword(false);
    };
    // const userDetails = () => {
    //     const result = axios.get("");
    //     console.log(result);
    // }
    return (
        <div id='settings'>
            <div className='accountsettings'>
                <h2 className='mainhead1'>Personal Information</h2>

                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <input type='text' name='name' id='name' placeholder='fisrt_name' disabled={!editModeName} />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <input type='text' name='name' id='name' placeholder='last_name' disabled={!editModeName} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-dark" onClick={handleEditNameClick} >Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone' >Phone/Mobile Number</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='number' name='phone' id='phone' placeholder='user_phone no.' disabled={!editModePhoneNo} />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-dark" onClick={handleEditPhoneNoClick} >Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='email' name='email' id='email' placeholder='user_email' disabled={!editModeEmail} />
                            </div>
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
                            <label htmlFor='oldpass'>Password </label>
                            <div className='row'>
                                <div className='col-lg-8 col-md-8 col-sm-9'>
                                    <input type="password" disabled={!editModePassword} />
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-3'>
                                    <button type="button" class="btn btn-dark" onClick={handleEditPasswordClick}>Edit</button>
                                </div>
                            </div>

                        </div>
                        <br />
                    </div>
                    <button type="button" class="btn btn-danger" id='save' onClick={handleSaveChangesClick}>Save Changes</button><br />
                </div>
            </div>

        </div>
    )
}

export default AccountSettings