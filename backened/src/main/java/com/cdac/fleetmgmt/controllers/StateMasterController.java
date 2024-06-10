package com.cdac.fleetmgmt.controllers;

import java.util.List;
import java.util.ArrayList;

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

import com.cdac.fleetmgmt.entities.StateMaster;
import com.cdac.fleetmgmt.services.StateMasterService;

@RestController
@RequestMapping("state")
@CrossOrigin(origins="*")
public class StateMasterController {
	@Autowired
	StateMasterService stateMasterService;
	
	@GetMapping("/getAllState")
	public List<StateMaster> getAllState(){
		List<StateMaster> returnList = new ArrayList<>();
		returnList = stateMasterService.getAllState();
		return returnList;
	}
	
	@GetMapping("/getStateById/{id}")
	public StateMaster getStateById(@PathVariable Long id) {
		System.out.println(id);
		return stateMasterService.getStateById(id);
		
	}
	
	@PostMapping("/addState")
	public String addState(@RequestBody StateMaster state) {
		return stateMasterService.addState(state);
	}
	
	@PutMapping("/updateState")
	public String updateState(@RequestBody StateMaster state) {
	return stateMasterService.updateState(state);
    }
	
    @DeleteMapping("/deleteState/{id}")
    public String deleteState(@PathVariable Long id) {
	return stateMasterService.deleteStateById(id);
    }
}
