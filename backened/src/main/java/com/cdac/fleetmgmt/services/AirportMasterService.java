package com.cdac.fleetmgmt.services;

import java.util.List;
import java.util.Optional;

import com.cdac.fleetmgmt.entities.AirportMaster;

public interface AirportMasterService {
	Optional<AirportMaster> showAirportlist(long airportcode);
//	String addAirport(AirportMaster a);
//	void delete(long id);
//	void update(AirportMaster airport, Long id);
//	AirportMaster getHubInfoById(Long id);

	List<AirportMaster> getAllAirport();

	Optional<AirportMaster> getAirportByAirportName(String airportName);

	Optional<AirportMaster> getAirportById(Long id);
	
	
}
