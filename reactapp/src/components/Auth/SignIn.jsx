import React, { useState, useContext} from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../style/auth.css";

export const Login = () => {
  const { handleAuthenticationSuccess } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialState = {
    form: {
      email: "",
      password: ""
      }
    };
const [formData, setFormData] = useState(initialState.form); 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdminLogin = () => {
    
    handleAuthenticationSuccess();
    const adminCredentials = {
      
      email: 'admin123@gmail.com',
      password: 'admin123',
    };

    if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      navigate('/admin');
    } else {
      
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
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/auth/login", formData)
      .then(res => {
        // Assuming the backend returns a success status code upon successful login
        if (res.status === 200) {
          handleAdminLogin();
        } else {
          console.log("Login failed:", res.data.message);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert("Invalid email or password");
        } else {
          console.log(err);
        }
      });
  };


  return (
    <div className="register-outer-container">
      <div className="register-container">
        <h2><b>Sign In</b></h2>
        <form onSubmit={handleSubmit}>
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
