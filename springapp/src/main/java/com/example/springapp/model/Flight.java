package com.example.springapp.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flight {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long flightNumber;
	private String arline;
	private String origin;
	private String destination;
	private Date departureDate;
	private Date arrivalDate;
	private Long price;
	public Flight() {}
	public Long getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(Long flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getArline() {
		return arline;
	}
	public void setArline(String arline) {
		this.arline = arline;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Date getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(Date departureDate) {
		this.departureDate = departureDate;
	}
	public Date getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Flight [flightNumber=" + flightNumber + ", arline=" + arline + ", origin=" + origin + ", destination="
				+ destination + ", departureDate=" + departureDate + ", arrivalDate=" + arrivalDate + ", price=" + price
				+ "]";
	}

}
