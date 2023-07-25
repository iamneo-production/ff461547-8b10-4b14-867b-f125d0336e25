package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.springapp.model.User;

public interface UserRepo extends JpaRepository<User,Long> {

	User updateUser(Long id,User user);

	User save(User user);
	
}
