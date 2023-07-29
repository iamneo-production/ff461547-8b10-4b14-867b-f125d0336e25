package com.example.springapp.service.hotel.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.springapp.dto.hotel.HotelSearchRequestDto;
import com.example.springapp.dto.hotel.HotelSearchResponseDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookRequestDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookedDto;
import com.example.springapp.dto.hotel.bookhotel.RoomDto;
import com.example.springapp.model.booking.Booking;
import com.example.springapp.model.customer.Customer;
import com.example.springapp.model.hotel.BookedHotel;
import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.model.hotel.Room;
import com.example.springapp.model.travelagent.TravelAgent;
import com.example.springapp.repository.customer.CustomerRepository;
import com.example.springapp.repository.hotel.BookedHotelRepository;
import com.example.springapp.repository.hotel.HotelRepository;
import com.example.springapp.repository.travelagent.TravelAgentRepository;
import com.example.springapp.service.helper.FileUploadHelper;
import com.example.springapp.service.hotel.HotelService;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private TravelAgentRepository travelAgentRepository;
    @Autowired
    private BookedHotelRepository bookedHotelRepository;
    @Autowired
    private FileUploadHelper fileUploadHelper;

    public HotelServiceImpl() {
        super();

    }

    @Override
    public List<Hotel> getAllHotels() {
        List<Hotel> hotels = hotelRepository.findAll();

        return hotels;
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
                    .filter(hotel -> hotel.getVaccantRoomList().size() >= numOfRooms)
                    .collect(Collectors.toList());

            hotels = hotels.stream()
                    .filter(hotel -> {
                        List<Room> vaccantRoomList = hotel.getVaccantRoomList();
                        int roomFound = 0;
                        for (int index = 0; index < vaccantRoomList.size(); index++) {
                            Room room = vaccantRoomList.get(index);

                            for (int i = 0; i < roomCapacity.size(); i++) {

                                if (roomCapacity.get(i) <= room.getRoomCapacity()) {
                                    roomFound++;

                                    break;

                                }
                            }
                            if (roomFound == roomCapacity.size()) {
                                return true;
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
            hotelSearchResponseDto.setImage(hotel.getFirstImage());
            hotelSearchResponseDtos.add(hotelSearchResponseDto);
        }
        return hotelSearchResponseDtos;
    }

    @Override
    public HotelBookedDto addbooking(long customerId, long hotelId, HotelBookRequestDto hotelBookRequestDto) {

        HotelBookedDto hotelBookedDto = null;
        int numberOfRooms = hotelBookRequestDto.getRooms().size();
        int numberOfAdults = 0;
        int numberOfChilds = 0;
        List<Integer> roomSizes = new ArrayList<>(numberOfRooms);
        for (RoomDto roomDto : hotelBookRequestDto.getRooms()) {
            numberOfAdults += roomDto.getAdult();
            numberOfChilds += roomDto.getChild();
            roomSizes.add(roomDto.getAdult() + roomDto.getChild());
        }

        try {
            Customer customer = customerRepository.findById(customerId).get();
            Hotel hotel = hotelRepository.findById(hotelId).get();
            TravelAgent travelAgent = null;

            if (hotelBookRequestDto.getTravelAgent() > 0
                    && travelAgentRepository.existsById(hotelBookRequestDto.getTravelAgent())) {
                travelAgent = travelAgentRepository.findById(hotelBookRequestDto.getTravelAgent()).get();
            }
            List<Room> selectedRooms = roomSelector(roomSizes, new ArrayList<>(hotel.getVaccantRoomList()));

            Booking booking = new Booking();
            booking.setBookingType("hotel");
            booking.setCustomer(customer);
            booking.setTravelAgent(travelAgent);
            booking.setBookingDateTime(LocalDateTime.now());
            booking.setVerficationDocType(hotelBookRequestDto.getIdType());
            booking.setVerificationNumber(hotelBookRequestDto.getIdNumber());
            booking.setGuestName(hotelBookRequestDto.getName());

            BookedHotel bookedHotel = new BookedHotel();
            bookedHotel.setHotel(hotel);
            bookedHotel.setCheckInDate(hotelBookRequestDto.getCheckInDate());
            bookedHotel.setCheckOutDate(hotelBookRequestDto.getCheckOutDate());
            bookedHotel.setNumOfRoomsBooked(numberOfRooms);
            bookedHotel.setNumOfAdults(numberOfAdults);
            bookedHotel.setNumOfChilds(numberOfChilds);
            bookedHotel.setTotalAmount(hotel.getPricePerDay() * selectedRooms.size());
            bookedHotel.getRoomList().addAll(selectedRooms);
            bookedHotel.setBooking(booking);
            selectedRooms.stream().forEach(room -> {
                room.setRoomStatus("booked");
                room.setBookedHotel(bookedHotel);
            });

            BookedHotel bookedHotel2 = bookedHotelRepository.save(bookedHotel);

            hotelBookedDto = new HotelBookedDto();
            hotelBookedDto.setBooked(true);
            hotelBookedDto.setBookingId(bookedHotel2.getBooking().getBookingId());
            hotelBookedDto.setBookingStatus(bookedHotel2.getBooking().getBookingStatus());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return hotelBookedDto;
    }

    private List<Room> roomSelector(List<Integer> roomSizes, List<Room> vaccantRoomList) {

        List<Room> selectedRooms = new ArrayList<>();
        for (int roomSize : roomSizes) {
            int start = 0;
            int end = vaccantRoomList.size() - 1;
            boolean found = false;
            while (start <= end) {
                int mid = (start + end) / 2;
                if (roomSize == vaccantRoomList.get(mid).getRoomCapacity()) {
                    selectedRooms.add(vaccantRoomList.get(mid));
                    found = true;
                    break;
                } else if (roomSize > vaccantRoomList.get(mid).getRoomCapacity()) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            if (!found) {
                selectedRooms.add(vaccantRoomList.get(start));
                vaccantRoomList.remove(start);
            }
        }
        return selectedRooms;
    }

    @Override
    public boolean uploadImage(MultipartFile image, long hotelId) {
        boolean status = false;
        try {
            Hotel hotel = hotelRepository.findById(hotelId).get();
            StringBuffer fileName = new StringBuffer("");
            fileName.append(hotel.getHotelId());
            fileName.append(image.getOriginalFilename());
            boolean uploaded = fileUploadHelper.uploadHotelImage(image, fileName.toString());
            if (uploaded) {
                String path = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/hotels/")
                        .path(fileName.toString()).toUriString();
                if (hotel.getFirstImage() == null) {
                    hotel.setFirstImage(path);
                } else {
                    hotel.setSecondImage(path);
                }
                hotelRepository.save(hotel);
                status = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

}
