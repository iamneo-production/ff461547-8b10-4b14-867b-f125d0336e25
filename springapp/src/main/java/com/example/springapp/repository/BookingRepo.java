package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Booking;

public interface BookingRepo extends JpaRepository<Booking,Long>{

	Booking updateBooking(Long id, Booking booking);

	void deleteById(Integer id);

	Booking findById(Integer id);

	List<Booking> findAll();

	Booking save(Booking booking);

	
	

}
