package com.example.springapp.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.hotel.BookedHotel;

public interface BookedHotelRepository extends JpaRepository<BookedHotel, Long>{
    
}
