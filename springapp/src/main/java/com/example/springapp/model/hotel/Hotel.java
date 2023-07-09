package com.example.springapp.model.hotel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    private long hotelId;

    @Column(name = "hotel_name")
    private String hotelName;

    private String country;

    private String city;

    @Column(name = "max_rooms")
    private int maxRooms;

    @Column(name = "available_rooms")
    private int availableRooms;

    @Column(name = "price_per_day")
    private int pricePerDay;

    private float rating;

    @Column(name = "num_rating")
    private int numOfRating;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Room> roomList = new ArrayList<>();

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BookedHotel> bookedHotel;

    public Hotel() {
        super();
    }

    public Hotel(String hotelName, String country, String city, int maxRooms, int availableRooms, int pricePerDay,
            float rating, int numOfRating, List<Room> roomList) {
        this.hotelName = hotelName;
        this.country = country;
        this.city = city;
        this.maxRooms = maxRooms;
        this.availableRooms = availableRooms;
        this.pricePerDay = pricePerDay;
        this.rating = rating;
        this.numOfRating = numOfRating;
        this.roomList = roomList;
    }

    public long getHotelId() {
        return hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public int getMaxRooms() {
        return maxRooms;
    }

    public int getAvailableRooms() {
        return availableRooms;
    }

    public int getPricePerDay() {
        return pricePerDay;
    }

    public float getRating() {
        return rating;
    }

    public int getNumOfRating() {
        return numOfRating;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public void setMaxRooms(int maxRooms) {
        this.maxRooms = maxRooms;
    }

    public void setAvailableRooms(int availableRooms) {
        this.availableRooms = availableRooms;
    }

    public void setPricePerDay(int pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public void setNumOfRating(int numOfRating) {
        this.numOfRating = numOfRating;
    }

    public List<Room> getRoomList() {
        return roomList;
    }

    public void setRoomList(List<Room> roomList) {
        this.roomList = roomList;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<BookedHotel> getBookedHotel() {
        return bookedHotel;
    }

    public void setBookedHotel(List<BookedHotel> bookedHotel) {
        this.bookedHotel = bookedHotel;
    }

}
