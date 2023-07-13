import React from 'react'
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

import '../../style/accountSettings.css'

const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h2 className='mainhead1'>Change Password</h2>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Old Password </label>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-9'>
                            <input type="password" />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-3'>
                            <button type="button" class="btn btn-light">Edit</button>
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>New Password</label>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-9'>
                            <input type="password" />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-3'>
                            <button type="button" class="btn btn-light">Edit</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <br />
            </div>
            <button type="button" class="btn btn-dark" id='save'>Save Changes</button><br />
        </div>
    )
}

export default ChangePassword