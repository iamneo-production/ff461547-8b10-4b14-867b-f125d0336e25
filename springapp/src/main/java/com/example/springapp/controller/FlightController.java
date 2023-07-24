package com.example.springapp.controller;
import com.example.springapp.model.flight.Search;
import com.example.springapp.model.ContactDetails;
import com.example.springapp.model.PassengerDetails;
import com.example.springapp.repository.flight.SearchRepository;
import com.example.springapp.repository.ContactRepository;
import com.example.springapp.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class FlightController {

    @Autowired
    SearchRepository searchRepository;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    PassengerRepository passengerRepository;

    @GetMapping("/flights/search")
    public List<Search>getAllFlights(){
        return searchRepository.findAll();
    }
    @PostMapping("/flights")
    public String createNewSearch(@RequestBody Search search) {
        searchRepository.save(search);
        return "Oneway created.";
    }

    @CrossOrigin
    @GetMapping("/flights")
    public ResponseEntity<List<Search>> getAllEmployees() {
        List<Search> searchList = new ArrayList<>();
        searchRepository.findAll().forEach(searchList::add);
        return new ResponseEntity<List<Search>>(searchList, HttpStatus.OK);
    }

    @PostMapping("/details")
    public ResponseEntity<String> createPassengerDetails(@RequestBody PassengerDetails passengerDetails) {
        try {
            passengerRepository.save(passengerDetails);
            return ResponseEntity.ok("Data created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error storing data");
        }
    }

    @PostMapping("/contacts")
    public ResponseEntity<String> createContactDetails(@RequestBody ContactDetails contactDetails) {
        try {
            contactRepository.save(contactDetails);
            return ResponseEntity.ok("Data created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error storing data");
        }
    }
}

