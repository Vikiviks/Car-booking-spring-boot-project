package com.example.car.dto;

public class AdminDTO {
	private int adminid;
	private String adminname;
	private String mobileno;
	private String email;
	private String password;
	private String majorstream;
	private String technicalskills;
	private String experience;
	private String linkedin;
	public AdminDTO(int adminid, String adminname, String mobileno, String email, String password, String majorstream,
			String technicalskills, String experience, String linkedin) {
		this.adminid = adminid;
		this.adminname = adminname;
		this.mobileno = mobileno;
		this.email = email;
		this.password = password;
		this.majorstream = majorstream;
		this.technicalskills = technicalskills;
		this.experience = experience;
		this.linkedin = linkedin;
	}
	
	public AdminDTO(){}

	public int getAdminid() {
		return adminid;
	}
	public void setAdminid(int adminid) {
		this.adminid = adminid;
	}
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMajorstream() {
		return majorstream;
	}
	public void setMajorstream(String majorstream) {
		this.majorstream = majorstream;
	}
	public String getTechnicalskills() {
		return technicalskills;
	}
	public void setTechnicalskills(String technicalskills) {
		this.technicalskills = technicalskills;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getLinkedin() {
		return linkedin;
	}
	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}
	
}
