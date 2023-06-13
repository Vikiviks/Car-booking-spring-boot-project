package com.example.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.car.model.CarManyModel;
@Repository
public interface CarManyRepository extends JpaRepository<CarManyModel,Integer>{

}
