import React, { useState } from 'react';
import axios from 'axios';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import "../../../style/flight_style/flight_styles.css";



function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function PassengerContacts({ handleNext} ) {
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactClass , setContactClass] = useState('');
  const [phoneNums, setPhoneNums] = useState('');
  const [passengers, setPassengers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [passType, setPassType] = useState('');
  const [error, setError] = useState(null);
  const [showPassengerList, setShowPassengerList] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newPassenger = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      pass_type: passType
    };
    
    setPassengers([...passengers, newPassenger]);
    clearFormFields();
    setShowNextButton(true);
  };

  const handleRemovePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setPassType('');
  };

  const storePassengerDetails = () => {
    passengers.forEach((passenger) => {
      axios
        .post(`/details`, passenger)
        .then((response) => {
          console.log('Passenger details stored successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error storing passenger details:', error);
        });
    });

    clearFormFields();
    setShowSuccessMessage(true);
    setShowNextButton(true);
    setShowPassengerList(false);
  };
  

  const addPassenger = () => {
    if (firstName !== '' && lastName !== '' && gender!=='' && passType!=='') {
      const newPassenger = {
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        pass_type: passType,
      };

      setPassengers([...passengers, newPassenger]);
      clearFormFields();
      setShowNextButton(true);
    }
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handlePhoneNumsChange = (value) => {
    setPhoneNums(value);
  };

  const handleName = (event) => {
    setContactName(event.target.value);
  };

 
  const handleSaveContact = () => {
    if (contactName !== '' && email !== '' && phoneNums!=='' && contactClass!=='') {
      
    const newContact = {
      contact_email: email,
      contact_phone: phoneNums,
      contact_name: contactName,
      contact_class: contactClass
    };

    axios
      .post(`/contacts`, newContact)
      .then((response) => {
        console.log('Contact details stored successfully:', response.data);
        setSaveButtonClicked(true); 
      })
      .catch((error) => {
        console.error('Error storing contact details:', error);
      });
    } else {
      window.alert('Please fill in all the required fields.');
    } 
  };
  const handleNextButton = () => {
    const contact = {
      contact_email: email,
      contact_phone: phoneNums,
      contact_name: contactName,
      contact_class: contactClass
    };
    const passengersData = passengers.map((passenger) => ({
      first_name: passenger.first_name,
      last_name: passenger.last_name,
      gender: passenger.gender,
      pass_type: passenger.pass_type
    }));
    if (saveButtonClicked) {
      handleNext(contact, passengersData);
    } else {
      window.alert('Save button was not submitted successfully');
      // Additional code here for error handling
    }
  };
  
  

  return (
      <div className='flight_container1'>
        <div className='flight_container'>
        <div className='flight_form-group'>
          <div className='uppercase font-bold text-sm text-center'>
            <h4>Who's Flying?</h4>
          </div>
          <div className='font-semibold text-lg'>
            <h5>Contact Details</h5>
          </div>
          <div className='flight_form-group'>
            <label>Name:</label>
            <input
              value={contactName}
              onChange={handleName}
              className='flight_form-control'
              required
            />
          </div>
          <div className='flight_form-group'>
            <label>Email: </label>
            <input
              className='flight_form-control'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          </div>
        </div>
        <div className='flight_form-group'>
          <div className='flight_num'>
            <label>
              Phone Number:
              <PhoneInput
                placeholder='Enter phone number'
                value={phoneNums}
                onChange={handlePhoneNumsChange}
                required
              />
            </label>
          </div>
        </div>
        <div className="flight_form-group">
          <label>Class:</label>
            <select
              value={contactClass}
              onChange={(event) => setContactClass(event.target.value)}
              className="flight_form-control"
              required
            >
              <option value="">Select</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
        </div>
        <button onClick={handleSaveContact}>
          <div className='py-2 px-2 bg-rose-400 text-xl m-3 rounded-lg text-white '>
            SAVE
          </div>
        </button>
        {saveButtonClicked && (
           <div style={{ fontSize: '1px' }} className="font-semibold text-xxs ">
             <h2 className="text-red-600 text-sm">Submitted Successfully!</h2>
           </div>
        )}
      </div>  
      <br />
    <div className='flight_container'>
        <div className='font-semibold text-lg'>
          <h5>Passenger Details</h5>
        </div>
    
        {showPassengerList ? (
          <>
            <form onSubmit={handleFormSubmit}>
              <div className='flight_form-box'>
                <div className='flight_form-group'>
                  <label>First Name:</label>
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className='flight_form-control'
                    required
                  />
                </div>
                <div className='flight_form-group'>
                  <label>Last Name:</label>
                  <input
                    className='flight_form-control'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                  />
                </div>
                <div className="flight_form-group">
                  <label>Gender:</label>
                    <select
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                      className="flight_form-control"
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                </div>
                <div className="flight_form-group">
                  <label>Passenger Type:</label>
                  <select
                    value={passType}
                    onChange={(event) => setPassType(event.target.value)}
                    className="flight_form-control"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Adult">Adult(18+)</option>
                    <option value="Child">Child(below 18)</option>
                  </select>
                </div>
                <div className='flight_form-group'>
                  <button type='submit'>
                    <div className='py-2 px-2 bg-rose-400 text-xl m-3 rounded-lg text-white'>
                      View Details
                    </div>
                  </button>
                  <button type='button' onClick={addPassenger}>
                    <div className='py-2 px-2 bg-rose-400 text-xl m-3 rounded-lg text-white'>
                      Add Passenger
                    </div>
                  </button>
                </div>
              </div>
            </form>
            {passengers.length > 0 && (
              <div className='flight_passenger-details'>
                <h5>Passenger List</h5>
                {passengers.map((passenger, index) => (
                  <div className="border border-black p-4 rounded-md mb-4" key={index}>
                    <p>First Name: {passenger.first_name}</p>
                    <p>Last Name: {passenger.last_name}</p>
                    <p>Gender: {passenger.gender}</p>
                    <p>Passenger Type: {passenger.pass_type}</p>
                    <button onClick={() => handleRemovePassenger(index)}>
                      <div className='py-2 px-2 bg-rose-400 text-sm m-3 rounded-lg text-white'>REMOVE
                      </div>
                    </button>

                  </div>
                ))}
                <button onClick={storePassengerDetails}>
                  <div className='py-2 px-2 bg-rose-400 text-sm m-3 rounded-lg text-white'>SUBMIT
                  </div>
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {showSuccessMessage && (
              <div className='font-semibold'>
                <h2 className="text-red-600 text-sm">Submitted Successfully!</h2>
              </div>
            )}
            <div className='flight_passenger-details'>
          <h2>Passenger List</h2>
          {passengers.map((passenger, index) => (
            <div className='flight_passenger-box' key={index}>
              <p>First Name: {passenger.first_name}</p>
              <p>Last Name: {passenger.last_name}</p>
              <p>Gender: {passenger.gender}</p>
              <p>Passenger Type: {passenger.pass_type}</p>
              <hr />
            </div>
          ))}
        </div>
            <button onClick={handleNextButton}>
              <div className='py-2 px-2 bg-yellow-400 text-sm m-3 rounded-lg text-white'>NEXT
              </div>
            </button>
          </>
        )}
      </div>
    </div>  
    
  );
}