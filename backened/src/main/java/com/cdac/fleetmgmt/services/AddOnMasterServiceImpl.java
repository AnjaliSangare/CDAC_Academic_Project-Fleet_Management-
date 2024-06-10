package com.cdac.fleetmgmt.services;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.AddOnMaster;
import com.cdac.fleetmgmt.repository.AddOnMasterRepository;

@Service
public class AddOnMasterServiceImpl 
{
	
	@Autowired
	AddOnMasterRepository addOnMasterRepository;
	
	public List<AddOnMaster> getAllAddOnItems()
	{
		List<AddOnMaster> returnList=new ArrayList<>();
		returnList=addOnMasterRepository.findAll();
		
		return returnList;
		
	}

}
