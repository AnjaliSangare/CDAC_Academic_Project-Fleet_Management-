package com.cdac.fleetmgmt.entities;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CarMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long carId;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="carTypeId", referencedColumnName="carTypeId")
	public CarTypeMaster carTypeId;
	
	public double carFuelCapacity;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="hubId", referencedColumnName="hubId")
	public HubMaster hubId;
	
	public boolean isAvailable;
	public Date maintenanceDueDate;
	public double carCurrentFuleStatus;
	
	public long getCarId() {
		return carId;
	}
	public void setCarId(long carId) {
		this.carId = carId;
	}
	public CarTypeMaster getCarTypeId() {
		return carTypeId;
	}
	public void setCarTypeId(CarTypeMaster carTypeId) {
		this.carTypeId = carTypeId;
	}
	public double getCarFuelCapacity() {
		return carFuelCapacity;
	}
	public void setCarFuelCapacity(double carFuelCapacity) {
		this.carFuelCapacity = carFuelCapacity;
	}
	public boolean isAvailable() {
		return isAvailable;
	}
	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
	public Date getMaintenanceDueDate() {
		return maintenanceDueDate;
	}
	public void setMaintenanceDueDate(Date maintenanceDueDate) {
		this.maintenanceDueDate = maintenanceDueDate;
	}
	public double getCarCurrentFuleStatus() {
		return carCurrentFuleStatus;
	}
	public void setCarCurrentFuleStatus(double carCurrentFuleStatus) {
		this.carCurrentFuleStatus = carCurrentFuleStatus;
	}
	public HubMaster getHubId() {
		return hubId;
	}
	public void setHubId(HubMaster hubId) {
		this.hubId = hubId;
	}
	
	@Override
	public String toString() {
		return "CarMaster [carId=" + carId + ", carTypeId=" + carTypeId + ", carFuelCapacity=" + carFuelCapacity
				+ ", hubId=" + hubId + ", isAvailable=" + isAvailable + ", maintenanceDueDate=" + maintenanceDueDate
				+ ", carCurrentFuleStatus=" + carCurrentFuleStatus + "]";
	}
	
}
