package com.example.springapp.model.travelagent;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.example.springapp.model.booking.Booking;
import com.example.springapp.model.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TravelAgent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "travel_agent_id")
    private long travelAgentId;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;

    private String phone;

    @OneToMany(mappedBy = "travelAgent", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings=new ArrayList<>();

    public void removeUserRef(){
        this.setUser(null);
    }

    public TravelAgent(){
        super();
    }

    public TravelAgent(User user, String firstName, String lastName, String email, String phone, List<Booking> bookings) {
                super();
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.bookings = bookings;
    }
    
    public long getTravelAgentId() {
        return travelAgentId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
    
}
