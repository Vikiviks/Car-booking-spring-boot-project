package com.example.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.car.model.CarOneModel;
@Repository
public interface CarOneRepository extends JpaRepository<CarOneModel,Integer> {

}
