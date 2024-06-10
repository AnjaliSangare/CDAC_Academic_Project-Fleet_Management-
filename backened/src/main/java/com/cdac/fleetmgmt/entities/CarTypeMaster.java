package com.cdac.fleetmgmt.entities;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CarTypeMaster {
	
	@Id
 	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long carTypeId;
	
	private String carTypeName;
	private double dailyRate;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "hubId", referencedColumnName = "hubId")
	private HubMaster hubId;
	
	private double weeklyRate;
	private double monthRate;
	private String imagePath;
	
	public long getCarTypeId() {
		return carTypeId;
	}
	public void setCarTypeId(long carTypeId) {
		this.carTypeId = carTypeId;
	}
	public String getCarTypeName() {
		return carTypeName;
	}
	public void setCarTypeName(String carTypeName) {
		this.carTypeName = carTypeName;
	}
	public double getDailyRate() {
		return dailyRate;
	}
	public void setDailyRate(double dailyRate) {
		this.dailyRate = dailyRate;
	}
	public HubMaster getHubId() {
		return hubId;
	}
	public void setHubId(HubMaster hubId) {
		this.hubId = hubId;
	}
	public double getWeeklyRate() {
		return weeklyRate;
	}
	public void setWeeklyRate(double weeklyRate) {
		this.weeklyRate = weeklyRate;
	}
	public double getMonthRate() {
		return monthRate;
	}
	public void setMonthRate(double monthRate) {
		this.monthRate = monthRate;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	@Override
	public String toString() {
		return "CarTypeMaster [carTypeId=" + carTypeId + ", carTypeName=" + carTypeName + ", dailyRate=" + dailyRate
				+ ", hubId=" + hubId + ", weeklyRate=" + weeklyRate + ", monthRate=" + monthRate + ", imagePath="
				+ imagePath + "]";
	}

}
	