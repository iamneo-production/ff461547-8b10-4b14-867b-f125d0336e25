package com.example.springapp.service.travelagent;

import com.example.springapp.model.travelagent.TravelAgent;

public interface TravelAgentService {
    public boolean addTravelAgent(long userId,TravelAgent travelAgent);
    public boolean deleteTravelAgent(long travelAgentId);
}
