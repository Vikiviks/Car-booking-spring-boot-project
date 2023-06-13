package com.example.car.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.car.model.CarModel;

@Repository 
public interface CarRepository extends JpaRepository <CarModel,Integer> {
	//positional parameters(JPQL)
	@Query("select s from CarModel s where s.modelname=?1 and s.fuel=?2")
	 public List<CarModel>getCarsByModelname(String modelname,String fuel);
	//named parameters(JPQL)
	@Query("select s from CarModel s where s.fuel=:fuel")
	public List<CarModel> getCarsByFuel(String fuel);
	//DML
	@Modifying
	@Query("delete from CarModel s where s.modelname=?1")
	public int deleteCarsByModelname(String modelname);
	//update query
	@Modifying
	@Query("update  CarModel s set s.modelname=?1 where s.id=?2")
	public int updateCarsByModelname(String modelname,int id);
	//native
	@Query(value="select * from car_model where id=:id",nativeQuery = true)
	public List<CarModel> getDataId(int id);
	
	
public List<CarModel> findByModelnameStartingWith(String prefix);
public List<CarModel> findByModelnameEndingWith(String suffix);
public List<CarModel> findByModelname(String name);

}
