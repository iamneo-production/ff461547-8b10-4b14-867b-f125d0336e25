package com.example.springapp.repository.customer;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.customer.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long>{
    
}
