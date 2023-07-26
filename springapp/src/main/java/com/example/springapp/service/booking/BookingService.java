package com.example.springapp.service.booking;

import java.util.List;
import java.util.Map;

import com.example.springapp.dto.booking.BookingDto;
import com.example.springapp.dto.booking.hotel.BookedHotelDetailsDto;
import com.razorpay.Order;

public interface BookingService {
    public BookingDto getBooking(long bookingId);

    public BookedHotelDetailsDto getHotelBooking(long customerId);

    public List<BookedHotelDetailsDto> getAllHotelBooking(long customerId);

    public boolean deleteHotelBooking(long bookingId);

    public Order createOrder(Map<String, Object> data);

    public boolean registerPayment(Map<String, Object> data, long bookingId); 
}
