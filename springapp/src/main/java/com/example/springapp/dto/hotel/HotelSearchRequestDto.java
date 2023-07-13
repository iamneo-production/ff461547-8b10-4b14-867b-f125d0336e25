package com.example.springapp.dto.hotel;

import java.util.List;

public class HotelSearchRequestDto {
    private String country;
    private String city;
    private int numOfRooms;
    private List<Integer> roomCapacity;
    
    
    public HotelSearchRequestDto() {
        super();
    }
    public HotelSearchRequestDto(String country, String city, int numOfRooms, List<Integer> roomCapacity) {
        super();
        this.country = country;
        this.city = city;
        this.numOfRooms = numOfRooms;
        this.roomCapacity = roomCapacity;
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
    public int getNumOfRooms() {
        return numOfRooms;
    }
    public void setNumOfRooms(int numOfRooms) {
        this.numOfRooms = numOfRooms;
    }
    public List<Integer> getRoomCapacity() {
        return roomCapacity;
    }
    public void setRoomCapacity(List<Integer> roomCapacity) {
        this.roomCapacity = roomCapacity;
    }
}
