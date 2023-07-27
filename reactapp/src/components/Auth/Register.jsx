import React, { useState } from "react";
import "../../style/auth.css";
import { useNavigate,Link} from "react-router-dom";
import axios from "axios";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Register = (props) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const initialState = {
  form: {
    name: "",
    email: "",
    phone: "",
    password: "",
       }
  };
  const [formData, setFormData] = useState(initialState.form);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    // Make a POST request to the backend API for user registration
    axios.post(`/auth/signup`, formData)
    .then((response) => {
      console.log(response.data);
      navigate("/sign-in");
    })
    .catch((err) => {
      if (err.response && err.response.status === 400) {
        // Display a popup alert when email already exists
        alert("Email already exists. Please log in instead.");
      } else {
        console.log(err);
      }
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };


  return (
    <div className="register-outer-container">
      <div className="register-container">
        <h2>Register</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          
          <label htmlFor="name">Full Name</label>
          <input value={formData.name} name="name" onChange={handleInputChange} id="name" placeholder="full Name" required />

          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
          />
          <label htmlFor="phone">Mobile Number</label>
          <input value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone number" id="phone" name="phone" required />

          <label htmlFor="password">Password</label>
          <input value={formData.password} onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="input-icon" onClick={toggleShowPassword}>
              {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
            </span>
          </div>

          {!passwordsMatch && <p className="error-text">Passwords do not match!</p>}
          <div className="flex justify-center mt-4">
            <button type="submit" className="uppercase rounded-lg bg-blue-500 text-white font-semibold px-4 py-2">Register</button>
          </div>
          <br></br>
          <p>
            <b>
              Already have an account <Link className="linkto" to="/sign-in">Sign In</Link>
            </b>
          </p>
          
          
        </form>
      </div>
    </div>
  )
}

export default Register;
