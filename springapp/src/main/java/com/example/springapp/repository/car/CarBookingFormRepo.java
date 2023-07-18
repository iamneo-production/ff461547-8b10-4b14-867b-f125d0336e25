package com.example.springapp.repository.car;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.car.CarBookingForm;

public interface CarBookingFormRepo extends JpaRepository<CarBookingForm, String>{

}

