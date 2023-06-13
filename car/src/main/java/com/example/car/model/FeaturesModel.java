package com.example.car.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FeaturesModel {
	@Id
	private int fid;
	private String interior;
	private String mode;
	private String milage;
	private String special;
	public FeaturesModel() {}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getInterior() {
		return interior;
	}
	public void setInterior(String interior) {
		this.interior = interior;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public String getMilage() {
		return milage;
	}
	public void setMilage(String milage) {
		this.milage = milage;
	}
	public String getSpecial() {
		return special;
	}
	public void setSpecial(String special) {
		this.special = special;
	}
	

}
