package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.BookingHeaderReservation;
import com.cdac.fleetmgmt.entities.InvoiceHeaderTableHandover;

@Repository
public interface HandoverRepository extends JpaRepository<InvoiceHeaderTableHandover, Long>{
	public InvoiceHeaderTableHandover findByBookingId(BookingHeaderReservation bookingId);
}
