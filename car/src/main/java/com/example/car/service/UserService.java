package com.example.car.service;
import com.example.car.dto.LoginDTO;
import com.example.car.dto.UserDTO;
import com.example.car.response.LoginMesage;

public interface UserService {
      String addUser(UserDTO userDTO);
	LoginMesage loginUser(LoginDTO loginDTO);
}