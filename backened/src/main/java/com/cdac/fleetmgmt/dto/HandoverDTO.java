package com.cdac.fleetmgmt.dto;

public class HandoverDTO {
	
	private long carId;
	private int fuelStatus;
	public String bookingId;
	
	public long getCarId() {
		return carId;
	}
	public void setCarId(long carId) {
		this.carId = carId;
	}
	public int getFuelStatus() {
		return fuelStatus;
	}
	public void setFuelStatus(int fuelStatus) {
		this.fuelStatus = fuelStatus;
	}
	public String getBookingId() {
		return bookingId;
	}
	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}
	
	@Override
	public String toString() {
		return "HandoverDTO [carId=" + carId + ", fuelStatus=" + fuelStatus + ", bookingId=" + bookingId + "]";
	}
	
}
