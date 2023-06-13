package com.example.car.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
@Entity
public class CarOneModel {
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
      @OneToOne(cascade=CascadeType.ALL)
     @JoinColumn(name="fid")
     private FeaturesOneModel fid;
     
    
  
	CarOneModel(){}
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
	public FeaturesOneModel getFid() {
		return fid;
	}
	public void setFid(FeaturesOneModel fid) {
		this.fid = fid;
	}
     
     
}