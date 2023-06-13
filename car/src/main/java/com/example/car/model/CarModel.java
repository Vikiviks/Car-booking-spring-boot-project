package com.example.car.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
@Entity
public class CarModel {
     @Id
     @Column(nullable=false,unique=true)
     private int id;
     @Column(nullable=false)
     private String modelname;
     @Column(nullable=false)
     private String engine;
     @Column(nullable=false)
     private String fuel;
     @Column(nullable=false)
     private String cost;
     @Column(nullable=false)
     private String image;
     @Column(nullable=false)
     private String horsepower;
     @Column(nullable=false)
     private String mileage;
     
     
 
     
    
  
	public String getHorsepower() {
		return horsepower;
	}
	public void setHorsepower(String horsepower) {
		this.horsepower = horsepower;
	}
	public String getMileage() {
		return mileage;
	}
	public void setMileage(String mileage) {
		this.mileage = mileage;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	CarModel(){}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getModelname() {
		return modelname;
	}
	public void setModelname(String modelname) {
		this.modelname = modelname;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	
     
}