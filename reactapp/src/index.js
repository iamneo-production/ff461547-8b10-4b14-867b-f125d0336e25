import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { baseUrl } from './Constants';

axios.defaults.baseURL = baseUrl;
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";//to avoid unwanted spaces in pages in car_rental page
import "slick-carousel/slick/slick-theme.css";//to hide the section separation in car_rental page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

reportWebVitals();
