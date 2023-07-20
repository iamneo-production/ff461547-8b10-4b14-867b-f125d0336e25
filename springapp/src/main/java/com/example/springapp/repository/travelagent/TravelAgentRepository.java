package com.example.springapp.repository.travelagent;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.travelagent.TravelAgent;

public interface TravelAgentRepository extends JpaRepository<TravelAgent, Long> {
    
}
