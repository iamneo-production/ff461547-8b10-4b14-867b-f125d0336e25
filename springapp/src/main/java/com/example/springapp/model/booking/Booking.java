package com.example.springapp.model.booking;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.example.springapp.model.customer.Customer;
import com.example.springapp.model.hotel.BookedHotel;
import com.example.springapp.model.travelagent.TravelAgent;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private long bookingId;

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    private BookedHotel bookedHotels;

    @Column(name = "booking_date_time")
    private LocalDateTime bookingDateTime;

    @Column(name = "booking_status")
    private String bookingStatus = "pending";

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "travel_agent_id")
    @JsonBackReference
    private TravelAgent travelAgent;

    private String verficationDocType;

    private String verificationNumber;
    
    private String bookingType;

    public Booking(){
        super();
    }

    public Booking(LocalDateTime bookingDateTime, String bookingStatus, Customer customer, TravelAgent travelAgent,
            String verficationDocType, String verificationNumber, String bookingType) {
        this.bookingDateTime = bookingDateTime;
        this.bookingStatus = bookingStatus;
        this.customer = customer;
        this.travelAgent = travelAgent;
        this.verficationDocType = verficationDocType;
        this.verificationNumber = verificationNumber;
        this.bookingType = bookingType;
    }

    public BookedHotel getBookedHotels() {
        return bookedHotels;
    }

    public void setBookedHotels(BookedHotel bookedHotels) {
        this.bookedHotels = bookedHotels;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public TravelAgent getTravelAgent() {
        return travelAgent;
    }

    public void setTravelAgent(TravelAgent travelAgent) {
        this.travelAgent = travelAgent;
    }

    public String getVerficationDocType() {
        return verficationDocType;
    }

    public void setVerficationDocType(String verficationDocType) {
        this.verficationDocType = verficationDocType;
    }

    public String getVerificationNumber() {
        return verificationNumber;
    }

    public void setVerificationNumber(String verificationNumber) {
        this.verificationNumber = verificationNumber;
    }

    public String getBookingType() {
        return bookingType;
    }

    public void setBookingType(String bookingType) {
        this.bookingType = bookingType;
    }

    public long getBookingId() {
        return bookingId;
    }           
}
