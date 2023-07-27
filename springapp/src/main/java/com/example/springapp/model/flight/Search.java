package com.example.springapp.model.flight;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="flights")
public class Search {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long flightid;
    private String flight_name;
    private String departure;
    private String arrival;
    private LocalTime dept_time;
    private LocalTime arr_time;
    private LocalDate dept_date;
    private Double price;
    private String duration;

    public Long getFlightid() {
        return flightid;
    }

    public void setFlightid(Long flightid) {
        this.flightid = flightid;
    }

    public String getFlight_name() {
        return flight_name;
    }

    public void setFlight_name(String flight_name) {
        this.flight_name = flight_name;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public LocalDate getDept_date() {
        return dept_date;
    }

    public void setDept_date(LocalDate dept_date) {
        this.dept_date = dept_date;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalTime getDept_time() {
        return dept_time;
    }

    public void setDept_time(LocalTime dept_time) {
        this.dept_time = dept_time;
    }

    public LocalTime getArr_time() {
        return arr_time;
    }

    public void setArr_time(LocalTime arr_time) {
        this.arr_time = arr_time;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Search(Long flightid, String flight_name, String departure, String arrival,
                  LocalDate dept_date, Double price, LocalTime dept_time, LocalTime arr_time, String duration) {
        this.flightid = flightid;
        this.flight_name = flight_name;
        this.departure = departure;
        this.arrival = arrival;
        this.dept_date = dept_date;
        this.price = price;
        this.dept_time = dept_time;
        this.arr_time = arr_time;
        this.duration = duration;
    }

    public Search() {

    }

    @Override
    public String toString() {
        return "Search{" +
                "flightid=" + flightid +
                ", flight_name='" + flight_name + '\'' +
                ", departure='" + departure + '\'' +
                ", arrival='" + arrival + '\'' +
                ", dept_time=" + dept_time +
                ", arr_time=" + arr_time +
                ", dept_date=" + dept_date +
                ", price=" + price +
                ", duration='" + duration + '\'' +
                '}';
    }
}

