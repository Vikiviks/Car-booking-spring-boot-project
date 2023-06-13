package com.example.car.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.car.model.UserModel;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer> {
	Optional<UserModel> findOneByUsernameAndPassword(String username,String password);
	UserModel findByUsername(String username);
       
}