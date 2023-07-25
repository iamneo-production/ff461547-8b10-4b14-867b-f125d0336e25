package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.dto.error.ErrorJsonDto;
import com.example.springapp.dto.review.ReviewDto;
import com.example.springapp.model.review.Review;
import com.example.springapp.service.review.ReviewService;

@CrossOrigin
@RestController
public class ReviewController {

    @Autowired
    ReviewService reviewServiceImpl;

    @PostMapping("/review")
    public ResponseEntity<?> addReview(@RequestBody ReviewDto reviewDto) {
        String status = reviewServiceImpl.addReview(reviewDto);

        return status.equals("invalid")
                ? ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorJsonDto("Invalid type", 400))
                : status.equals("success")
                        ? ResponseEntity.status(HttpStatus.CREATED).body("Review Has Been Added SuccesFully")
                        : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body(new ErrorJsonDto("Something Went Wrong, Review insertion failed", 500));
    }

    @GetMapping("/hotels/reviews")
    public ResponseEntity<?> getHotelReview(@RequestParam("hotelId") long hotelId) {
        Object response = reviewServiceImpl.getHotelReviews(hotelId);
        if (response instanceof ErrorJsonDto) {
            if (((ErrorJsonDto) response).getStatus() == 404) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body((ErrorJsonDto) response);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body((ErrorJsonDto) response);
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body((List<Review>) response);
    }
}
