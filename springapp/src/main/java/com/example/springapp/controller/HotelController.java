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

import com.example.springapp.model.Hotel;
import com.example.springapp.repository.HotelRepo;

@RestController
@RequestMapping("/hotel")
public class HotelController {
	
	@Autowired
	HotelRepo hotelrepo;
	
	@GetMapping("/hotel")
	 List<Hotel> getHotelAll(){
		return hotelrepo.findAll();
	}
	@PostMapping("/hotel")
	 Hotel create(@RequestBody Hotel hotel) {
		 return hotelrepo.save(hotel);
	 }
	@GetMapping("/hotel/{id}")
	 Hotel getHotelById(@PathVariable("id") Long id) {
		 return hotelrepo.getById(id);
	 }
	@PutMapping("/hotel/{id}")
	 Hotel update(@PathVariable("id") Long id,@RequestBody Hotel hotel) {
		 return hotelrepo.updateHotel(id,hotel);
		 
	 }
	@DeleteMapping("/hotel/{id}")
	 void deleteFlight(@PathVariable("id") Long id) {
		 Hotel hotel=hotelrepo.findById(id).get();
		 if(hotel!=null) {
			 hotelrepo.deleteById(id);
		 }
	 }
	

}
