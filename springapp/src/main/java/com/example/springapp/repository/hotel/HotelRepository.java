package com.example.springapp.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.hotel.Hotel;

public interface HotelRepository extends JpaRepository<Hotel,Long> {
    
}
