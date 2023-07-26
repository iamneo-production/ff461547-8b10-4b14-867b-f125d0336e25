package com.example.springapp.dto.auth;

public class LoginRequest {

    private String email;
    private String password;

    public LoginRequest() {
    }

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getter methods
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    // Setter methods
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
