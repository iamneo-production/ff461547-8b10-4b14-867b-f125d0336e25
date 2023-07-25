package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.springapp.model.Flight;


public interface FlightRepo extends JpaRepository<Flight,Long> {



	Flight updateFlight(Long id, Flight flight);

	Flight getById(Long id);

	void deleteById(Long id);



}
