package com.example.springapp.dto.error;

public class ErrorJsonDto {
    private String message;
    private int status;
    public ErrorJsonDto() {
        super();
    }
    
    public ErrorJsonDto(String message, int status) {
        super();
        this.message = message;
        this.status = status;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }

}
