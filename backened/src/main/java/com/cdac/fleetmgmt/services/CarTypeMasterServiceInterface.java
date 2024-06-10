package com.cdac.fleetmgmt.services;

import java.util.List;

import com.cdac.fleetmgmt.entities.CarTypeMaster;

public interface CarTypeMasterServiceInterface {

	 List<CarTypeMaster> getAllCarTypesByHubId(Long hubId);

	String addCarType(CarTypeMaster carTypeMaster);
	
	
    
}
