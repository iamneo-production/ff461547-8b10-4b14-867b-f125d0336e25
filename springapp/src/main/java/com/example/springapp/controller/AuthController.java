package com.example.springapp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.dto.auth.LoginRequest;
import com.example.springapp.dto.auth.UserChangeRequest;
import com.example.springapp.dto.auth.UserResponse;
import com.example.springapp.model.auth.AuthCustomer;
import com.example.springapp.repository.auth.AuthRepository;
import com.example.springapp.service.auth.CustomerService;

@RestController
@CrossOrigin
public class AuthController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/auth/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> signup(@RequestBody AuthCustomer customer) {
        return customerService.signup(customer);
    }

    @PostMapping("/auth/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> login(@RequestBody LoginRequest login) {
        return customerService.login(login);
    }

    @GetMapping("/auth/users")
    @ResponseStatus(HttpStatus.OK)
    public List<UserResponse> getAllUsers() {
        return customerService.getAllUsers();
    }

    @GetMapping("/api/users")
    public ResponseEntity<?>getUserAll(){

        return ResponseEntity.status(HttpStatus.OK).body(customerService.getAllUsers());
    }


    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updateUser(@RequestBody AuthCustomer customer) {
        return customerService.updateUser(customer);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteUser(@RequestParam Long id) {
        return customerService.deleteUser(id);
    }

    @PutMapping("/auth/user")
    @ResponseStatus(HttpStatus.OK)
    public AuthCustomer changeUser(@RequestBody UserChangeRequest userChange) {
        return customerService.ChangeUserDetails(userChange);

    }

}