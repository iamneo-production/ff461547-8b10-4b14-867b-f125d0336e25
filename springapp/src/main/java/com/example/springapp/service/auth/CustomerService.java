package com.example.springapp.service.auth;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.springapp.dto.auth.LoginRequest;
import com.example.springapp.dto.auth.UserChangeRequest;
import com.example.springapp.dto.auth.UserResponse;
import com.example.springapp.model.auth.AuthCustomer;
import com.example.springapp.repository.auth.AuthRepository;

@Service
public class CustomerService {

    @Autowired
    private AuthRepository authRepository;

    public ResponseEntity<?> signup(AuthCustomer customer) {
        if(authRepository.existsByEmail(customer.getEmail())) {
            String errorMessage = "Email already exists";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(authRepository.save(customer), HttpStatus.CREATED);
        }
    }

    public ResponseEntity<?> login(LoginRequest login) {
        if(authRepository.existsByEmail(login.getEmail())) {
            AuthCustomer customer = authRepository.findByEmailAndPassword(login.getEmail(), login.getPassword());
            if(customer != null) {
                return new ResponseEntity<>(customer, HttpStatus.OK);
            } else {
                String errorMessage = "Invalid credentials";
                return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
            }
        } else {
            String errorMessage = "Email does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    public List<UserResponse> getAllUsers() {
        List<AuthCustomer> customers = authRepository.findAll();
        List<UserResponse> userResponses = new ArrayList<>();
        for (AuthCustomer customer : customers) {
            UserResponse userResponse = new UserResponse();
            userResponse.setId(customer.getId());
            userResponse.setName(customer.getName());
            userResponse.setEmail(customer.getEmail());
            userResponse.setPhone(customer.getPhone());
            userResponses.add(userResponse);
        }
        return userResponses;
    }
    public Optional<AuthCustomer> getUserById(Long id) {
        return authRepository.findById(id);
    }

    public ResponseEntity<?> updateUser(AuthCustomer customer) {
        if(authRepository.existsById(customer.getId())) {
            return new ResponseEntity<>(authRepository.save(customer), HttpStatus.OK);
        } else {
            String errorMessage = "User does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> deleteUser(Long id) {
        if (authRepository.existsById(id)) {
            authRepository.deleteById(id);
            String successMessage = "User deleted successfully";
            return new ResponseEntity<>(successMessage, HttpStatus.OK);
        } else {
            String errorMessage = "User does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    public AuthCustomer ChangeUserDetails(UserChangeRequest userChange) {
        AuthCustomer cus = authRepository.findById(userChange.getId())
                .orElseThrow(() -> new RuntimeException("Menu Item not found with id: " + userChange.getId()));
        cus.setName(userChange.getName());
        cus.setPassword(userChange.getPassword());
        cus.setPhone(userChange.getPhone());

        return authRepository.save(cus);
    }
}