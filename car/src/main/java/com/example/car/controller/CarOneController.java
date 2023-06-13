package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.model.CarModel;
import com.example.car.model.CarOneModel;
import com.example.car.repository.CarOneRepository;
import com.example.car.service.CarOneService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class CarOneController {
	@Autowired
	CarOneService cos;
	@Autowired
	CarOneRepository cor;
	 @Tag(name="GET CAR DETAILS",description="one to one method")
	@GetMapping("/getcars")
	public List<CarOneModel>getAllDetail(){
		return cor.findAll();
	}
	 @Tag(name="POST CAR DETAILS",description="one to one method")
	@PostMapping("/postcars")
	public CarOneModel saveAll(@RequestBody CarOneModel x)
	{
		return cor.save(x);
	}
	 @Tag(name="DELETE CAR DETAILS",description="one to one method")
	@DeleteMapping("/crudcars/{id}")
	public String deleteById(@PathVariable int id)
	{
		cor.deleteById(id);
		return "Id details deleted";
	}
	 @Tag(name="EDIT CAR DETAILS",description="one to one method")
	@PutMapping("/putcars")
	public CarOneModel putDetailsById(@RequestBody CarOneModel s)
	
	{
		return cor.save(s);
	}
	

}
