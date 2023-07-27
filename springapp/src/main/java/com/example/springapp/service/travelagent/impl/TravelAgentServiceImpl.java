package com.example.springapp.service.travelagent.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.travelagent.TravelAgent;
import com.example.springapp.model.user.User;
import com.example.springapp.repository.travelagent.TravelAgentRepository;
import com.example.springapp.repository.user.UserRepository;
import com.example.springapp.service.travelagent.TravelAgentService;

@Service
public class TravelAgentServiceImpl implements TravelAgentService{

    @Autowired
    TravelAgentRepository travelAgentRepository;
    
    @Autowired
    UserRepository userRepository;

    @Override
    public List<TravelAgent> getAllTravelAgents() {
        List<TravelAgent> result=null;
        try {
            result=travelAgentRepository.findAll();
        } catch (Exception e) {
           e.printStackTrace();
        }
        return result;
    }

    @Override
    public boolean addTravelAgent(long userId, TravelAgent travelAgent) {
        boolean status=false;
        try {
            User user=userRepository.findById(userId).get();
            travelAgent.setUser(user);
            travelAgentRepository.save(travelAgent);
            status=true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public boolean deleteTravelAgent(long travelAgentId) {
       boolean status=false;
        try {
            TravelAgent travelAgent=travelAgentRepository.findById(travelAgentId).get();
            User user=travelAgent.getUser();
            travelAgent.removeUserRef();
            travelAgentRepository.deleteById(travelAgentId);
            userRepository.delete(user); 
            status=true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }
    
}
