package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Hotel;
import com.example.springapp.model.RentalCar;

public interface RentalCarRepo extends JpaRepository<RentalCar,Long> {

	RentalCar updateRentalCar(Long id, RentalCar rentalcar);

	
}
