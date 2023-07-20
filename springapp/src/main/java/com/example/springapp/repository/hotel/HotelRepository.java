package com.example.springapp.repository.hotel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.hotel.Hotel;

public interface HotelRepository extends JpaRepository<Hotel,Long>{
    public List<Hotel> findHotelsByCountryAndCity(String country, String city);
}
