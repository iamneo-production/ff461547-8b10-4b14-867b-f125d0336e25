package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.dto.error.ErrorJsonDto;
import com.example.springapp.dto.hotel.HotelSearchRequestDto;
import com.example.springapp.dto.hotel.HotelSearchResponseDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookedDto;
import com.example.springapp.dto.hotel.bookhotel.HotelBookRequestDto;
import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.service.hotel.HotelService;

@CrossOrigin
@RestController
public class HotelController {

    @Autowired
    private HotelService hotelServiceImpl;

    @GetMapping("/hotels/search")
    public ResponseEntity<List<Hotel>> getAllHotels() {
        List<Hotel> hotels = hotelServiceImpl.getAllHotels();
        return ResponseEntity.status(HttpStatus.OK).body(hotels);
    }

    @PostMapping("/hotels/search")
    public ResponseEntity<?> searchHotels(@RequestBody HotelSearchRequestDto searchRequest) {
        List<HotelSearchResponseDto> hotels = hotelServiceImpl.searcHoteLs(searchRequest);
        return hotels == null
                ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Search Failed, Something Went Wrong")
                : ResponseEntity.status(HttpStatus.OK).body(hotels);
    }

    @GetMapping("/hotels/hotelId")
    public ResponseEntity<?> getHotelByHotelId(@RequestParam("hotelId") String hotelId) {

        Hotel hotel = hotelServiceImpl.getHotelByHotelId(Long.valueOf(hotelId));
        if (hotel == null) {
            ErrorJsonDto error = new ErrorJsonDto();
            error.setMessage("Hotel does not exist");
            error.setStatus(404);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        return ResponseEntity.status(HttpStatus.OK).body(hotel);
    }

    @PostMapping("/hotels")
    public ResponseEntity<?> addHotel(@RequestBody Hotel hotel) {
        Hotel createdHotel = null;
        createdHotel = hotelServiceImpl.addHotel(hotel);
        return createdHotel == null ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Try Again")
                : ResponseEntity.status(HttpStatus.CREATED).body(createdHotel);

    }

    @PostMapping("/hotels/image")
    public ResponseEntity<?> addHotelImage(@RequestParam("hotelImage") MultipartFile file,
            @RequestParam("hotelId") long hotelId) {

        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Request must contain file");
        } else if (!(file.getContentType().equals("image/jpeg") || file.getContentType().equals("image/png"))) {
            return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                    .body("Only .jpeg and .png file type allowed");
        }

        boolean status = hotelServiceImpl.uploadImage(file, hotelId);

        return status? ResponseEntity.status(HttpStatus.ACCEPTED).body("Image added successfully")
        : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorJsonDto("Image Upload Failed", 500));

    }

    @DeleteMapping("/hotels/hotelId")
    public ResponseEntity<?> deleteHotel(@RequestParam("hotelId") long hotelId) {
        boolean status = false;
        status = hotelServiceImpl.deleteHotel(hotelId);
        return status ? ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted Successfully")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Deletion Failed");
    }

    @PostMapping("/hotels/book-hotel")
    public ResponseEntity<?> bookHotel(@RequestBody HotelBookRequestDto hotelBookRequestDto,
            @RequestParam("customerId") long customerId, @RequestParam("hotelId") long hotelId) {
        HotelBookedDto response = hotelServiceImpl.addbooking(customerId, hotelId, hotelBookRequestDto);

        return response == null
                ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ErrorJsonDto("Hotel Booking initiation failed due to some internal error", 500))
                : ResponseEntity.status(HttpStatus.ACCEPTED).body(response);

    }
}
