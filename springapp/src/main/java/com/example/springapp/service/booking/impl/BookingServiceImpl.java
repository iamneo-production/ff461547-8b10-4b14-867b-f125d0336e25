package com.example.springapp.service.booking.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.example.springapp.dto.booking.BookingDto;
import com.example.springapp.dto.booking.hotel.BookedHotelDetailsDto;
import com.example.springapp.model.booking.Booking;
import com.example.springapp.model.customer.Customer;
import com.example.springapp.model.hotel.BookedHotel;
import com.example.springapp.model.hotel.Hotel;
import com.example.springapp.model.hotel.Room;
import com.example.springapp.model.payment.Payment;
import com.example.springapp.repository.booking.BookingRepository;
import com.example.springapp.repository.customer.CustomerRepository;
import com.example.springapp.repository.hotel.BookedHotelRepository;
import com.example.springapp.repository.payment.PaymentRepository;
import com.example.springapp.service.booking.BookingService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    BookingRepository bookingRepository;
    
    @Autowired
    BookedHotelRepository bookedHotelRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PaymentRepository paymentRepository;
    
    @Autowired
    private Environment environment;

    private String getRazorPayKey() {
        return environment.getProperty("Razorpay.key");
    }

    private String getRazorPayKeySecret() {
        return environment.getProperty("Razorpay.keysecret");
    }

    @Override
    public BookingDto getBooking(long bookingId) {
        BookingDto bookingDto = null;
        try {
            Booking booking = bookingRepository.findById(bookingId).get();
            bookingDto = new BookingDto();
            bookingDto.setBookingId(booking.getBookingId());
            bookingDto.setBookingStatus(booking.getBookingStatus());
            bookingDto.setBookingType(booking.getBookingType());
            bookingDto.setTravelAgent(booking.getTravelAgent());
            bookingDto.setIdType(booking.getVerficationDocType());
            bookingDto.setIdNumber(booking.getVerificationNumber());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return bookingDto;
    }

    @Override
    public BookedHotelDetailsDto getHotelBooking(long bookingId) {
        BookedHotelDetailsDto response = null;
        try {
            Booking booking = bookingRepository.findById(bookingId).get();
            BookedHotel bookedHotel = booking.getBookedHotel();
            Hotel hotel = bookedHotel.getHotel();

            response = new BookedHotelDetailsDto();
            response.setHotelBookingId(bookedHotel.getHotelBookingId());
            response.setHotelName(hotel.getHotelName());
            response.setCountry(hotel.getCountry());
            response.setCity(hotel.getCity());
            response.setCheckInDate(bookedHotel.getCheckInDateTime());
            response.setCheckOutDate(bookedHotel.getCheckOutDate());
            response.setGuestName(booking.getGuestName());
            response.setIdType(booking.getVerficationDocType());
            response.setIdNumber(booking.getVerificationNumber());
            response.setTotalRooms(bookedHotel.getNumOfRoomsBooked());
            response.setTotalTravellers(bookedHotel.getNumOfAdults() + bookedHotel.getNumOfChilds());
            response.setTotalAmount(String.format("%.2f", bookedHotel.getTotalAmount()));
            response.setBookingStatus(booking.getBookingStatus());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    @Override
    public List<BookedHotelDetailsDto> getAllHotelBooking(long customerId) {
        List<BookedHotelDetailsDto> response = null;
        try {
            Customer customer = customerRepository.findById(customerId).get();
            List<Booking> bookings = customer.getBookings();
            response = bookings.stream().map(booking -> {
                BookedHotelDetailsDto dto = new BookedHotelDetailsDto();
                BookedHotel bookedHotel = booking.getBookedHotel();
                Hotel hotel = bookedHotel.getHotel();

                dto = new BookedHotelDetailsDto();
                dto.setHotelBookingId(bookedHotel.getHotelBookingId());
                dto.setHotelName(hotel.getHotelName());
                dto.setCountry(hotel.getCountry());
                dto.setCity(hotel.getCity());
                dto.setCheckInDate(bookedHotel.getCheckInDateTime());
                dto.setCheckOutDate(bookedHotel.getCheckOutDate());
                dto.setGuestName(booking.getGuestName());
                dto.setIdType(booking.getVerficationDocType());
                dto.setIdNumber(booking.getVerificationNumber());
                dto.setTotalRooms(bookedHotel.getNumOfRoomsBooked());
                dto.setTotalTravellers(bookedHotel.getNumOfAdults() + bookedHotel.getNumOfChilds());
                dto.setTotalAmount(String.format("%.2f", bookedHotel.getTotalAmount()));

                return dto;
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    @Override
    public boolean deleteHotelBooking(long bookingId) {
        boolean status = false;
        try {
            Booking booking = bookingRepository.findById(bookingId).get();

            BookedHotel bookedHotel = booking.getBookedHotel();

            bookedHotel.setBooking(null);

            List<Room> rooms = bookedHotel.getRoomList();
            rooms.forEach(room -> {
                room.setBookedHotel(null);
                room.setRoomStatus("vaccant");

            });
            rooms.clear();
            bookingRepository.delete(booking);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public Order createOrder(Map<String, Object> data) {
        double amount = Double.parseDouble(data.get("amount").toString());
        Order order = null;
        try {
            RazorpayClient client = new RazorpayClient(getRazorPayKey(), getRazorPayKeySecret());
            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amount * 100);
            orderRequest.put("currency", "INR");
            orderRequest.put("receipt", "travel.com_rcptid_xyz");

            order = client.orders.create(orderRequest);
        } catch (RazorpayException e) {
            e.printStackTrace();
        }
        return order;
    }

    @Override
    public boolean registerPayment(Map<String, Object> data, long bookingId) {
        boolean status = false;
       try {
         Booking booking = bookingRepository.findById(bookingId).get();
        booking.setBookingStatus("confirmed");
        BookedHotel bookedHotel = booking.getBookedHotel();
        bookingRepository.save(booking);

        Payment payment = new Payment();
        payment.setBookingId(bookingId);
        payment.setOrderId(data.get("orderId").toString());
        payment.setTransactionId(data.get("paymentId").toString());
        payment.setTransactionDateTime(LocalDateTime.now());
        payment.setTransactionStatus(data.get("status").toString());
        payment.setAmount(String.valueOf(bookedHotel.getTotalAmount()));

        paymentRepository.save(payment);

        status = true;
       } catch (Exception e) {
        e.printStackTrace();
       }
        return status;
    }
}
