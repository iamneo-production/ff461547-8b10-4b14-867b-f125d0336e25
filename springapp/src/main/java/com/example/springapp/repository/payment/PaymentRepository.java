package com.example.springapp.repository.payment;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.payment.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    
    public Payment findByTransactionId(String transactionId);
}
