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
public class AirportMaster {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long AirporId;
	
	private String airportName;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cityId", referencedColumnName="cityId")
	private CityMaster cityId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "stateId", referencedColumnName="stateId")
	private StateMaster stateId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "hubId", referencedColumnName="hubId")
	private HubMaster hubId;
	
	private long airportCode;
	private String address;
	private String openingTime;
	private String closingTime;
	
	public long getAirporId() {
		return AirporId;
	}
	public void setAirporId(long airporId) {
		AirporId = airporId;
	}
	public String getAirportName() {
		return airportName;
	}
	public void setAirportName(String airportName) {
		this.airportName = airportName;
	}
	public long getAirportCode() {
		return airportCode;
	}
	public void setAirportCode(long airportCode) {
		this.airportCode = airportCode;
	}
	public CityMaster getCityId() {
		return cityId;
	}
	public void setCityId(CityMaster cityId) {
		this.cityId = cityId;
	}
	public StateMaster getStateId() {
		return stateId;
	}
	public void setStateId(StateMaster stateId) {
		this.stateId = stateId;
	}
	public HubMaster getHubId() {
		return hubId;
	}
	public void setHubId(HubMaster hubId) {
		this.hubId = hubId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getOpeningTime() {
		return openingTime;
	}
	public void setOpeningTime(String openingTime) {
		this.openingTime = openingTime;
	}
	public String getClosingTime() {
		return closingTime;
	}
	public void setClosingTime(String closingTime) {
		this.closingTime = closingTime;
	}
	
	@Override
	public String toString() {
		return "AirportMaster [AirporId=" + AirporId + ", airportName=" + airportName + ", cityId=" + cityId
				+ ", stateId=" + stateId + ", hubId=" + hubId + ", airportCode=" + airportCode + ", address=" + address
				+ ", openingTime=" + openingTime + ", closingTime=" + closingTime + "]";
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(AirporId, address, airportCode, airportName, cityId, closingTime, hubId, openingTime,
				stateId);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AirportMaster other = (AirportMaster) obj;
		return AirporId == other.AirporId && Objects.equals(address, other.address) && airportCode == other.airportCode
				&& Objects.equals(airportName, other.airportName) && Objects.equals(cityId, other.cityId)
				&& Objects.equals(closingTime, other.closingTime) && Objects.equals(hubId, other.hubId)
				&& Objects.equals(openingTime, other.openingTime) && Objects.equals(stateId, other.stateId);
	}

}
