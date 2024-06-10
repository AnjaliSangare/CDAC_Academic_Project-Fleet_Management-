package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.BookingDetails;

@Repository
public interface BookinDetailsRepository  extends JpaRepository<BookingDetails,Long>
{

}
