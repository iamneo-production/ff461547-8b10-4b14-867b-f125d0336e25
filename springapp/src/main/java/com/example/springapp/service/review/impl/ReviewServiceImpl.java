package com.example.springapp.service.review.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.dto.error.ErrorJsonDto;
import com.example.springapp.dto.review.ReviewDto;
import com.example.springapp.model.customer.Customer;
import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.model.review.Review;
import com.example.springapp.repository.customer.CustomerRepository;
import com.example.springapp.repository.hotel.HotelRepository;
import com.example.springapp.repository.review.ReviewRepository;
import com.example.springapp.service.review.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Object getHotelReviews(long hotelId) {
         Object response=null;
        List<Review> reviews=null;
        try {
            Hotel hotel = hotelRepository.findById(hotelId).get();
            reviews=hotel.getReviews();
            response = reviews;
        } catch (NoSuchElementException e) {
            ErrorJsonDto error = new ErrorJsonDto("Hotel does not exist", 404);
            response = error;
            e.printStackTrace();
        }catch( Exception e){
            ErrorJsonDto error= new ErrorJsonDto("Internal Server Error", 500);
            response=error;
            e.printStackTrace();
        }
        return response;
    }

    @Override
    public String addReview(ReviewDto reviewDto) {
        String status = "failed";
        switch(reviewDto.getType()){
            case "hotel" : {
                try {
                Hotel hotel = hotelRepository.findById(reviewDto.getForeignKeyId()).get();
                Customer customer = customerRepository.findById(reviewDto.getCustomerId()).get();
                Review review = addReviewHelper(reviewDto);
                review.setCustomer(customer);
                review.setHotel(hotel);
                reviewRepository.save(review);
                hotel.setNumOfRating(hotel.getNumOfRating()+1);
                hotel.setRating(hotel.getRating()+(review.getRating())%5.0f);
                hotelRepository.save(hotel);
                status = "success";
                } catch (Exception e) {
                    e.printStackTrace();
                }
                break;
            }
            default : status = "invalid";
        }
        return status;
    }

    private Review addReviewHelper(ReviewDto reviewDto){
        Review review = new Review();
        review.setComment(reviewDto.getComment());
        review.setRating(reviewDto.getRating());
        return review;
    }
}
