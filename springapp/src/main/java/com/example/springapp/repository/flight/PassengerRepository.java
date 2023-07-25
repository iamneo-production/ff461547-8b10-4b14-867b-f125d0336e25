package com.example.springapp.repository;

import com.example.springapp.model.PassengerDetails;
import org.springframework.data.jpa.repository.JpaRepository;



public interface PassengerRepository extends JpaRepository<PassengerDetails, Long> {
}