import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/accountSettings.css'
import ChangePassword from './ChangePassword'

const AccountSettings = () => {

    return (
        <div id='settings'>
            <div className='accountsettings'>
                <h2 className='mainhead1'>Personal Information</h2>

                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='text' name='name' id='name' placeholder='user_name' />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-light" >Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone/Mobile Number</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='number' name='phone' id='phone' placeholder='user_phone no.' />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-light">Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-9'>
                                <input type='email' name='email' id='email' placeholder='user_email' />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-3'>
                                <button type="button" class="btn btn-light">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChangePassword />
        </div>
    )
}

export default AccountSettings