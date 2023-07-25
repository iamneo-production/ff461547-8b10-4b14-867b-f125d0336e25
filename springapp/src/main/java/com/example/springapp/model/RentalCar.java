package com.example.springapp.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class RentalCar {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long rentalId;
	private String rentalCarCompany;
	private String location;
	private Date pickupDate;
	private Date dropOffDate;
	private Long price;
	public RentalCar() {}
	public Long getRentalId() {
		return rentalId;
	}
	public void setRentalId(Long rentalId) {
		this.rentalId = rentalId;
	}
	public String getRentalCarCompany() {
		return rentalCarCompany;
	}
	public void setRentalCarCompany(String rentalCarCompany) {
		this.rentalCarCompany = rentalCarCompany;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Date getPickupDate() {
		return pickupDate;
	}
	public void setPickupDate(Date pickupDate) {
		this.pickupDate = pickupDate;
	}
	public Date getDropOffDate() {
		return dropOffDate;
	}
	public void setDropOffDate(Date dropOffDate) {
		this.dropOffDate = dropOffDate;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "RentalCar [rentalId=" + rentalId + ", rentalCarCompany=" + rentalCarCompany + ", location=" + location
				+ ", pickupDate=" + pickupDate + ", dropOffDate=" + dropOffDate + ", price=" + price + "]";
	}
	
	
	
	

}
