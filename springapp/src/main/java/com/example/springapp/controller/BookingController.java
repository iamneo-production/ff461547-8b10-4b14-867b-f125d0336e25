package com.example.springapp.controller;

import java.util.List;
import java.util.Map;

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

import com.example.springapp.dto.booking.BookingDto;
import com.example.springapp.dto.booking.hotel.BookedHotelDetailsDto;
import com.example.springapp.dto.error.ErrorJsonDto;
import com.example.springapp.service.booking.BookingService;
import com.razorpay.Order;

@CrossOrigin
@RestController
public class BookingController {

        @Autowired
        BookingService bookingService;

        @GetMapping("/booking/bookingId")
        public ResponseEntity<?> getBooking(@RequestParam("bookingId") long bookingId) {
                BookingDto bookingDto = bookingService.getBooking(bookingId);
                return bookingDto == null
                                ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                                .body(new ErrorJsonDto("Something went wrong", 500))
                                : ResponseEntity.status(HttpStatus.OK).body(bookingDto);
        }

        @GetMapping("/booking/hotel/bookingId")
        public ResponseEntity<?> getHotelBooking(@RequestParam("bookingId") long bookingId) {
                BookedHotelDetailsDto response = bookingService.getHotelBooking(bookingId);
                return response == null
                                ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                                .body(new ErrorJsonDto("Something went wrong", 500))
                                : ResponseEntity.status(HttpStatus.OK).body(response);
        }

        @GetMapping("/booking/hotel/customerId")
        public ResponseEntity<?> getAllHotelBooking(@RequestParam("customerId") long customerId) {
                List<BookedHotelDetailsDto> response = bookingService.getAllHotelBooking(customerId);
                return response == null
                                ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                                .body(new ErrorJsonDto("Something went wrong", 500))
                                : ResponseEntity.status(HttpStatus.OK).body(response);
        }

        @DeleteMapping("/booking/hotel/bookingId")
        public ResponseEntity<?> discardHotelBooking(@RequestParam("bookingId") long bookingId) {
                boolean status = bookingService.deleteHotelBooking(bookingId);

                return !status ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body(new ErrorJsonDto("Deletion Failed Due to some unknown issue", 500))
                                : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }

        @PostMapping("/booking/payment/bookingId")
        public ResponseEntity<?> getRazorPayOrder(@RequestBody Map<String, Object> data) {
                Order order = bookingService.createOrder(data);
                System.out.println(order);
                return order != null ? ResponseEntity.status(HttpStatus.CREATED).body(order.toString())
                                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                                .body(new ErrorJsonDto("Order creation aborted with unknown reason",
                                                                500));
}

        @PostMapping("/booking/register-payment/bookingId")
        public ResponseEntity<?> registerPayment(@RequestBody Map<String, Object> data,
                        @RequestParam("bookingId") long bookingId) {
                                
                boolean status = bookingService.registerPayment(data, bookingId);

                return !status ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body(new ErrorJsonDto("Something went wrong, Payment failed to register", 500))
                                : ResponseEntity.status(HttpStatus.ACCEPTED).body("Payement registered sucessfully");
        }
}
