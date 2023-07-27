import React, { useState } from 'react';
import '../../../style/cars_style/carfeedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null); // Set initial value to null

  const navigate = useNavigate();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value); // Toggle the rating if the same star is clicked again or set to null if deselected
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (rating === null) {
        alert('Please select a rating.'); // Show an alert or error message
        return; // Return to prevent form submission
      }
      
     axios
      .post('/carfeedback', { feedback, rating })
      .then((response) => {
        console.log('Feedback stored successfully:', response.data);
        // Optionally, you can perform any action after successful storage, like showing a success message or navigating to another page.
        // For example, after storing the feedback, you can navigate to another page like the home page:
        navigate('/rental-cars/manage'); // Make sure to import `useNavigate` from 'react-router-dom'
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <div className="CarFeedback">
      <h2>Customer Car Booking Experience Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            cols="45"
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
                required // Make the rating buttons required
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
};

export default CarFeedback;
