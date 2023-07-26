package com.example.springapp.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "contacts")

public class ContactDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long contact_id;

    @Column(name = "contact_name")
    private String contact_name;
    @Column(name = "contact_phone")
    private String contact_phone;

    @Column(name = "contact_email")
    private String contact_email;
    @Column(name = "contact_class")
    private String contact_class;

    public long getContact_id() {
        return contact_id;
    }

    public void setContact_id(long contact_id) {
        this.contact_id = contact_id;
    }

    public String getContact_phone() {
        return contact_phone;
    }

    public void setContact_phone(String contact_phone) {
        this.contact_phone = contact_phone;
    }

    public String getContact_email() {
        return contact_email;
    }

    public String getContact_class() {
        return contact_class;
    }

    public void setContact_class(String contact_class) {
        this.contact_class = contact_class;
    }

    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;

    }

    public String getContact_name() {
        return contact_name;
    }

    public void setContact_name(String contact_name) {
        this.contact_name = contact_name;
    }


    public ContactDetails(long contact_id, String contact_phone, String contact_email, String contact_name, String contact_class) {
        this.contact_id = contact_id;
        this.contact_phone = contact_phone;
        this.contact_email = contact_email;
        this.contact_name = contact_name;
        this.contact_class = contact_class;

    }

    public ContactDetails() {

    }

    @Override
    public String toString() {
        return "ContactDetails{" +
                "contact_id=" + contact_id +
                ", contact_name='" + contact_name + '\'' +
                ", contact_phone='" + contact_phone + '\'' +
                ", contact_email='" + contact_email + '\'' +
                ", contact_class='" + contact_class + '\'' +
                '}';
    }

    
}
