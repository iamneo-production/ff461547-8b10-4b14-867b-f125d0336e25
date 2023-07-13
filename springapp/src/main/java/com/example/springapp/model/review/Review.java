package com.example.springapp.model.review;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.springapp.model.customer.Customer;
import com.example.springapp.model.hotel.Hotel;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private long reviewId;

    private float rating;

    private String comment;

    @ManyToOne()
    @JoinColumn(name = "customer_id")
    @JsonBackReference(value = "customer-revies")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = true)
    @JsonBackReference(value = "hotel-reviews")
    private Hotel hotel;

    public Review() {
        super();
    }

    public Review(float rating, String comment, Customer customer, Hotel hotel) {
        super();
        this.rating = rating;
        this.comment = comment;
        this.customer = customer;
        this.hotel = hotel;
    }

    public long getReviewId() {
        return reviewId;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }    
}
