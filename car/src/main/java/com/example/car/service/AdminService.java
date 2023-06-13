package com.example.car.service;

import com.example.car.dto.AdminDTO;
import com.example.car.dto.AdminLoginDTO;

import com.example.car.response.AdminLoginMessage;


public interface AdminService {
	String addAdmin(AdminDTO adminDTO);
	AdminLoginMessage loginAdmin(AdminLoginDTO adminloginDTO);

}
