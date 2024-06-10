package com.cdac.fleetmgmt.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.CityMaster;

import com.cdac.fleetmgmt.repository.CityMasterRepository;

@Service
public class CityMasterService {
	
	@Autowired
	CityMasterRepository cityMasterRepository;
	
	public List<CityMaster> getAllCity() {
		List<CityMaster> returnList = new ArrayList<>();
		
		returnList = cityMasterRepository.findAll();
		
		return returnList;
	}
	
	public String addCity(CityMaster city) {
		CityMaster city1;
		try {
			city1 = cityMasterRepository.save(city);
		} catch (Exception e) {
			return e.getCause().toString();
		}
		
		if(city1==null) {
			return "Error";
		} else {
			 return "Success";
		}

	}
	
	public String deleteCityById(Long id) {
		CityMaster cityFound = cityMasterRepository.getById(id);
		if(cityFound==null) {
			return "Error";
		} else {
			cityMasterRepository.delete(cityFound);
			return "Success";
		}
	}
	
	public CityMaster getCityById(Long id) {
		CityMaster cityFound = cityMasterRepository.findById(id).get();
		return cityFound;

	}
	public List<CityMaster>getCityByStateId(Long stateId){
		List<CityMaster> cityfound=cityMasterRepository.getCityByStateId(stateId);
		return cityfound;
	}
	
	public String updateCity(CityMaster city) {
		
		Optional<CityMaster> cityFound = cityMasterRepository.findById(city.getCityId());
		if (cityFound.isPresent()) {
			CityMaster foundcity=cityFound.get();
			foundcity.setStateId(city.getStateId());
			foundcity.setCityName(city.getCityName());
			
			CityMaster cityobj = cityMasterRepository.save(foundcity);
			return "City Updated Successfully";
			
		}
		
		

 else {
			 return "not found";
		}

	}
}
	



