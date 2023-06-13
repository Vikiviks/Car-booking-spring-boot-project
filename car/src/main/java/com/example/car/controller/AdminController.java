package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.dto.AdminDTO;
import com.example.car.dto.AdminLoginDTO;
import com.example.car.model.AdminModel;
import com.example.car.repository.AdminRepository;
import com.example.car.response.AdminLoginMessage;
import com.example.car.service.AdminService;

@RestController
@CrossOrigin("*")
public class AdminController {
	 @Autowired
	 AdminService as;
	 @Autowired
	 AdminRepository ar;
	 @GetMapping("/admin")
	 public List<AdminModel>getAllDetails(){
		 return ar.findAll();
	 }
	 
    @PostMapping("/adminsave")
    public String saveAdmin(@RequestBody AdminDTO adminDTO)
    {
   	 String id=as.addAdmin(adminDTO);
   	 return id;
    }
    @PostMapping("/adminlogin")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminLoginDTO adminloginDTO)
    {
   	 AdminLoginMessage adminloginMessage=as.loginAdmin(adminloginDTO);
   	 return ResponseEntity.ok(adminloginMessage);
    }

}
