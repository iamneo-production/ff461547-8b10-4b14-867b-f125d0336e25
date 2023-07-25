package com.example.springapp.dto.review;

public class ReviewDto {
    private String type;
    private String comment;
    private float rating;
    private long customerId;
    private long foreignKeyId;

    public ReviewDto() {
        super();
    }

    public ReviewDto(String type, String comment, float rating, long customerId, long foreignKeyId) {
        super();
        this.type = type;
        this.comment = comment;
        this.rating = rating;
        this.customerId = customerId;
        this.foreignKeyId = foreignKeyId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public long getForeignKeyId() {
        return foreignKeyId;
    }

    public void setForeignKeyId(long foreignKeyId) {
        this.foreignKeyId = foreignKeyId;
    }
}
