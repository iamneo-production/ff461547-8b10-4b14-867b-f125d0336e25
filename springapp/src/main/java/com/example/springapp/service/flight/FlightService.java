
package com.example.springapp.service.flight;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.springapp.model.flight.Search;
import com.example.springapp.repository.flight.SearchRepository;

@Service
public class FlightService {

    private final SearchRepository searchRepository;

    public FlightService(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;
    }

    public Search saveFlightFind(Search search) {
        return searchRepository.save(search);
    }

    public List<Search> getAllFlights() {
        return searchRepository.findAll();
    }

    public List<Search> getFlightFindsByCondition(String departure, String arrival , LocalDate dept_date) {
        return searchRepository.findAllByCondition(departure,arrival,dept_date);
    }

    public Optional<Search> getFlightFindById(Long flightid) {
        return searchRepository.findById(flightid);
    }
}
