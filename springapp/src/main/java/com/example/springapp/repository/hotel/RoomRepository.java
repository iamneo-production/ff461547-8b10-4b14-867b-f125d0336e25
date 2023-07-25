package com.example.springapp.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.hotel.Room;

public interface RoomRepository extends JpaRepository<Room,Long> {
    
}
