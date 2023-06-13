package com.example.car;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition
(info =@Info(
title = "CarVault",
version = "1.1.2",
description = "A Car Booking Project",
contact = @Contact(
		name = "Vignesh",
		email = "krvignesh2103@gmail.com"
		)
)
)
@SpringBootApplication
public class CarApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarApplication.class, args);
	}

}
