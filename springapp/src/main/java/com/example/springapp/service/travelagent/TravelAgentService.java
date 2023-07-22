package com.example.springapp.service.travelagent;

import java.util.List;

import com.example.springapp.model.travelagent.TravelAgent;

public interface TravelAgentService {
    
    public List<TravelAgent> getAllTravelAgents();

    public boolean addTravelAgent(long userId, TravelAgent travelAgent);

    public boolean deleteTravelAgent(long travelAgentId);
}
