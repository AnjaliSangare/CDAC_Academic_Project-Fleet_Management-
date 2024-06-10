package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.BookingHeaderReservation;

@Repository
public interface BookingRepository extends JpaRepository<BookingHeaderReservation, Long> {
	
}
