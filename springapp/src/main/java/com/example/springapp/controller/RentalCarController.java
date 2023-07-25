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

import com.example.springapp.model.RentalCar;
import com.example.springapp.repository.RentalCarRepo;

@RestController
@RequestMapping("/rentalcar")
public class RentalCarController {
	
	@Autowired
	RentalCarRepo rentalcarrepo;
	@GetMapping("/rentalcar")
	 List<RentalCar> getRentalCarAll(){
		return rentalcarrepo.findAll();
	}
	@PostMapping("/rentalcar")
	 RentalCar create(@RequestBody RentalCar rentalcar) {
		 return rentalcarrepo.save(rentalcar);
	 }
	@GetMapping("/rental/{id}")
	 RentalCar getRentalCarById(@PathVariable("id") Long id) {
		 return rentalcarrepo.getById(id);
	 }
	@PutMapping("/hotel/{id}")
	 RentalCar update(@PathVariable("id") Long id,@RequestBody RentalCar rentalcar) {
		 return rentalcarrepo.updateRentalCar(id,rentalcar);
		 
	 }
	@DeleteMapping("/hotel/{id}")
	 void deleteRentalCar(@PathVariable("id") Long id) {
		RentalCar rentalcar=rentalcarrepo.findById(id).get();
		 if(rentalcar!=null) {
			rentalcarrepo.deleteById(id);
		 }
	 }
	

}
