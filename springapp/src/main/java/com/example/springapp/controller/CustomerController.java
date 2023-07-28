
package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

import com.example.springapp.exception.UserNotFoundException;
import com.example.springapp.model.customer.Customer;
import com.example.springapp.repository.customer.CustomerRepository;


import java.util.List;
import java.util.function.Function;

@RestController
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/customers")
    Customer newCustomer(@RequestBody Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }

    @GetMapping("/customer_data")
    List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/customers/{customerId}")
    Customer getCustomerById(@PathVariable Long customerId) {
    Optional<Customer> customerOptional = customerRepository.findById(customerId);
    return customerOptional.orElseThrow(() -> new UserNotFoundException(customerId));
}


    @PutMapping("/customers/{customerId}")
    Customer updateCustomer(@RequestBody Customer newCustomer, @PathVariable Long customerId) {
        return customerRepository.findById(customerId)
                .map(customer -> {
                    customer.setFirstName(newCustomer.getFirstName());
                    customer.setLastName(newCustomer.getLastName());
                    customer.setEmail(newCustomer.getEmail());
                    customer.setPhone(newCustomer.getPhone());
                    customer.setAddress(newCustomer.getAddress());
                    return customerRepository.save(customer);
                }).orElseThrow(() -> new UserNotFoundException(customerId));
    }

}
