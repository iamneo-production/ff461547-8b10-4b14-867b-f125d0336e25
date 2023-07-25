import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/Feedback.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    message: "",
  });
  const [rating, setRating] = useState(0);

  const { message } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const feedbackData = {
    ...user,
    rating,
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    setSubmitted(true);

     {
      // Check if a rating has been selected
      if (rating === 0) {
        toast.error("Please select a rating.");
        setSubmitted(false); // Reset submitted state to allow resubmission
        return;
      }
      
    }
  };

  const renderDropdown = () => {
    return (
      <select value={rating} onChange={(e) => handleRatingChange(Number(e.target.value))} required>
        <option value={0}>Select rating...</option>
        <option value={1}>1 star</option>
        <option value={2}>2 stars</option>
        <option value={3}>3 stars</option>
        <option value={4}>4 stars</option>
        <option value={5}>5 stars</option>
      </select>
    );
  };

  return (
    <div className="center">
      {submitted ? (
        <div>
          <h2>Thank you for contacting us!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Rating & Review</h2>
          <textarea
            rows="5"
            cols="50"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          <br />

          <label>
            Rating<span className="required-star">*</span>: {renderDropdown()}
          </label>

          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default Feedback;