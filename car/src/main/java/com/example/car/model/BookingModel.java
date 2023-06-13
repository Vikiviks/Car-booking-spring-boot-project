package com.example.car.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BookingModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bookingid;
	private String bookingname;
	private String modelname;
	private String aadharno;
	private String drivinglicenseno;
	private String address;
	BookingModel(){}
	
	public BookingModel(int bookingid, String bookingname, String modelname, String aadharno, String drivinglicenseno,
			String address) {
		this.bookingid = bookingid;
		this.bookingname = bookingname;
		this.modelname = modelname;
		this.aadharno = aadharno;
		this.drivinglicenseno = drivinglicenseno;
		this.address = address;
	}
	

	@Override
	public String toString() {
		return "BookingModel [bookingid=" + bookingid + ", bookingname=" + bookingname + ", modelname=" + modelname
				+ ", aadharno=" + aadharno + ", drivinglicenseno=" + drivinglicenseno + ", address=" + address + "]";
	}

	public int getBookingid() {
		return bookingid;
	}
	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}
	public String getBookingname() {
		return bookingname;
	}
	public void setBookingname(String bookingname) {
		this.bookingname = bookingname;
	}
	public String getModelname() {
		return modelname;
	}
	public void setModelname(String modelname) {
		this.modelname = modelname;
	}
	public String getAadharno() {
		return aadharno;
	}
	public void setAadharno(String aadharno) {
		this.aadharno = aadharno;
	}
	public String getDrivinglicenseno() {
		return drivinglicenseno;
	}
	public void setDrivinglicenseno(String drivinglicenseno) {
		this.drivinglicenseno = drivinglicenseno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	

}
