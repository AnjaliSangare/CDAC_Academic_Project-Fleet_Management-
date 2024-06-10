package com.cdac.fleetmgmt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.CarTypeMaster;
import com.cdac.fleetmgmt.entities.HubMaster;
import com.cdac.fleetmgmt.repository.CarTypeMasterRepository;
import com.cdac.fleetmgmt.repository.HubMasterRepository;
@Service
public class CarTypeMasterServiceImpl implements CarTypeMasterServiceInterface {
	
	@Autowired
	private CarTypeMasterRepository carTypeMasterRepository;
	
	@Autowired
	private HubMasterRepository hubRepo;

	@Override
	public List<CarTypeMaster>getAllCarTypesByHubId(Long hubId) {
		
		HubMaster hub = hubRepo.findById(hubId).get();
		
		return carTypeMasterRepository.findAllByHubId(hub);
	}

	@Override
	public String addCarType(CarTypeMaster carType) {
		CarTypeMaster carType1;
		try {
			carType1 = carTypeMasterRepository.save(carType);
		} catch (Exception e) {
			return e.getCause().toString();
		}
		
		if(carType1==null) {
			return "Error";
		} else {
			 return "Success";
		}

	}
}
