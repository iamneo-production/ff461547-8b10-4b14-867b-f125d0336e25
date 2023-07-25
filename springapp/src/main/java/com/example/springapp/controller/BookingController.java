package com.example.controller;

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
import com.example.springapp.repository.BookingRepo;


@RestController
@RequestMapping("/booking")
public class BookingController {
	
	
	@Autowired
	BookingRepo bookrepo;
	
	@GetMapping("/booking")
	 List<Booking> getBookingAll(){
		return bookrepo.findAll();
	}
	@PostMapping("/booking")
	 Booking create(@RequestBody Booking booking) {
		 return bookrepo.save(booking);
	 }
	 @GetMapping("/booking/{id}")
	 Booking getBookingById(@PathVariable("id") Long id) {
		 return bookrepo.getById(id);
	 }
	
	 @PutMapping("/booking/{id}")
	 Booking update(@PathVariable("id") Long id,@RequestBody Booking booking) {
		 return bookrepo.updateBooking(id,booking);
		 
	 }
	 @DeleteMapping("/booking/{id}")
	 void deleteBooking(@PathVariable("id") Integer id) {
		 Booking booking=bookrepo.findById(id);
		 if(booking!=null) {
			 bookrepo.deleteById(id);
		 }
	 }

}
