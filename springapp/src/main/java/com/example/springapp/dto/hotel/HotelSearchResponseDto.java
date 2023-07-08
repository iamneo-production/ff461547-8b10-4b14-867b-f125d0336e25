package com.example.springapp.dto.hotel;

public class HotelSearchResponseDto {

    private long hotelId;
    private String hotelName;
    private String country;
    private String city;
    private int pricePerDay;
    private float rating;
    private int numOfRating;

    public long getHotelId() {
        return hotelId;
    }

    public HotelSearchResponseDto() {
        super();
    }

    public HotelSearchResponseDto(long hotelId, String hotelName, String country, String city, int pricePerDay,
            float rating, int numOfRating) {
        super();
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.country = country;
        this.city = city;
        this.pricePerDay = pricePerDay;
        this.rating = rating;
        this.numOfRating = numOfRating;
    }

    public void setHotelId(long hotelId) {
        this.hotelId = hotelId;
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

    public int getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(int pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public int getNumOfRating() {
        return numOfRating;
    }

    public void setNumOfRating(int numOfRating) {
        this.numOfRating = numOfRating;
    }

}
