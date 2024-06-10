package com.cdac.fleetmgmt.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.entities.CityMaster;
import com.cdac.fleetmgmt.services.CityMasterService;

@RestController
@RequestMapping("city")
@CrossOrigin(origins="*")
public class CityMasterController {
	@Autowired
	CityMasterService cityMasterService;
	
	@GetMapping("/getAllCity")
	public List<CityMaster> getAllCity(){
		List<CityMaster> returnList = new ArrayList<>();
		
		returnList = cityMasterService.getAllCity();
		return returnList;
	}
	
	@GetMapping("/getCityById/{id}")
	public CityMaster getCityById(@PathVariable Long id) {
		System.out.println(id);
		return cityMasterService.getCityById(id);
	}
	
	@PostMapping("/addCity")
	public String addCity(@RequestBody CityMaster city) {
		return cityMasterService.addCity(city);
	}
	
	@PutMapping("/updateCity")
	public String updateCity(@RequestBody CityMaster city) {
		return cityMasterService.updateCity(city);
	}
	
	@DeleteMapping("/deleteCity/{id}")
	public String deleteCity(@PathVariable Long id) {
		return cityMasterService.deleteCityById(id);
	}
	
	@GetMapping("/getCityByStateId/{id}")
	public List<CityMaster>getCityByStateId(@PathVariable Long id){
		return cityMasterService.getCityByStateId(id);
	}

}
