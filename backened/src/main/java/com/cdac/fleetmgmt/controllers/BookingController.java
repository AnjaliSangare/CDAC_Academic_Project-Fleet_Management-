package com.cdac.fleetmgmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.dto.BookingDTO;
import com.cdac.fleetmgmt.entities.BookingHeaderReservation;
import com.cdac.fleetmgmt.services.BookingService;

@RestController
@RequestMapping("booking")
public class BookingController {
	
	@Autowired
	BookingService bookingService;
	
	@GetMapping("/{id}")
	public ResponseEntity<BookingHeaderReservation> getBookingById(@PathVariable Long id) {
		return bookingService.getBookingById(id);
	}
	
	@PostMapping("/")
	public ResponseEntity<BookingHeaderReservation> addBooking(@RequestBody BookingDTO booking) {
		return bookingService.addBooking(booking);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<BookingHeaderReservation> updateBooking(@RequestBody BookingDTO booking, @PathVariable Long id) {
		// to implement
		return new ResponseEntity<>(new BookingHeaderReservation(), HttpStatus.OK);
	}
	
}
