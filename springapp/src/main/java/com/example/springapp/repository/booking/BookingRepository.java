package com.example.springapp.repository.booking;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.booking.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    
}
