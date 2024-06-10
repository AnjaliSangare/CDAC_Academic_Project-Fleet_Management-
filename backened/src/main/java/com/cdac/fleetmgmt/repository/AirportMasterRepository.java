package com.cdac.fleetmgmt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.fleetmgmt.entities.AirportMaster;




public interface AirportMasterRepository  extends JpaRepository<AirportMaster, Long>
{
	@Query("from AirportMaster a where a.airportCode=:airportcode")
	List<AirportMaster> getAirportById(@Param("airportcode") int airportcode);

	Optional<AirportMaster> findByAirportName(String airportName);
}
