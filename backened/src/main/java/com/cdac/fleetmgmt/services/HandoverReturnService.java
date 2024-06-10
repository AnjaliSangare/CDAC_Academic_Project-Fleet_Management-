package com.cdac.fleetmgmt.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.dto.HandoverDTO;
import com.cdac.fleetmgmt.dto.InvoiceReturnDTO;
import com.cdac.fleetmgmt.entities.BookingHeaderReservation;
import com.cdac.fleetmgmt.entities.CarMaster;
import com.cdac.fleetmgmt.entities.CarTypeMaster;
import com.cdac.fleetmgmt.entities.InvoiceDetailTableReturn;
import com.cdac.fleetmgmt.entities.InvoiceHeaderTableHandover;
import com.cdac.fleetmgmt.repository.BookingRepository;
import com.cdac.fleetmgmt.repository.CarRepository;
import com.cdac.fleetmgmt.repository.CarTypeMasterRepository;
import com.cdac.fleetmgmt.repository.CustomerMasterRepository;
import com.cdac.fleetmgmt.repository.HandoverRepository;
import com.cdac.fleetmgmt.repository.ReturnRepository;

@Service
public class HandoverReturnService {
	
	@Autowired
	HandoverRepository handoverRepository;
	
	@Autowired
	ReturnRepository returnRepository;
	
	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	CustomerMasterRepository customerRepository;
	
	@Autowired
	CarTypeMasterRepository carTypeRepo;
	
	@Autowired
	CarRepository carRepository;
	
	public ResponseEntity<InvoiceHeaderTableHandover> handover(HandoverDTO handover) {
		
		InvoiceHeaderTableHandover handoverNew = new InvoiceHeaderTableHandover();
		InvoiceHeaderTableHandover handoverReturn;
		
		LocalDateTime now = LocalDateTime.now();  
		Instant instant = now.atZone(ZoneId.systemDefault()).toInstant();
		Date date = Date.from(instant);
		
		BookingHeaderReservation booking = bookingRepository.findById(Long.valueOf(handover.getBookingId())).get();
		CarMaster car = carRepository.findById(handover.getCarId()).get();
		CarTypeMaster carType = carTypeRepo.findById(car.getCarTypeId().getCarTypeId()).get();
		
		handoverNew.setBookingId(booking);
		handoverNew.setCarId(car);
		handoverNew.setCustId(booking.getCustomerId());
		handoverNew.setHandoverDate(date);
		handoverNew.setInvoiceDate(date);
		handoverNew.setInvoiceRate(booking.getDailyRate());
		handoverNew.setRentalAmt(carType.getDailyRate());
		handoverNew.setReturnDate(booking.getBookingEndDate());
		handoverNew.setTotalAddonAmt(booking.getDailyRate());
		handoverNew.setTotalAmt(booking.getDailyRate()+carType.getDailyRate());
		
		handoverReturn = handoverRepository.save(handoverNew);
		
		return new ResponseEntity<InvoiceHeaderTableHandover>(handoverReturn, HttpStatus.CREATED);
		
	}
	
	public ResponseEntity<InvoiceReturnDTO> returnCar(HandoverDTO handover) {
		
		BookingHeaderReservation bookingTemp = bookingRepository.findById(Long.valueOf(handover.getBookingId())).get();
		InvoiceDetailTableReturn returnTable = new InvoiceDetailTableReturn();
		InvoiceReturnDTO invoice = new InvoiceReturnDTO();
		
		LocalDateTime now = LocalDateTime.now();  
		Instant instant = now.atZone(ZoneId.systemDefault()).toInstant();
		Date date = Date.from(instant);
		
		bookingTemp.setBookingEndDate(date);
		BookingHeaderReservation booking = bookingRepository.save(bookingTemp);
		
		InvoiceHeaderTableHandover handoverRetrieved = handoverRepository.findByBookingId(booking);
		
		returnTable.setInvoiceId(handoverRetrieved);
		
		InvoiceDetailTableReturn retEntity = returnRepository.save(returnTable);
		
		long days = dateDiff(booking.getBookingEndDate(), handoverRetrieved.getHandoverDate());
		
		invoice.setReturnDetails(retEntity);
//		invoice.setTotalRental();
//		invoice.setTotalAddOns();
//		invoice.setTotalAmount();
		invoice.setTotalDays((int)days);
		
		
		return new ResponseEntity<>(invoice, HttpStatus.CREATED);
	}
	
	private int[] calculateAmountBasedOnDays(long days) {
		int[] returnArr = new int[]{0, 0, 0};
		
		double rMonths = 0;
		double rWeeks = 0;
		double rDays = 0;
		
		double tDays = days;
		if(tDays-30<0) {
			if(tDays-7<0) {
				rMonths = 0;
				rWeeks = 0;
				rDays = tDays;
			} else {
				rMonths = 0;
				int weeks = (int)tDays/7;
				rWeeks = weeks;
				tDays = tDays - (weeks*7);
				rDays = tDays;
			}
		} else {
			int months = (int)days/30;
			tDays = tDays - (months*30);
			if(tDays-7<0) {
				rMonths = 0;
				rWeeks = 0;
				rDays = tDays;
			} else {
				rMonths = months;
				int weeks = (int)tDays/7;
				rWeeks = weeks;
				tDays = tDays - (weeks*7);
				rDays = tDays;
			}
		}
		
		returnArr[0] = (int)rMonths;
		returnArr[1] = (int)rWeeks;
		returnArr[2] = (int)rDays;
		
		return returnArr;
		
	}
	
	private long dateDiff(Date date1, Date date2) {
		long diffInMillies = Math.abs(date1.getTime() - date2.getTime());
	    return TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
	}
	
}
