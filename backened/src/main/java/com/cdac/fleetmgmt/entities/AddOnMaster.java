package com.cdac.fleetmgmt.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class AddOnMaster 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    public long addOnId;
	public String addOnName;
	public double addOnRate;
	public Date rateValidity;
	public long carId;
	
	public long getAddOnId() {
		return addOnId;
	}

	public void setAddOnId(long addOnId) {
		this.addOnId = addOnId;
	}

	public String getAddOnName() {
		return addOnName;
	}

	public void setAddOnName(String addOnName) {
		this.addOnName = addOnName;
	}

	public double getAddOnRate() {
		return addOnRate;
	}

	public void setAddOnRate(double addOnRate) {
		this.addOnRate = addOnRate;
	}

	public Date getRateValidity() {
		return rateValidity;
	}

	public void setRateValidity(Date rateValidity) {
		this.rateValidity = rateValidity;
	}

	public long getCarId() {
		return carId;
	}

	public void setCarId(long carId) {
		this.carId = carId;
	}

	@Override
	public String toString() {
		return "AddOnMaster [addOnId=" + addOnId + ", addOnName=" + addOnName + ", addOnRate=" + addOnRate
				+ ", rateValidity=" + rateValidity + ", carId=" + carId + "]";
	}

	

}
