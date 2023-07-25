package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Hotel;

public interface HotelRepo extends JpaRepository<Hotel,Long>{

	void deleteById(Integer id);

	

	 Hotel findById(Integer id);

	Hotel getById(Integer id);

	Hotel findById1(Integer id);

	Hotel updateHotel(Long id, Hotel hotel);

	
		


}
