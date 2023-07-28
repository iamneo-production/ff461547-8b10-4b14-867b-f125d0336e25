package com.example.springapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PutMapping;

import com.example.springapp.model.user.User;
import com.example.springapp.service.user.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userServiceImpl;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userServiceImpl.getALLUsers();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @GetMapping("/users/usersId")
    public ResponseEntity<?> getUserByUserId(@RequestParam("userId") long userId) {
        User user = userServiceImpl.getUserById(userId);
        return user == null ? ResponseEntity.status(HttpStatus.NOT_FOUND).body("Try Again")
                : ResponseEntity.status(HttpStatus.FOUND).body(user);
    }

    @PostMapping("/users")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        User createdUser = userServiceImpl.addUser(user);
        return createdUser == null ? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Try Again")
                : ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }


}
