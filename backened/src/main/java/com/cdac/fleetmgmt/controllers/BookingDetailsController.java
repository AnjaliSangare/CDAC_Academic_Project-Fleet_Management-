package com.cdac.fleetmgmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.services.BookingDetailsService;

@RestController
@RequestMapping("/api/booking-details")

public class BookingDetailsController 
{
	
	@Autowired
	private BookingDetailsService bookingDetailService;
	
	
	 @PostMapping("/createbooking")
	    public ResponseEntity<String> createBookingDetails(@RequestBody Long[] addonIds) {
	        try {
	            bookingDetailService.createBookingDetailsWithAddons(addonIds);
	            return ResponseEntity.ok("Booking details with addons created successfully.");
	        } catch (Exception e) {
	            return ResponseEntity.status(500).body("Error creating booking details with addons: " + e.getMessage());
	        }
	    }

}
