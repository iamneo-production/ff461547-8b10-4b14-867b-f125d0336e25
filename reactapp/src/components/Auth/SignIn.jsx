import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const { handleAuthenticationSuccess } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [lastClickedButton, setLastClickedButton] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdminLogin = () => {
    // Replace the adminCredentials with your actual admin credentials
    handleAuthenticationSuccess();
    const adminCredentials = {
      
      email: 'admin123@gmail.com',
      password: 'admin123',
    };

    if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      // If the email and password match the admin credentials, redirect to the admin page
      navigate('/admin');
    } else {
      // If the email and password do not match the admin credentials, handle regular login logic
      handleAuthenticationSuccess();
      const lastClickedButton = localStorage.getItem('lastClickedButton') || '';
      if (!lastClickedButton) {
        navigate('/');
      } else if (lastClickedButton === 'findCar') {
        navigate('/rental-cars/search');
      } else if (lastClickedButton === 'findFlight') {
        navigate('/SearchFlight');
      }
    }
  };

  const handleFindCarClick = () => {
    setLastClickedButton('findCar');
    localStorage.setItem('lastClickedButton', 'findCar');
  };

  const handleFindFlightClick = () => {
    setLastClickedButton('findFlight');
    localStorage.setItem('lastClickedButton', 'findFlight');
  };

  useEffect(() => {
    const storedLastClickedButton = localStorage.getItem('lastClickedButton') || '';
    setLastClickedButton(storedLastClickedButton);
  }, []);

  return (
    <div className="register-outer-container">
      <div className="register-container">
        <h2><b>Sign In</b></h2>
        <form onSubmit={handleAdminLogin}>
          <div className="input-container">
            <input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
          </div>
          {emailError && <p className="error-text">{emailError}</p>}
          <div className="input-container">
            <input
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="uppercase rounded-lg bg-blue-500 text-white font-semibold px-4 py-2">Sign In</button>
          </div>
          <br />
          <p>
            <b>
              Don't have an account <Link className="linkto" to="/register">Register Now</Link>
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
