package com.example.springapp.service.car;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.car.CarBookingForm;
import com.example.springapp.repository.car.CarBookingFormRepo;

@Service
public class CarBookingFormService {

    private final CarBookingFormRepo carBookingFormRepo;

    @Autowired
    public CarBookingFormService(CarBookingFormRepo carBookingFormRepo) {
        this.carBookingFormRepo = carBookingFormRepo;
    }

    public CarBookingForm saveCarBookingForm(CarBookingForm carBookingForm) {
        return carBookingFormRepo.save(carBookingForm);
    }
   
    public Optional<CarBookingForm> getBookingFormById(String bookingId) {
        return carBookingFormRepo.findById(bookingId);
    }

    public void deleteBookingFormById(String bookingId) {
        carBookingFormRepo.deleteById(bookingId);
    }
}