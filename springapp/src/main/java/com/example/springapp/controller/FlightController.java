package com.example.springapp.controller;
import com.example.springapp.model.flight.Search;
import com.example.springapp.model.ContactDetails;
import com.example.springapp.model.PassengerDetails;
import com.example.springapp.model.flight.FlightFeedback;
import com.example.springapp.repository.flight.SearchRepository;
import com.example.springapp.repository.ContactRepository;
import com.example.springapp.repository.PassengerRepository;
import com.example.springapp.repository.FlightfeedRepository;
import com.example.springapp.service.flight.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class FlightController {

    @Autowired
    SearchRepository searchRepository;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    PassengerRepository passengerRepository;
    @Autowired
	private FlightService flightService;

    @Autowired
    FlightfeedRepository flightfeedRepository;

    @GetMapping("/flights/search")
		public ResponseEntity<?>getFlightsAll(){

			return ResponseEntity.status(HttpStatus.OK).body(flightService.getAllFlights());
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

    @DeleteMapping("/flights/{flightId}")
    public ResponseEntity<String> deleteFlight(@PathVariable Long flightId) {
        try {
            Search search = searchRepository.findById(flightId).orElse(null);
            if (search == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Flight not found");
            }
            searchRepository.delete(search);
            return ResponseEntity.ok("Flight deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting flight");
        }
    }

    @PostMapping("/flightfeed")
    public ResponseEntity<String> createFeedback(@RequestBody FlightFeedback flightFeedback) {
        try {
            flightfeedRepository.save(flightFeedback); 
            return ResponseEntity.ok("Data created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error storing data");
        }
    }
}

