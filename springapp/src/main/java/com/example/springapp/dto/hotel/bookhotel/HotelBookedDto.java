package com.example.springapp.dto.hotel.bookhotel;

public class HotelBookedDto {
    private boolean booked;
    private String bookingStatus;
    private long bookingId;

    public HotelBookedDto() {
        super();
    }

    public HotelBookedDto(boolean booked, String bookingStatus, long bookingId) {
        super();
        this.booked = booked;
        this.bookingStatus = bookingStatus;
        this.bookingId = bookingId;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public long getBookingId() {
        return bookingId;
    }

    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
    }

}
