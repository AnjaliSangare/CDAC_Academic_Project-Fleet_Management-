package com.cdac.fleetmgmt.dto;

public class UserLoginDTO {
	
	public String email;
	public String password;
	
	public String getUsername() {
		return email;
	}
	public void setUsername(String username) {
		this.email = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserLoginDTO [username=" + email + ", password=" + password + "]";
	}
	
}
