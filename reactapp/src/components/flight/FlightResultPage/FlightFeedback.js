import React, { useState } from 'react';
import '../../../style/flight_style/flightfeedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../assets/flighticon.png';
import FeedRateImage from '../assets/feedrate.jpg';

function FlightFeedback() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null); 

  const navigate = useNavigate();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    if (rating === null) {
      alert('Please select a rating.'); 
      return; 
    }

    axios
      .post(`/flightfeed`, { feedback, rating })
      .then((response) => {
        console.log('Feedback stored successfully:', response.data);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <div className="FlightFeedback">
      <div className="feed-rate-image">
        <img src={FeedRateImage} alt="Feed Rate" />
      </div>
      <br/>      
      <h2>Drop your Reviews<div className="flight-icon">
        <img src={FlightIcon} alt="Flight Icon" />
      </div></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            cols="48"
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`star ${value <= rating ? 'checked' : ''}`}
                onClick={() => handleRatingChange(value)}
                required 
              >
                &#9733;
              </button>
            ))}
          </div>
        </div>
        <button className="Submit-btn" type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FlightFeedback;
