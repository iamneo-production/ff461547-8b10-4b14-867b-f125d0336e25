package com.example.springapp.service.hotel;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.repository.hotel.HotelRepository;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    HotelRepository hotelRepository;

    public HotelServiceImpl() {
        super();

    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel getHotelByHotelId(long hotelId) {
        Hotel hotel = null;
        try {
            hotel = hotelRepository.findById(hotelId).get();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }
        return hotel;
    }

    @Override
    public Hotel addHotel(Hotel hotel) {
        Hotel createdHotel=null;
        try {
            createdHotel = hotelRepository.save(hotel);           
        } catch (Exception e) {
            e.printStackTrace();
        }
        return createdHotel;
    }

    @Override
    public boolean deleteHotel(long hotelId) {
        boolean status=false;
        try{
            hotelRepository.deleteById(hotelId);
            status=true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }

}