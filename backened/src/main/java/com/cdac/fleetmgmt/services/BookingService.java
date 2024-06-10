package com.cdac.fleetmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.dto.BookingDTO;
import com.cdac.fleetmgmt.entities.AddOnMaster;
import com.cdac.fleetmgmt.entities.BookingHeaderReservation;
import com.cdac.fleetmgmt.entities.CarTypeMaster;
import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.repository.AddOnRepository;
import com.cdac.fleetmgmt.repository.BookingRepository;
import com.cdac.fleetmgmt.repository.CarTypeMasterRepository;
import com.cdac.fleetmgmt.repository.CustomerMasterRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	CustomerMasterRepository customerMasterRepository;
	
	@Autowired
	CarTypeMasterRepository carTypeRepository;
	
	@Autowired
	AddOnRepository addOnRepository;
	
	public ResponseEntity<BookingHeaderReservation> addBooking(BookingDTO booking) {
		BookingHeaderReservation bookingToSave = new BookingHeaderReservation();
		
		CustomerMaster savedCustomer = customerMasterRepository.save(booking.getCustomerId());
		
		CarTypeMaster carType = carTypeRepository.findById(booking.getCarTypeId()).get();
		
		bookingToSave.setBookingDate(booking.getBookingDate());
		bookingToSave.setBookingStartDate(booking.getBookingStartDate());
		bookingToSave.setBookingEndDate(booking.getBookingEndDate());
		bookingToSave.setCarTypeId(carType);
		bookingToSave.setCustomerId(savedCustomer);
		
		double dailyRate = calculateAddOnTotal(booking.getAddOnIds());
		
		bookingToSave.setDailyRate(dailyRate);
		bookingToSave.setWklyRate(dailyRate*7);
		bookingToSave.setMnthlyRate(dailyRate*30);
		
		BookingHeaderReservation bookingAdded = bookingRepository.save(bookingToSave);
		
		return new ResponseEntity<>(bookingAdded, HttpStatus.CREATED);
	}
	
	public ResponseEntity<BookingHeaderReservation> getBookingById(Long id) {
		BookingHeaderReservation booking = bookingRepository.findById(id).get();
		System.out.println(booking);
		return new ResponseEntity<>(booking, HttpStatus.OK);
	}
	
	public double calculateAddOnTotal(int[] arr) {
		double total = 0;
		
		for(int i=0; i<arr.length; i++) {
			AddOnMaster addOn = addOnRepository.getById(Long.valueOf(arr[i]));
			total += addOn.getAddOnRate();
		}
		
		return total;
	}
	
}
