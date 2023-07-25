package com.example.springapp.dto.hotel.bookhotel;

public class RoomDto {
    private int adult;
    private int child;

    public RoomDto() {
        super();
    }

    public RoomDto(int adult, int child) {
         super();
        this.adult = adult;
        this.child = child;
    }

    public int getAdult() {
        return adult;
    }

    public void setAdult(int adult) {
        this.adult = adult;
    }

    public int getChild() {
        return child;
    }

    public void setChild(int child) {
        this.child = child;
    }
    
}
