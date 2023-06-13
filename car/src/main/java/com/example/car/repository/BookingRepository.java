package com.example.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.car.model.BookingModel;

@Repository
public interface BookingRepository extends JpaRepository<BookingModel,Integer>{
	

}
