package com.example.springapp.model.car;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CarBookingForm {

    @Id
    private String booking_id;
    private String fname;
    private String lname;
    private String emailid;
    private Long phone_no;
    private String pick_up_address;
    private String drop_off_address;
    private String pick_up_time;
    private Date pick_up_date;
    private Date drop_off_date;
    
    public String getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(String booking_id) {
		this.booking_id = booking_id;
	}

    public Long getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(Long phone_no) {
        this.phone_no = phone_no;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPick_up_address() {
        return pick_up_address;
    }

    public void setPick_up_address(String pick_up_address) {
        this.pick_up_address = pick_up_address;
    }

    public String getDrop_off_address() {
        return drop_off_address;
    }

    public void setDrop_off_address(String drop_off_address) {
        this.drop_off_address = drop_off_address;
    }

    public String getPick_up_time() {
        return pick_up_time;
    }

    public void setPick_up_time(String pick_up_time) {
        this.pick_up_time = pick_up_time;
    }

    public Date getPick_up_date() {
        return pick_up_date;
    }

    public void setPick_up_date(Date pick_up_date) {
        this.pick_up_date = convertToSqlDate(pick_up_date);
    }

    public Date getDrop_off_date() {
        return drop_off_date;
    }

    public void setDrop_off_date(Date drop_off_date) {
        this.drop_off_date = convertToSqlDate(drop_off_date);
    }

    // Helper method to convert java.util.Date to java.sql.Date without time
    private Date convertToSqlDate(Date date) {
        if (date == null) {
            return null;
        }
        return new Date(date.getTime());
    }
}

