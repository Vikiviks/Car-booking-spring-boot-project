package com.example.car.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.car.model.UserModel;
import com.example.car.dto.LoginDTO;
import com.example.car.dto.UserDTO;
import com.example.car.repository.UserRepository;
import com.example.car.response.LoginMesage;
import com.example.car.service.UserService;
@Service
public class UserIMPL implements UserService{
     @Autowired
     UserRepository ur;
    
     @Override
     public String addUser(UserDTO userDTO) {
  
         UserModel user = new UserModel(
  
                 userDTO.getUserid(),
                 userDTO.getUsername(),
                 userDTO.getEmail(),
                 userDTO.getMobileno(),
                 userDTO.getPassword(),
                 userDTO.getAge()
  
         );
         ur.save(user);
  
         return user.getUsername();
     }
     @Override
     public LoginMesage  loginUser(LoginDTO loginDTO) {
         
         UserModel user1 = ur.findByUsername(loginDTO.getUsername());
         if (user1 != null) {
             String password = loginDTO.getPassword();
     
             if (password.equals(password)) {
                 Optional<UserModel> user = ur.findOneByUsernameAndPassword(loginDTO.getUsername(), password);
                 if (user.isPresent()) {
                     return new LoginMesage("Login Success", true);
                 } else {
                     return new LoginMesage("Login Failed", false);
                 }
             } else {
  
                 return new LoginMesage("password Not Match", false);
             }
         }else {
             return new LoginMesage("Username not exits", false);
         }
  
  
     }
}
