package com.example.car.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car.repository.CarOneRepository;

@Service
public class CarOneService {
	@Autowired
	CarOneRepository cor;
}
