package com.example.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.service.car.CarFindService;
import com.example.springapp.model.car.CarFind;


@CrossOrigin
@RestController
public class CarController {
		
	
	//get and post the car details to database ( car details, search)
		@Autowired
		private CarFindService carFindService;

		// Store car details in the car list
		@ResponseBody
		@PostMapping("/findcar")
		public String postCar(@RequestBody CarFind carFind) {
		    carFindService.saveCarFind(carFind);
		    return "created";
		}

		// Display all data in the car list
		@GetMapping("/findcar")
		@ResponseBody
		public List<CarFind> getCars() {
		    return carFindService.getAllCarFinds();
		}

		// Display filtered car list data by location and seat count
		@CrossOrigin
		@GetMapping("/findcar/{location}/{seat}")
		@ResponseBody
		public ResponseEntity<List<CarFind>> getCarsByCondition(@PathVariable String location,
		                                                       @PathVariable Integer seat) {
		    List<CarFind> cars = carFindService.getCarFindsByCondition(location, seat);
		    return ResponseEntity.ok(cars);
		}

		// Display car list data by id
		@CrossOrigin
		@GetMapping("/findcarbyId")
		@ResponseBody
		public Optional<CarFind> getCarById(Long carid) {
		    return carFindService.getCarFindById(carid);
		}}

	
	
