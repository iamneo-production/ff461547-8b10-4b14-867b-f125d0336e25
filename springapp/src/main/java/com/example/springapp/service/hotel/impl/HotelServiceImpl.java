package com.example.springapp.service.hotel.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.dto.hotel.HotelSearchRequestDto;
import com.example.springapp.dto.hotel.HotelSearchResponseDto;
import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.model.hotel.Room;
import com.example.springapp.repository.hotel.HotelRepository;
import com.example.springapp.service.hotel.HotelService;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public HotelServiceImpl() {
        super();

    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel getHotelByHotelId(long hotelId) {
        Hotel hotel = null;
        try {
            hotel = hotelRepository.findById(hotelId).get();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hotel;
    }

    @Override
    public Hotel addHotel(Hotel hotel) {
        Hotel createdHotel = null;
        try {
            createdHotel = hotelRepository.save(hotel);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return createdHotel;
    }

    @Override
    public boolean deleteHotel(long hotelId) {
        boolean status = false;
        try {
            hotelRepository.deleteById(hotelId);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public List<HotelSearchResponseDto> searcHoteLs(HotelSearchRequestDto searchRequest) {
        String country = searchRequest.getCountry();
        String city = searchRequest.getCity();
        int numOfRooms = searchRequest.getNumOfRooms();
        List<Integer> roomCapacity = searchRequest.getRoomCapacity();
        List<HotelSearchResponseDto> searchResult = null;
        try {

            List<Hotel> hotels = hotelRepository.findHotelsByCountryAndCity(country, city);

            hotels = hotels.stream()
                    .filter(hotel -> hotel.getAvailableRooms() >= numOfRooms)
                    .collect(Collectors.toList());

            hotels = hotels.stream()
                    .filter(hotel -> {
                        for (Room room : hotel.getVaccantRoomList()) {
                            for (int i = 0; i < roomCapacity.size(); i++) {
                                if (roomCapacity.get(i) <= room.getRoomCapacity()) {
                                    roomCapacity.remove(i);
                                    hotel.getVaccantRoomList().remove(room);
                                    return true;
                                }
                            }
                        }
                        return false;
                    }).collect(Collectors.toList());

            searchResult = searcHotelsHelper(hotels);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return searchResult;
    }

    private List<HotelSearchResponseDto> searcHotelsHelper(List<Hotel> hotels) {
        List<HotelSearchResponseDto> hotelSearchResponseDtos = new ArrayList<>();
        for (Hotel hotel : hotels) {
            HotelSearchResponseDto hotelSearchResponseDto = new HotelSearchResponseDto();
            hotelSearchResponseDto.setHotelId(hotel.getHotelId());
            hotelSearchResponseDto.setHotelName(hotel.getHotelName());
            hotelSearchResponseDto.setCountry(hotel.getCountry());
            hotelSearchResponseDto.setCity(hotel.getCity());
            hotelSearchResponseDto.setPricePerDay(hotel.getPricePerDay());
            hotelSearchResponseDto.setRating(hotel.getRating());
            hotelSearchResponseDto.setNumOfRating(hotel.getNumOfRating());
            hotelSearchResponseDtos.add(hotelSearchResponseDto);
        }
        return hotelSearchResponseDtos;
    }

}