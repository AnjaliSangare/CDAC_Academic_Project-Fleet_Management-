package com.cdac.fleetmgmt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.entities.AirportMaster;
import com.cdac.fleetmgmt.services.AirportMasterService;

@RestController
@RequestMapping("airport")
@CrossOrigin(origins="*")
public class AirportMasterController {
   @Autowired
   private AirportMasterService airportMasterService;
   
   @GetMapping("/{airportcode}")
   public Optional<AirportMaster> getAirportByAirportcode(@PathVariable long airportcode)
   {
	return airportMasterService.showAirportlist(airportcode);
   }
   
//   @PostMapping("/addairporthub")
//   public String addairporthub(@RequestBody AirportMaster airportobj)
//   {
//	   return airportMasterService.addAirport(airportobj);
//   }
   
  @GetMapping("/getAllAirportHub")
  public List<AirportMaster> getAllAirport(){
	  List<AirportMaster> airportlist = new ArrayList<>();
	  airportlist = airportMasterService.getAllAirport();
	  return airportlist;
  }
  
  @GetMapping("/getAirportByAirportName/{airportName}")
  public Optional<AirportMaster> getAirportByAirportName(@PathVariable String airportName) {
	  Optional<AirportMaster> airport = airportMasterService.getAirportByAirportName(airportName);
	  return airport;
  }
  
   @GetMapping("/getAirportById/{id}")
   public Optional<AirportMaster> getAirportById(@PathVariable Long id) {
	   Optional<AirportMaster> airport = airportMasterService.getAirportById(id);
	   return airport;
   }
}
