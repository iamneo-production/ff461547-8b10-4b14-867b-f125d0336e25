package com.example.springapp.dto.hotel.bookhotel;

import java.util.ArrayList;
import java.util.List;

public class HotelBookRequestDto {
    List<RoomDto> rooms = new ArrayList<>();
    private String checkInDate;
    private String checkOutDate;
    private String name;
    private String idType;
    private String idNumber;
    private long travelAgent;
    private int travelers;

    public HotelBookRequestDto() {
        super();
    }

    public HotelBookRequestDto(List<RoomDto> rooms, String checkInDate, String checkOutDate, String name, String idType,
            String idNumber, long travelAgent, int travelers) {
        super();
        this.rooms = rooms;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.name = name;
        this.idType = idType;
        this.idNumber = idNumber;
        this.travelAgent = travelAgent;
        this.travelers = travelers;
    }

    public List<RoomDto> getRooms() {
        return rooms;
    }

    public void setRooms(List<RoomDto> rooms) {
        this.rooms = rooms;
    }

    public String getCheckInDate() {
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdType() {
        return idType;
    }

    public void setIdType(String idType) {
        this.idType = idType;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public long getTravelAgent() {
        return travelAgent;
    }

    public void setTravelAgent(long travelAgent) {
        this.travelAgent = travelAgent;
    }

    public int getTravelers() {
        return travelers;
    }

    public void setTravelers(int travelers) {
        this.travelers = travelers;
    }

    @Override
    public String toString() {
        return "HotelBookingDto [rooms=" + rooms + ", checkInDate=" + checkInDate + ", checkOutDate=" + checkOutDate
                + ", name=" + name + ", idType=" + idType + ", idNumber=" + idNumber + ", travelAgent=" + travelAgent
                + ", travelers=" + travelers + "]";
    }

}
