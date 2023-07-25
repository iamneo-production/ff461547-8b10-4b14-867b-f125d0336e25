package com.example.springapp.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Hotel;
import com.example.springapp.model.Flight;
import com.example.springapp.model.User;
import com.example.springapp.model.RentalCar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long bookingId;
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long usersId;
	private List<Flight> flights;
	private List<Hotel> hotel;
	private List<RentalCar> rentalcars;
	private List<User> users;
	
	public Booking() {}
	public Long getBookingId() {
		return bookingId;
	}
	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}
	public Long getUsersId() {
		return usersId;
	}
	public void setUsersId(Long usersId) {
		this.usersId = usersId;
	}
	public List<Flight> getFlights() {
		return flights;
	}
	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}
	public List<Hotel> getHotel() {
        return hotel;
    }
    
    public void setHotel(List<Hotel> hotel) {
        this.hotel = hotel;
    }
    
	public List<RentalCar> getRentalcars() {
		return rentalcars;
	}
	public void setRentalcars(List<RentalCar> rentalcars) {
		this.rentalcars = rentalcars;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	@Override
public String toString() {
    return "Booking [bookingId=" + bookingId + ", usersId=" + usersId + ", flights=" + flights + ", hotel=" + hotel
            + ", rentalcars=" + rentalcars + ", users=" + users + "]";
}

	
	
	
}
