package com.example.springapp.repository.review;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.review.Review;

public interface ReviewRepository extends JpaRepository<Review,Long> {
    
}
