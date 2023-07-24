package com.example.springapp.controller;
import com.example.springapp.model.flight.Search;
import com.example.springapp.repository.flight.SearchRepository;
import com.example.springapp.service.flight.FlightService;
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
}

