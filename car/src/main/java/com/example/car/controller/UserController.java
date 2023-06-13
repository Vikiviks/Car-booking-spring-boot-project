package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.dto.LoginDTO;
import com.example.car.dto.UserDTO;
import com.example.car.model.AdminModel;
import com.example.car.model.UserModel;
import com.example.car.repository.UserRepository;
import com.example.car.response.LoginMesage;
import com.example.car.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
@CrossOrigin("*")
@RestController
public class UserController {
	 @Autowired
	 UserService us;
	 @Autowired
	 UserRepository ur;
	 @Tag(name="GET USER DETAILS",description="View User details")
	 @GetMapping("/user")
	 public List<UserModel>getAllDetails(){
		 return ur.findAll();
	 }
	 @Tag(name="POST BOOKING DETAILS",description="post booking details(Signup)")
     @PostMapping("/usersave")
     public String saveUser(@RequestBody UserDTO userDTO)
     {
    	 String id=us.addUser(userDTO);
    	 return id;
     }
	 @Tag(name="POST BOOKING DETAILS",description="post booking details(Login)")
     @PostMapping("/login")
     public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
     {
    	 LoginMesage loginMesage=us.loginUser(loginDTO);
    	 return ResponseEntity.ok(loginMesage);
     }
     
	 

}