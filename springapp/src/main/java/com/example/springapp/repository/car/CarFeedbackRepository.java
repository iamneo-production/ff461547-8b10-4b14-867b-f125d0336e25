package com.example.springapp.repository.car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.car.CarFeedback;

@Repository
public interface CarFeedbackRepository extends JpaRepository<CarFeedback, Long> {
}
