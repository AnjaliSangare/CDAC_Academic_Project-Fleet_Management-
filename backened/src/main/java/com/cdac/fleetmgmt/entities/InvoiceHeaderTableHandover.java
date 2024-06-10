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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class InvoiceHeaderTableHandover {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long invoiceId;
	
	@Temporal(TemporalType.DATE)
	private Date invoiceDate;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookingId", referencedColumnName = "bookingId")
	private BookingHeaderReservation bookingId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "custId", referencedColumnName = "customerId")
	private CustomerMaster custId;
	
	@Temporal(TemporalType.DATE)
	private Date handoverDate;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "carId", referencedColumnName = "carId")
	private CarMaster carId;
	
	@Temporal(TemporalType.DATE)
	private Date returnDate;
	
	private double rentalAmt;
	private double totalAddonAmt;
	private double totalAmt;
	private String customerDetails;
	private double invoiceRate;

	public long getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(long invoiceId) {
		this.invoiceId = invoiceId;
	}
	public Date getInvoiceDate() {
		return invoiceDate;
	}
	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}

	public Date getHandoverDate() {
		return handoverDate;
	}
	public void setHandoverDate(Date handoverDate) {
		this.handoverDate = handoverDate;
	}
	public Date getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}
	public double getRentalAmt() {
		return rentalAmt;
	}
	public void setRentalAmt(double rentalAmt) {
		this.rentalAmt = rentalAmt;
	}
	public double getTotalAddonAmt() {
		return totalAddonAmt;
	}
	public void setTotalAddonAmt(double totalAddonAmt) {
		this.totalAddonAmt = totalAddonAmt;
	}
	public double getTotalAmt() {
		return totalAmt;
	}
	public void setTotalAmt(double totalAmt) {
		this.totalAmt = totalAmt;
	}
	public String getCustomerDetails() {
		return customerDetails;
	}
	public void setCustomerDetails(String customerDetails) {
		this.customerDetails = customerDetails;
	}
	public double getInvoiceRate() {
		return invoiceRate;
	}
	public void setInvoiceRate(double invoiceRate) {
		this.invoiceRate = invoiceRate;
	}
	public BookingHeaderReservation getBookingId() {
		return bookingId;
	}
	public void setBookingId(BookingHeaderReservation bookingId) {
		this.bookingId = bookingId;
	}
	public CustomerMaster getCustId() {
		return custId;
	}
	public void setCustId(CustomerMaster custId) {
		this.custId = custId;
	}
	public CarMaster getCarId() {
		return carId;
	}
	public void setCarId(CarMaster carId) {
		this.carId = carId;
	}
	
	@Override
	public String toString() {
		return "InvoiceHeaderTableHandover [invoiceId=" + invoiceId + ", invoiceDate=" + invoiceDate + ", bookingId="
				+ bookingId + ", custId=" + custId + ", handoverDate=" + handoverDate + ", carId=" + carId
				+ ", returnDate=" + returnDate + ", rentalAmt=" + rentalAmt + ", totalAddonAmt=" + totalAddonAmt
				+ ", totalAmt=" + totalAmt + ", customerDetails=" + customerDetails + ", invoiceRate=" + invoiceRate
				+ "]";
	}

}
