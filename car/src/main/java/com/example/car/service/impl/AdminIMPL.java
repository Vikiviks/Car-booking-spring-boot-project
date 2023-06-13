package com.example.car.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car.dto.AdminDTO;
import com.example.car.dto.AdminLoginDTO;
import com.example.car.model.AdminModel;
import com.example.car.repository.AdminRepository;
import com.example.car.response.AdminLoginMessage;
import com.example.car.service.AdminService;

@Service
public class AdminIMPL implements AdminService {
	@Autowired
	AdminRepository ar;

	@Override
	public String addAdmin(AdminDTO adminDTO) {
		  AdminModel admin = new AdminModel(
				  
	                 adminDTO.getAdminid(),
	                 adminDTO.getAdminname(),
	                 adminDTO.getEmail(),
	                 adminDTO.getMobileno(),
	                 adminDTO.getPassword(),
	                 adminDTO.getMajorstream(),
	                 adminDTO.getTechnicalskills(),
	                 adminDTO.getExperience(),
	                 adminDTO.getLinkedin()
	  
	         );
	         ar.save(admin);
	  
	         return admin.getAdminname();
	}

	@Override
	public AdminLoginMessage loginAdmin(AdminLoginDTO adminloginDTO) {
		AdminModel user1 = ar.findByAdminname(adminloginDTO.getAdminname());
        if (user1 != null) {
            String password = adminloginDTO.getPassword();
    
            if (password.equals(password)) {
                Optional<AdminModel> user = ar.findOneByAdminnameAndPassword(adminloginDTO.getAdminname(), password);
                if (user.isPresent()) {
                    return new AdminLoginMessage("Login Success", true);
                } else {
                    return new AdminLoginMessage("Login Failed", false);
                }
            } else {
 
                return new AdminLoginMessage("password Not Match", false);
            }
        }else {
            return new AdminLoginMessage("Adminname not exits", false);
        }
		
	}

	

}
