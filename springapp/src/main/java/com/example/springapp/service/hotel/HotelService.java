package com.example.springapp.service.hotel;

import java.util.List;

import com.example.springapp.model.hotel.Hotel;

public interface HotelService {
    public List<Hotel> getAllHotels();
    public Hotel getHotelByHotelId(long hotelId);
    public Hotel addHotel(Hotel hotel);
    public boolean deleteHotel(long hotelId);
}
