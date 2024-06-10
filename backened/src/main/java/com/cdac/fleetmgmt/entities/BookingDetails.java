package com.cdac.fleetmgmt.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class BookingDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long bookingDetailsId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookingId", referencedColumnName="bookingId")
	private BookingHeaderReservation bookingId;
	
	private long addonId;
	private double addonRate;
	
	public long getBookingDetailsId() {
		return bookingDetailsId;
	}
	public void setBookingDetailsId(long bookingDetailsId) {
		this.bookingDetailsId = bookingDetailsId;
	}
	public BookingHeaderReservation getBookingId() {
		return bookingId;
	}
	public void setBookingId(BookingHeaderReservation bookingId) {
		this.bookingId = bookingId;
	}
	public long getAddonId() {
		return addonId;
	}
	public void setAddonId(long addonId) {
		this.addonId = addonId;
	}
	public double getAddonRate() {
		return addonRate;
	}
	public void setAddonRate(double addonRate) {
		this.addonRate = addonRate;
	}
	
	@Override
	public String toString() {
		return "BookingDetails [bookingDetailsId=" + bookingDetailsId + ", bookingId=" + bookingId + ", addonId="
				+ addonId + ", addonRate=" + addonRate + "]";
	}
	
}
