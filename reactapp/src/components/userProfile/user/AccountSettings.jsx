import React from 'react'
import './AccountSettings.css'
import ChangePassword from './ChangePassword'

const AccountSettings = () => {
    return (
        <div id='settings'>
            <div className='accountsettings'>
                <h2 className='mainhead1'>Personal Information</h2>

                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' placeholder='Sneha Pandit' />

                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone/Mobile Number</label>
                        <input type='number' name='phone' id='phone'

                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email'

                        />
                    </div>


                </div>

            </div>
            <ChangePassword />
        </div>
    )
}

export default AccountSettings