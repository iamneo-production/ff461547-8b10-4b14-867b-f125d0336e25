package com.example.springapp.dto.booking.hotel;

public class BookedHotelDetailsDto {
    private long hotelBookingId;
    private String hotelName;
    private String country;
    private String city;
    private String guestName;
    private String idType;
    private String idNumber;
    private int totalRooms;
    private int totalTravellers;
    private String totalAmount;
    private String checkInDate;
    private String checkOutDate;
    private String bookingStatus;

    public BookedHotelDetailsDto() {
        super();
    }

    public BookedHotelDetailsDto(long hotelBookingId, String hotelName, String country, String city, String guestName,
            String idType, String idNumber, int totalRooms, int totalTravellers, String totalAmount, String checkInDate,
            String checkOutDate, String bookingStatus) {
                super();
        this.hotelBookingId = hotelBookingId;
        this.hotelName = hotelName;
        this.country = country;
        this.city = city;
        this.guestName = guestName;
        this.idType = idType;
        this.idNumber = idNumber;
        this.totalRooms = totalRooms;
        this.totalTravellers = totalTravellers;
        this.totalAmount = totalAmount;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.bookingStatus = bookingStatus;
    }

    public long getHotelBookingId() {
        return hotelBookingId;
    }

    public void setHotelBookingId(long hotelBookingId) {
        this.hotelBookingId = hotelBookingId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
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

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
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

    public int getTotalRooms() {
        return totalRooms;
    }

    public void setTotalRooms(int totalRooms) {
        this.totalRooms = totalRooms;
    }

    public int getTotalTravellers() {
        return totalTravellers;
    }

    public void setTotalTravellers(int totalTravellers) {
        this.totalTravellers = totalTravellers;
    }

    public String getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
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

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    } 
    
}
