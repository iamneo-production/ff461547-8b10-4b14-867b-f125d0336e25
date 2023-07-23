package com.example.springapp.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "passengers")

public class PassengerDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long passid;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;
    @Column(name = "pass_type")
    private String pass_type;

    @Column(name = "gender")
    private String gender;


    public long getPassid() {
        return passid;
    }

    public void setPassid(long passid) {
        this.passid = passid;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPass_type() {
        return pass_type;
    }

    public void setPass_type(String pass_type) {
        this.pass_type = pass_type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public PassengerDetails(long passid, String first_name, String last_name, String email,
                            String phone_num, String gender, String pass_type) {
        this.passid = passid;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.pass_type = pass_type;
    }


    public PassengerDetails() {

    }

    @Override
    public String toString() {
        return "PassengerDetails{" +
                "passid=" + passid +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", pass_type='" + pass_type + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
    
}
