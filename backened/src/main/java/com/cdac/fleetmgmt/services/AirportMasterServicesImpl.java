package com.cdac.fleetmgmt.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.AirportMaster;
import com.cdac.fleetmgmt.repository.AirportMasterRepository;
@Service
public class AirportMasterServicesImpl implements AirportMasterService {

	@Autowired
	AirportMasterRepository repository;

//	@Override
//	public AirportMaster showAirportlist(Long airportcode) {
//		// TODO Auto-generated method stub
//	  return Repository.findById(airportcode);
//		
//	}

	@Override
	public Optional<AirportMaster> showAirportlist(long airportcode) {
		// TODO Auto-generated method stub
		return repository.findById(airportcode);
	}

	@Override
	public List<AirportMaster> getAllAirport() {
		List<AirportMaster> airportlist = new ArrayList<>();
		airportlist = repository.findAll();
		return airportlist;
	}

	@Override
	public Optional<AirportMaster> getAirportByAirportName(String airportName) {
		Optional <AirportMaster> airport = repository.findByAirportName(airportName);
		return airport;
	}

	@Override
	public Optional<AirportMaster> getAirportById(Long AirportId) {
		Optional<AirportMaster> airport = repository.findById(AirportId);
		return airport;
	}

	
//	@Override
//	public String addAirport(AirportMaster a) {
//		
//			AirportMaster aAirport = repository.save(a);
//			if (aAirport == null) {
//			    return "Error"    ;
//			} else {
//				return "Success";
//			}
//		

	
}
	
	
	
	

