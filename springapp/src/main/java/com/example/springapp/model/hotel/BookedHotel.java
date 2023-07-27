package com.example.springapp.model.hotel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.example.springapp.model.booking.Booking;


@Entity
public class BookedHotel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_booking_id")
    private long hotelBookingId;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "booking_id", referencedColumnName = "booking_id")
    private Booking booking;

    @OneToMany(mappedBy = "bookedHotel")
    private List<Room> roomList=new ArrayList<>();

    @Column(name = "check_in_date")
    private String checkInDate;

    @Column(name = "check_out_date")
    private String checkOutDate;

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

    public BookedHotel(Hotel hotel, List<Room> roomList, String checkInDate,
            String checkOutDate, int numOfRoomsBooked, int numOfAdults, int numOfChilds,
            double totalAmount) {
                super();
        this.hotel = hotel;
        this.roomList = roomList;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.numOfRoomsBooked = numOfRoomsBooked;
        this.numOfAdults = numOfAdults;
        this.numOfChilds = numOfChilds;
        this.totalAmount = totalAmount;
    }

    public long getHotelBookingId() {
        return hotelBookingId;
    }
    
    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public List<Room> getRoomList() {
        return roomList;
    }

    public void setRoomList(List<Room> roomList) {
        this.roomList = roomList;
    }

    public String getCheckInDateTime() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
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

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

}
