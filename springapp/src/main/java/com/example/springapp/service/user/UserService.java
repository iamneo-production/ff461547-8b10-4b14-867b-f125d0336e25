package com.example.springapp.service.user;

import java.util.List;

import com.example.springapp.model.user.User;

public interface UserService {
    public List<User> getALLUsers();
    public User getUserById(long userId);
    public User addUser(User user);
}
