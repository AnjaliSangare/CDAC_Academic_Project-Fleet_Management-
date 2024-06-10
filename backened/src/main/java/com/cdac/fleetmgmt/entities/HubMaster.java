package com.cdac.fleetmgmt.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class HubMaster
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long hubId;

	private String hubName;
	private String hubAddress;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cityId", referencedColumnName = "cityId")
	private CityMaster cityId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "stateId", referencedColumnName = "stateId")
	private StateMaster stateId;
	
	private String hubPhoneNo;
	private String weekDay;
	private String openingHours;

	public long getHubId() {
		return hubId;
	}

	public void setHubId(long hubId) {
		this.hubId = hubId;
	}

	public String getHubName() {
		return hubName;
	}

	public void setHubName(String hubName) {
		this.hubName = hubName;
	}

	public String getHubAddress() {
		return hubAddress;
	}

	public void setHubAddress(String hubAddress) {
		this.hubAddress = hubAddress;
	}

	public CityMaster getCityId() {
		return cityId;
	}

	public void setCityId(CityMaster cityId) {
		this.cityId = cityId;
	}

	public String getOpeningHours() {
		return openingHours;
	}

	public void setOpeningHours(String openingHours) {
		this.openingHours = openingHours;
	}

	public String getHubPhoneNo() {
		return hubPhoneNo;
	}

	public void setHubPhoneNo(String hubPhoneNo) {
		this.hubPhoneNo = hubPhoneNo;
	}

	public String getWeekDay() {
		return weekDay;
	}

	public void setWeekDay(String weekDay) {
		this.weekDay = weekDay;
	}
	
	public StateMaster getStateId() {
		return stateId;
	}

	public void setStateId(StateMaster stateId) {
		this.stateId = stateId;
	}

	@Override
	public String toString() {
		return "HubMaster [hubId=" + hubId + ", hubName=" + hubName + ", hubAddress=" + hubAddress + ", cityId="
				+ cityId + ", stateId=" + stateId + ", hubPhoneNo=" + hubPhoneNo + ", weekDay=" + weekDay
				+ ", openingHours=" + openingHours + "]";
	}

}
