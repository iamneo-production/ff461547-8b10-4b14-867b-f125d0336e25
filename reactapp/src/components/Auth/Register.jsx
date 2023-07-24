import React, { useState } from "react";
import "../../style/auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Register = (props) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const initialState = {
    form: {
      name: "",
      email: "",
      phone: "",
      password: ""
    }
  };
  const [formData, setFormData] = useState(initialState.form);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/');
    if (formData.password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    // Make a POST request to the backend API for user registration
    axios.post("/auth/signup", formData)
      .then(res => {
        console.log(res.data);
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClose = () => {
    setShowLoginForm(false);
  };

  if (!showLoginForm) {
    return null;
  }

  return (
    <div className="register-outer-container">
      <div className="register-container">
        <h2>Register</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* ... other form fields ... */}
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
            <button type="submit" className="uppercase rounded-lg bg-blue-500 text-white font-semibold px-4 py-2">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
