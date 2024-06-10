package com.cdac.fleetmgmt.entities;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CustomerMaster {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long customerId;
	private String firstName;
	private String lastName;
	private String address1;
	private String address2;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cityId", referencedColumnName="cityId")
	private CityMaster cityId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "stateId", referencedColumnName="stateId")
	private StateMaster stateId;
	
	private String pin;
	private String phone;
	private String email;
	private String creditCardType;
	private String drivingLicence;
	private String dlIssuedBy;
	private Date dlValidThrough;
	private String passportNumber;
	private String passportIssuedBy;
	private Date passportValidUpto;
	private Date dob;
	
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCreditCardType() {
		return creditCardType;
	}
	public void setCreditCardType(String creditCardType) {
		this.creditCardType = creditCardType;
	}
	public String getDrivingLicence() {
		return drivingLicence;
	}
	public void setDrivingLicence(String drivingLicence) {
		this.drivingLicence = drivingLicence;
	}
	public String getDlIssuedBy() {
		return dlIssuedBy;
	}
	public void setDlIssuedBy(String dlIssuedBy) {
		this.dlIssuedBy = dlIssuedBy;
	}
	public Date getDlValidThrough() {
		return dlValidThrough;
	}
	public void setDlValidThrough(Date dlValidThrough) {
		this.dlValidThrough = dlValidThrough;
	}
	public String getPassportNumber() {
		return passportNumber;
	}
	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}
	public String getPassportIssuedBy() {
		return passportIssuedBy;
	}
	public void setPassportIssuedBy(String passportIssuedBy) {
		this.passportIssuedBy = passportIssuedBy;
	}
	public Date getPassportValidUpto() {
		return passportValidUpto;
	}
	public void setPassportValidUpto(Date passportValidUpto) {
		this.passportValidUpto = passportValidUpto;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
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
	
	@Override
	public String toString() {
		return "CustomerMaster [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", address1=" + address1 + ", address2=" + address2 + ", cityId=" + cityId + ", stateId=" + stateId
				+ ", pin=" + pin + ", phone=" + phone + ", email=" + email + ", creditCardType=" + creditCardType
				+ ", drivingLicence=" + drivingLicence + ", dlIssuedBy=" + dlIssuedBy + ", dlValidThrough="
				+ dlValidThrough + ", passportNumber=" + passportNumber + ", passportIssuedBy=" + passportIssuedBy
				+ ", passportValidUpto=" + passportValidUpto + ", dob=" + dob + "]";
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(address1, address2, cityId, creditCardType, customerId, dlIssuedBy, dlValidThrough, dob,
				drivingLicence, email, firstName, lastName, passportIssuedBy, passportNumber, passportValidUpto, phone,
				pin, stateId);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CustomerMaster other = (CustomerMaster) obj;
		return Objects.equals(address1, other.address1) && Objects.equals(address2, other.address2)
				&& Objects.equals(cityId, other.cityId) && Objects.equals(creditCardType, other.creditCardType)
				&& Objects.equals(customerId, other.customerId) && Objects.equals(dlIssuedBy, other.dlIssuedBy)
				&& Objects.equals(dlValidThrough, other.dlValidThrough) && Objects.equals(dob, other.dob)
				&& Objects.equals(drivingLicence, other.drivingLicence) && Objects.equals(email, other.email)
				&& Objects.equals(firstName, other.firstName) && Objects.equals(lastName, other.lastName)
				&& Objects.equals(passportIssuedBy, other.passportIssuedBy)
				&& Objects.equals(passportNumber, other.passportNumber)
				&& Objects.equals(passportValidUpto, other.passportValidUpto) && Objects.equals(phone, other.phone)
				&& Objects.equals(pin, other.pin) && Objects.equals(stateId, other.stateId);
	}
	
}
