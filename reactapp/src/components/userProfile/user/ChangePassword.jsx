import React from 'react'
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

import './AccountSettings.css'

const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h2 className='mainhead1'>Change Password</h2>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Old Password </label>
                    <input type="password"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>New Password</label>
                    <input type="password"
                    />
                </div>
                <div>

                </div>
                <br />
            </div>
            <button type="button" class="btn btn-dark" id='save'>Save Changes</button><br />
        </div>
    )
}

export default ChangePassword;