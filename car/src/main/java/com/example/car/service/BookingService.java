package com.example.car.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository br;

}
