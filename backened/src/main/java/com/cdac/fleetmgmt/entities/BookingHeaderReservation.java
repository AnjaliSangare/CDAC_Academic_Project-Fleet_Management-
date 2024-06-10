package com.cdac.fleetmgmt.entities;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class BookingHeaderReservation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long bookingId;
	
	public Date bookingDate;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerId", referencedColumnName = "customerId")
	public CustomerMaster customerId;
	
	public Date bookingStartDate;
	
	public Date bookingEndDate;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "carTypeId", referencedColumnName = "carTypeId")
	public CarTypeMaster carTypeId;
	
	public String custDetail;

	public double dailyRate;

	public double wklyRate;

	public double mnthlyRate;

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getBookingStartDate() {
		return bookingStartDate;
	}

	public void setBookingStartDate(Date bookingStartDate) {
		this.bookingStartDate = bookingStartDate;
	}

	public Date getBookingEndDate() {
		return bookingEndDate;
	}

	public void setBookingEndDate(Date bookingEndDate) {
		this.bookingEndDate = bookingEndDate;
	}

	public String getCustDetail() {
		return custDetail;
	}

	public void setCustDetail(String custDetail) {
		this.custDetail = custDetail;
	}

	public double getDailyRate() {
		return dailyRate;
	}

	public void setDailyRate(double dailyRate) {
		this.dailyRate = dailyRate;
	}

	public double getWklyRate() {
		return wklyRate;
	}

	public void setWklyRate(double wklyRate) {
		this.wklyRate = wklyRate;
	}

	public double getMnthlyRate() {
		return mnthlyRate;
	}

	public void setMnthlyRate(double mnthlyRate) {
		this.mnthlyRate = mnthlyRate;
	}

	public CustomerMaster getCustomerId() {
		return customerId;
	}

	public void setCustomerId(CustomerMaster customerId) {
		this.customerId = customerId;
	}

	public CarTypeMaster getCarTypeId() {
		return carTypeId;
	}

	public void setCarTypeId(CarTypeMaster carTypeId) {
		this.carTypeId = carTypeId;
	}

	@Override
	public String toString() {
		return "BookingHeaderReservation [bookingId=" + bookingId + ", bookingDate=" + bookingDate + ", customerId="
				+ customerId + ", bookingStartDate=" + bookingStartDate + ", bookingEndDate=" + bookingEndDate
				+ ", carTypeId=" + carTypeId + ", custDetail=" + custDetail + ", dailyRate=" + dailyRate + ", wklyRate="
				+ wklyRate + ", mnthlyRate=" + mnthlyRate + "]";
	}

}
