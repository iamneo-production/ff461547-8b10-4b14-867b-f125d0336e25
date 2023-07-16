package com.example.springapp.model.booking;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.example.springapp.model.hotel.BookedHotel;
import com.example.springapp.model.travelagent.TravelAgent;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private long bookingId;

    @Column(name = "customer_id")
    private long customerId;

    @Column(name = "flight_booking_id")
    private long flightBookingId;

    @OneToOne
    @JoinColumn(name = "hotel_booking_id")
    private BookedHotel bookedHotels;

    @Column(name = "car_booking_id")
    private long carBookingId;

    @Column(name = "booking_date_time")
    private LocalDateTime bookingDateTime;

    @Column(name = "booking_status")
    private String bookingStatus;

    @ManyToOne
    @JoinColumn(name = "travel_agent_id")
    @JsonBackReference
    private TravelAgent travelAgent;

    public Booking(){
        super();
    }

    public Booking(long customerId, long flightBookingId, BookedHotel bookedHotels, long carBookingId,
            LocalDateTime bookingDateTime, TravelAgent travelAgent) {
                super();
        this.customerId = customerId;
        this.flightBookingId = flightBookingId;
        this.bookedHotels = bookedHotels;
        this.carBookingId = carBookingId;
        this.bookingDateTime = bookingDateTime;
        this.travelAgent = travelAgent;
    }

    public long getBookingId() {
        return bookingId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public long getFlightBookingId() {
        return flightBookingId;
    }

    public void setFlightBookingId(long flightBookingId) {
        this.flightBookingId = flightBookingId;
    }

    public BookedHotel getHotelBookingId() {
        return bookedHotels;
    }

    public void setHotelBookingId(BookedHotel bookedHotels) {
        this.bookedHotels = bookedHotels;
    }

    public long getCarBookingId() {
        return carBookingId;
    }

    public void setCarBookingId(long carBookingId) {
        this.carBookingId = carBookingId;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public TravelAgent getTravelAgent() {
        return travelAgent;
    }

    public void setTravelAgent(TravelAgent travelAgent) {
        this.travelAgent = travelAgent;
    }  
}
