package com.cdac.fleetmgmt.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.entities.AddOnMaster;
import com.cdac.fleetmgmt.services.AddOnMasterServiceImpl;

@RestController
@RequestMapping("addon")
@CrossOrigin(origins="*")
public class AddOnMasterController 
{
	@Autowired
	AddOnMasterServiceImpl addOnMasterService;
	
	@GetMapping()
	public List<AddOnMaster> getAllAddOnItems()
	{
		List<AddOnMaster> returnList=new ArrayList<>();
		
		returnList=addOnMasterService.getAllAddOnItems();
		
		return returnList;
		
	}

}
