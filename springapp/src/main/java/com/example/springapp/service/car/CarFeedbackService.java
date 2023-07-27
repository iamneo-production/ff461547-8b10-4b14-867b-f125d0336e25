package com.example.springapp.service.car;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.car.CarFeedback;
import com.example.springapp.repository.car.CarFeedbackRepository;

@Service
public class CarFeedbackService {

    private final CarFeedbackRepository carFeedbackRepository;

    @Autowired
    public CarFeedbackService(CarFeedbackRepository carFeedbackRepository) {
        this.carFeedbackRepository = carFeedbackRepository;
    }

    public CarFeedback saveCarFeedback(CarFeedback carFeedback) {
        return carFeedbackRepository.save(carFeedback);
    }

    public Optional<CarFeedback> getFeedbackById(Long id) {
        return carFeedbackRepository.findById(id);
    }

}
