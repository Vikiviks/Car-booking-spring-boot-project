package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.model.BookingModel;
import com.example.car.model.CarModel;
import com.example.car.repository.BookingRepository;

import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin("*")
@RestController

public class BookingController {
	@Autowired
	BookingRepository br;
	 @Tag(name="GET BOOKING DETAILS",description="View booking details")
	@GetMapping("/getbooking")
	public List<BookingModel>getAllDetails(){
		return br.findAll();
	}
	 @Tag(name="ADD BOOKING DETAILS",description="Add booking details")
	@PostMapping("/postbooking")
	public BookingModel saveAllBooking(@RequestBody BookingModel y)
	{
		return br.save(y);
	}

	@PutMapping("/booking/{id}")
	 public ResponseEntity<BookingModel> updateCar(@PathVariable("id") int id, @RequestBody BookingModel car){
	   BookingModel b = br.findById(id).get();
	      if(b.getBookingid()!=0) {
	        
	        b.setModelname(car.getModelname());
	     
	       
	      }
	  return new ResponseEntity<BookingModel>(br.save(b),HttpStatus.OK);
	}

}
