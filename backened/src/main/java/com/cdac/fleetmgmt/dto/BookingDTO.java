package com.cdac.fleetmgmt.dto;

import java.sql.Date;
import java.util.Arrays;

import com.cdac.fleetmgmt.entities.CustomerMaster;

public class BookingDTO {
	
	private Date bookingDate;
	private CustomerMaster customerId;
	private Date bookingStartDate;
	private Date bookingEndDate;
	private long carTypeId;
	private String custDetail;
	private double dailyRate;
	private double weeklyRate;
	private double monthlyRate;
	private int[] addOnIds;
	
	public Date getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}
	public CustomerMaster getCustomerId() {
		return customerId;
	}
	public void setCustomerId(CustomerMaster customerId) {
		this.customerId = customerId;
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
	public long getCarTypeId() {
		return carTypeId;
	}
	public void setCarTypeId(long carTypeId) {
		this.carTypeId = carTypeId;
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
	public double getWeeklyRate() {
		return weeklyRate;
	}
	public void setWeeklyRate(double weeklyRate) {
		this.weeklyRate = weeklyRate;
	}
	public double getMonthlyRate() {
		return monthlyRate;
	}
	public void setMonthlyRate(double monthlyRate) {
		this.monthlyRate = monthlyRate;
	}
	public int[] getAddOnIds() {
		return addOnIds;
	}
	public void setAddOnIds(int[] addOnIds) {
		this.addOnIds = addOnIds;
	}
	
	@Override
	public String toString() {
		return "BookingDTO [bookingDate=" + bookingDate + ", customerId=" + customerId + ", bookingStartDate="
				+ bookingStartDate + ", bookingEndDate=" + bookingEndDate + ", carTypeId=" + carTypeId + ", custDetail="
				+ custDetail + ", dailyRate=" + dailyRate + ", weeklyRate=" + weeklyRate + ", monthlyRate="
				+ monthlyRate + ", addOnIds=" + Arrays.toString(addOnIds) + ", getBookingDate()=" + getBookingDate()
				+ ", getCustomerId()=" + getCustomerId() + ", getBookingStartDate()=" + getBookingStartDate()
				+ ", getBookingEndDate()=" + getBookingEndDate() + ", getCarTypeId()=" + getCarTypeId()
				+ ", getCustDetail()=" + getCustDetail() + ", getDailyRate()=" + getDailyRate() + ", getWeeklyRate()="
				+ getWeeklyRate() + ", getMonthlyRate()=" + getMonthlyRate() + ", getAddOnIds()="
				+ Arrays.toString(getAddOnIds()) + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
}
