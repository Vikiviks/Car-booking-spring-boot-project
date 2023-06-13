package com.example.car.model;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity

public class CarManyModel {
    @Id
    private int id;
    private String cost;
    private String modelname;
    private String fuel;
    private String engine;
    @OneToMany(cascade=CascadeType.ALL )
    @JoinColumn
   private List<FeaturesModel> model;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getModelname() {
		return modelname;
	}
	public void setModelname(String modelname) {
		this.modelname = modelname;
	}
	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	public List<FeaturesModel> getModel() {
		return model;
	}
	public void setModel(List<FeaturesModel> model) {
		this.model = model;
	}
 
	CarManyModel(){}
	
    
}
