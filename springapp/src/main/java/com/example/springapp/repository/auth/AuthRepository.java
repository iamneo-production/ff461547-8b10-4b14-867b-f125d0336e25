package com.example.springapp.repository.auth;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.auth.AuthCustomer;

public interface AuthRepository extends JpaRepository<AuthCustomer, Long> {

    AuthCustomer findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);
}