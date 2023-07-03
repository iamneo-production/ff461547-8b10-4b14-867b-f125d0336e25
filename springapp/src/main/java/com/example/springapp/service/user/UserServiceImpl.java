package com.example.springapp.service.user;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.user.User;
import com.example.springapp.repository.user.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public UserServiceImpl() {
        super();
    }

    @Override
    public List<User> getALLUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(long userId) {
        User user=null;
        try {
            user=userRepository.findById(userId).get();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        }
        return user;
    }

    @Override
    public User addUser(User user) {
        User createdUser=null;
        try {
            createdUser=userRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return createdUser;
    }
}
