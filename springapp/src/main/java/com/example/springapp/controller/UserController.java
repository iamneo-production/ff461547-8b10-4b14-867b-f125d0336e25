package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.repository.UserRepo;
import com.example.springapp.model.User;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserRepo userrepo;
	@GetMapping("/users")
	 List<User> getUserAll(){
		return userrepo.findAll();
	}
	@PostMapping("/users")
	 User create(@RequestBody User user) {
		 return userrepo.save(user);
	 }
	@GetMapping("/users/{id}")
	 User getUserById(@PathVariable("id") Long id) {
		 return userrepo.getById(id);
	 }
	@PutMapping("/users/{id}")
	 User update(@PathVariable("id")  Long id,@RequestBody User user) {
		 return userrepo.updateUser(id,user);
		 
	 }
     @DeleteMapping("/users/{id}")
     void deleteUser(@PathVariable("id") Long id) {
         userrepo.deleteById(id);
     }
     

}
