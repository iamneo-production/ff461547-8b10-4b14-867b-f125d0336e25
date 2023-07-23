package com.example.springapp.repository;

import com.example.springapp.model.ContactDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<ContactDetails,Long> {
}

