package com.example.springapp.service.car;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.springapp.model.car.CarFind;
import com.example.springapp.repository.car.CarFindRepo;

@Service
public class CarFindService {

    private final CarFindRepo carFindRepo;

    public CarFindService(CarFindRepo carFindRepo) {
        this.carFindRepo = carFindRepo;
    }

    public CarFind saveCarFind(CarFind carFind) {
        return carFindRepo.save(carFind);
    }

    public List<CarFind> getAllCarFinds() {
        return carFindRepo.findAll();
    }

    public List<CarFind> getCarFindsByCondition(String location, Integer seat) {
        return CarFindRepo.findAllByCondition(location, seat);
    }

    public Optional<CarFind> getCarFindById(Long carid) {
        return carFindRepo.findById(carid);
    }
}

