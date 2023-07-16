package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.dto.error.ErrorJsonDto;
import com.example.springapp.model.travelagent.TravelAgent;
import com.example.springapp.service.travelagent.TravelAgentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
public class TravelAgentController {
    @Autowired
    TravelAgentService travelAgentService;

    @PostMapping("/travel-agent")
    public ResponseEntity<?> addTravelAgent(@RequestParam("userId") long userId, @RequestBody TravelAgent travelAgent) {
        boolean status = travelAgentService.addTravelAgent(userId,travelAgent);

        return status ? ResponseEntity.status(HttpStatus.CREATED).body("Travel Agent Added Successfully")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ErrorJsonDto("Something went wrong, Please Try again", 500));
    }

    @DeleteMapping("/travel-agent/travelAgentId")
    public ResponseEntity<?> deleteTravelAgent(@RequestParam("travelAgentId") long travelAgentId) {
        boolean status = travelAgentService.deleteTravelAgent(travelAgentId);
        
        return status ? ResponseEntity.status(HttpStatus.CREATED).body("Travel Agent Deleted Successfully")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ErrorJsonDto("Something went wrong, Please Try again", 500));
    }
}
