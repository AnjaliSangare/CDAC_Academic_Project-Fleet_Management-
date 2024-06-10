package com.cdac.fleetmgmt.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class MembershipRegistration {
	 
	@Id
 	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public long memRegId;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="customerId", referencedColumnName="customerId")
    public CustomerMaster customerId;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="carTypeId", referencedColumnName="carTypeId")
    public CarTypeMaster carTypeId;
	
    public String password;
    
	public long getMemRegId() {
		return memRegId;
	}
	public void setMemRegId(long memRegId) {
		this.memRegId = memRegId;
	}
	public CustomerMaster getCustomer_id() {
		return customerId;
	}
	public void setCustomer_id(CustomerMaster customerId) {
		this.customerId = customerId;
	}
	public CarTypeMaster getCarTypeId() {
		return carTypeId;
	}
	public void setCarTypeId(CarTypeMaster carTypeId) {
		this.carTypeId = carTypeId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "MembershipRegistration [memRegId=" + memRegId + ", customerId=" + customerId + ", carTypeId="
				+ carTypeId + ", password=" + password + "]";
	}
     
}
