package com.example.springapp.service.review;

import com.example.springapp.dto.review.ReviewDto;

public interface ReviewService {

    public Object getHotelReviews(long hotelId);

    public String addReview(ReviewDto reviewDto);
    
}
