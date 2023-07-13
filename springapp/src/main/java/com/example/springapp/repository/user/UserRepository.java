package com.example.springapp.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.user.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
