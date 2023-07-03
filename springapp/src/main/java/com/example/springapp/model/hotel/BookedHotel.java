package com.example.springapp.model.hotel;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class BookedHotel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_booking_id")
    private long hotelBookingId;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    @OneToMany(mappedBy = "bookedHotel")
    private List<Room> roomList=new ArrayList<>();

    @Column(name = "check_in_date")
    private LocalDateTime checkInDateTime;

    @Column(name = "check_out_date")
    private LocalDateTime checkOutDateTime;

    @Column(name = "num_of_rooms_booked")
    private int numOfRoomsBooked;

    @Column(name = "num_of_adults")
    private int numOfAdults;

    @Column(name = "num_of_childs")
    private int numOfChilds;

    @Column(name = "total_amount")
    private double totalAmount;

    public BookedHotel() {
        super();
    }

    public BookedHotel(Hotel hotel, List<Room> roomList, LocalDateTime checkInDateTime,
            LocalDateTime checkOutDateTime, int numOfRoomsBooked, int numOfAdults, int numOfChilds,
            double totalAmount) {
                super();
        this.hotel = hotel;
        this.roomList = roomList;
        this.checkInDateTime = checkInDateTime;
        this.checkOutDateTime = checkOutDateTime;
        this.numOfRoomsBooked = numOfRoomsBooked;
        this.numOfAdults = numOfAdults;
        this.numOfChilds = numOfChilds;
        this.totalAmount = totalAmount;
    }

    public long getHotelBookingId() {
        return hotelBookingId;
    }
    
    public Hotel getHotelId() {
        return hotel;
    }

    public void setHotelId(Hotel hotel) {
        this.hotel = hotel;
    }

    public List<Room> getRoomList() {
        return roomList;
    }

    public void setRoomList(List<Room> roomList) {
        this.roomList = roomList;
    }

    public LocalDateTime getCheckInDateTime() {
        return checkInDateTime;
    }

    public void setCheckInDateTime(LocalDateTime checkInDateTime) {
        this.checkInDateTime = checkInDateTime;
    }

    public LocalDateTime getCheckOutDateTime() {
        return checkOutDateTime;
    }

    public void setCheckOutDateTime(LocalDateTime checkOutDateTime) {
        this.checkOutDateTime = checkOutDateTime;
    }

    public int getNumOfRoomsBooked() {
        return numOfRoomsBooked;
    }

    public void setNumOfRoomsBooked(int numOfRoomsBooked) {
        this.numOfRoomsBooked = numOfRoomsBooked;
    }

    public int getNumOfAdults() {
        return numOfAdults;
    }

    public void setNumOfAdults(int numOfAdults) {
        this.numOfAdults = numOfAdults;
    }

    public int getNumOfChilds() {
        return numOfChilds;
    }

    public void setNumOfChilds(int numOfChilds) {
        this.numOfChilds = numOfChilds;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }
}
