import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { baseUrl } from './Config';
import { AuthProvider } from './components/Auth/AuthContext';

import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick-theme.css"; //to hide the section separation in car_rental page
import "slick-carousel/slick/slick.css"; //to avoid unwanted spaces in pages in car_rental page

axios.defaults.baseURL = baseUrl;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>
</>
);

reportWebVitals();
