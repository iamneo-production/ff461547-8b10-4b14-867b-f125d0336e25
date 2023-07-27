package com.example.springapp.service.hotel;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.dto.hotel.HotelSearchRequestDto;
import com.example.springapp.dto.hotel.HotelSearchResponseDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookedDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookRequestDto;
import com.example.springapp.model.hotel.Hotel;

public interface HotelService {
    public List<Hotel> getAllHotels();

    public Hotel getHotelByHotelId(long hotelId);

    public Hotel addHotel(Hotel hotel);

    public boolean deleteHotel(long hotelId);

    public List<HotelSearchResponseDto> searcHoteLs(HotelSearchRequestDto searchRequest);

    public HotelBookedDto addbooking(long customerId, long hotelId, HotelBookRequestDto hotelBookingDto);

    public boolean uploadImage(MultipartFile image, long hotelId);
}
