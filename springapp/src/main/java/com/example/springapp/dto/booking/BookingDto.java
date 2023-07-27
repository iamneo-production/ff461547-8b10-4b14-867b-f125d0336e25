package com.example.springapp.dto.booking;

import com.example.springapp.model.travelagent.TravelAgent;

public class BookingDto {

    private long bookingId;
    private String bookingStatus;
    private String bookingType;
    private TravelAgent travelAgent;
    private String idType;
    private String idNumber;

    public BookingDto() {
        super();
    }

    public BookingDto(long bookingId, String bookingStatus, String bookingType,
            TravelAgent travelAgent, String verficationDocType, String verificationNumber) {
        super();
        this.bookingId = bookingId;
        this.bookingStatus = bookingStatus;
        this.bookingType = bookingType;
        this.travelAgent = travelAgent;
        this.idType = verficationDocType;
        this.idNumber = verificationNumber;
    }

    public long getBookingId() {
        return bookingId;
    }

    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public String getBookingType() {
        return bookingType;
    }

    public void setBookingType(String bookingType) {
        this.bookingType = bookingType;
    }

    public TravelAgent getTravelAgent() {
        return travelAgent;
    }

    public void setTravelAgent(TravelAgent travelAgent) {
        this.travelAgent = travelAgent;
    }

    public String getIdType() {
        return idType;
    }

    public void setIdType(String verficationDocType) {
        this.idType = verficationDocType;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String verificationNumber) {
        this.idNumber = verificationNumber;
    }

}
