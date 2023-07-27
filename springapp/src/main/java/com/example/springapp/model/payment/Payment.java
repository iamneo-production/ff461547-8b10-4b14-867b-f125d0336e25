package com.example.springapp.model.payment;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long paymentId;

    private long bookingId;

    @Column(unique = true)
    private String transactionId;


    private String amount;
    private String transactionStatus;
    private LocalDateTime transactionDateTime;
    private String orderId;

    public Payment() {
        super();
    }

    public Payment(long bookingId, String transactionId, String amount, String transactionStatus,
            LocalDateTime transactionDateTime, String orderId) {
                super();
        this.bookingId = bookingId;
        this.transactionId = transactionId;
        this.amount = amount;
        this.transactionStatus = transactionStatus;
        this.transactionDateTime = transactionDateTime;
        this.orderId = orderId;
    }

    public long getPaymentId() {
        return paymentId;
    }


    public long getBookingId() {
        return bookingId;
    }


    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
    }

    
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getTransactionStatus() {
        return transactionStatus;
    }

    public void setTransactionStatus(String transactionStatus) {
        this.transactionStatus = transactionStatus;
    }

    public LocalDateTime getTransactionDateTime() {
        return transactionDateTime;
    }

    public void setTransactionDateTime(LocalDateTime transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }

}
