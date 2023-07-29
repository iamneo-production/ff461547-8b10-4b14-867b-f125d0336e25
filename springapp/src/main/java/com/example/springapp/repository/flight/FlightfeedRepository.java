package com.example.springapp.repository;

import com.example.springapp.model.flight.FlightFeedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightfeedRepository extends JpaRepository<FlightFeedback,Long> {
}
