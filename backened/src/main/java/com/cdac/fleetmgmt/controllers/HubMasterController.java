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

import com.cdac.fleetmgmt.entities.HubMaster;
import com.cdac.fleetmgmt.services.HubMasterService;

@RestController
@RequestMapping("hub")
@CrossOrigin(origins="*")
public class HubMasterController {

	@Autowired
	HubMasterService hubMasterService;
	
	@GetMapping("/getAllHub")
	public List<HubMaster> getAllHubs(){
		List<HubMaster> hublist = new ArrayList<>();
		hublist = hubMasterService.getAllHub();
		return hublist;
	}
	
	@PostMapping("/addHub")
	public String addHub(@RequestBody HubMaster hub) {
		return hubMasterService.addHub(hub);
	}
	
	@PutMapping("/updateHub")
	public String updateHub(@RequestBody HubMaster hub) {
		return hubMasterService.updateHub(hub);
	}
	@DeleteMapping("/deleteHub/{id}")
	public String deleteHub(@PathVariable Long id) {
		return hubMasterService.deleteHubById(id);
	}
	
	@GetMapping("/getHubByCityId/{id}")
	public List<HubMaster> getHubByCityId(@PathVariable Long id) {
		return hubMasterService.getHubByCityId(id);
	}
	
}
