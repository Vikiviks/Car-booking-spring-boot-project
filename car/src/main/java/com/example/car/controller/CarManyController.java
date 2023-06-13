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

import com.example.car.model.CarManyModel;
import com.example.car.repository.CarManyRepository;

import com.example.car.service.CarManyService;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
public class CarManyController {
	@Autowired
	CarManyService cms;
	@Autowired
	CarManyRepository cmr;
	 @Tag(name="GET CAR DETAILS",description="one to many method")
	@GetMapping("/getmanycars")
	public List<CarManyModel>getAllDetail(){
		return cmr.findAll();
	}
	 @Tag(name="POST CAR DETAILS",description="one to many method")
	@PostMapping("/postmanycars")
	public CarManyModel saveAll(@RequestBody CarManyModel x)
	{
		return cmr.save(x);
	}
	 @Tag(name="DELETE CAR DETAILS",description="one to many method")
	@DeleteMapping("/crudmanycars/{id}")
	public String deleteById(@PathVariable int id)
	{
		cmr.deleteById(id);
		return "Id details deleted";
	}
	 @Tag(name="UPDATE CAR DETAILS",description="one to many method")
	@PutMapping("/putmanycars")
	public CarManyModel putDetailsById(@RequestBody CarManyModel s)
	
	{
		return cmr.save(s);
	}
	

}
