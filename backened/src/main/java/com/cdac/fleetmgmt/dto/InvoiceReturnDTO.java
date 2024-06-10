package com.cdac.fleetmgmt.dto;

import com.cdac.fleetmgmt.entities.InvoiceDetailTableReturn;

public class InvoiceReturnDTO {
	
	private InvoiceDetailTableReturn returnDetails;
	private int totalDays;
	private float totalAmount;
	private float totalRental;
	private float totalAddOns;
	
	public InvoiceDetailTableReturn getReturnDetails() {
		return returnDetails;
	}
	public void setReturnDetails(InvoiceDetailTableReturn returnDetails) {
		this.returnDetails = returnDetails;
	}
	public int getTotalDays() {
		return totalDays;
	}
	public void setTotalDays(int totalDays) {
		this.totalDays = totalDays;
	}
	public float getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(float totalAmount) {
		this.totalAmount = totalAmount;
	}
	public float getTotalRental() {
		return totalRental;
	}
	public void setTotalRental(float totalRental) {
		this.totalRental = totalRental;
	}
	public float getTotalAddOns() {
		return totalAddOns;
	}
	public void setTotalAddOns(float totalAddOns) {
		this.totalAddOns = totalAddOns;
	}
	
	@Override
	public String toString() {
		return "InvoiceReturnDTO [returnDetails=" + returnDetails + ", totalDays=" + totalDays + ", totalAmount="
				+ totalAmount + ", totalRental=" + totalRental + ", totalAddOns=" + totalAddOns + "]";
	}
	
}
