package com.example.springapp.model.hotel;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Room")
public class Room {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private long roomId;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "room_number")
    private int roomNumber;

    @Column(name="num_beds")
    private int numOfbeds;

    @Column(name = "capacity")
    private int roomCapacity;

    @Column(name = "status")
    private String roomStatus;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    @JsonBackReference(value = "hotel-room")
    private Hotel hotel;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name ="hotel_booking_id",nullable = true)
    @JsonIgnore
    private BookedHotel bookedHotel;

    public Room() {
        super();
    }
    
    public Room(String roomType, int roomNumber, int numOfbeds, int roomCapacity, String roomStatus, Hotel hotel) {
        super();
        this.roomType = roomType;
        this.roomNumber = roomNumber;
        this.numOfbeds = numOfbeds;
        this.roomCapacity = roomCapacity;
        this.roomStatus = roomStatus;
        this.hotel = hotel;
    }



    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public void setNumOfbeds(int numOfbeds) {
        this.numOfbeds = numOfbeds;
    }

    public void setRoomCapacity(int roomCapacity) {
        this.roomCapacity = roomCapacity;
    }

    public void setRoomStatus(String roomStatus) {
        this.roomStatus = roomStatus;
    }

    public long getRoomId() {
        return roomId;
    }

    public String getRoomType() {
        return roomType;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public int getNumOfbeds() {
        return numOfbeds;
    }

    public int getRoomCapacity() {
        return roomCapacity;
    }

    public String getRoomStatus() {
        return roomStatus;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
