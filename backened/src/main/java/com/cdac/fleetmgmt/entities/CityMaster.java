package com.cdac.fleetmgmt.entities;


import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class CityMaster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cityId;
	
	private String cityName;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "stateId", referencedColumnName="stateId")
	public StateMaster stateId;
	
	public long getCityId() {
		return cityId;
	}
	
	public void setCityId(long cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public StateMaster getStateId() {
		return stateId;
	}

	public void setStateId(StateMaster stateId) {
		this.stateId = stateId;
	}

	@Override
	public String toString() {
		return "CityMaster [cityId=" + cityId + ", cityName=" + cityName + ", stateId=" + stateId + ", getCityId()="
				+ getCityId() + ", getCityName()=" + getCityName() + ", getStateId()=" + getStateId() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(cityId, cityName, stateId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CityMaster other = (CityMaster) obj;
		return cityId == other.cityId && Objects.equals(cityName, other.cityName)
				&& Objects.equals(stateId, other.stateId);
	}
	
}


