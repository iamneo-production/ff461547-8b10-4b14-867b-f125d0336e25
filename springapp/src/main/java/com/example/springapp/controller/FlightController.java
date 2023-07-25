package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Booking;
import com.example.springapp.model.Flight;
import com.example.springapp.repository.FlightRepo;

@RestController
@RequestMapping("/flight")
public class FlightController {
	
	
	@Autowired
	FlightRepo flightrepo;
	
	@GetMapping("/flight")
	 List<Flight> getFlightAll(){
		return flightrepo.findAll();
	}
	@PostMapping("/flight")
	 Flight create(@RequestBody Flight flight) {
		 return flightrepo.save(flight);
	 }
	@GetMapping("/flight/{id}")
	 Flight getFlightById(@PathVariable("id") Long id) {
		 return flightrepo.getById(id);
	 }
	@PutMapping("/flight/{id}")
	 Flight update(@PathVariable("id")Long id,@RequestBody Flight flight) {
		 return flightrepo.updateFlight(id,flight);
		 
	 }
	@DeleteMapping("/flight/{id}")
	 void deleteFlight(Long id) {
		 Flight flight=flightrepo.findById(id).get();
		 if(flight!=null) {
			 flightrepo.deleteById(id);
		 }
	 }

}
