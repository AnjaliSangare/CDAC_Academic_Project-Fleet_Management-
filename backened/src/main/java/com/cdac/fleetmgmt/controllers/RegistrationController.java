package com.cdac.fleetmgmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.dto.RegistrationDTO;
import com.cdac.fleetmgmt.dto.ResponseObjectDTO;
import com.cdac.fleetmgmt.services.MembershipRegistrationService;

@RestController
@RequestMapping("register")
public class RegistrationController {
	
	@Autowired
	MembershipRegistrationService registrationService;
	
	@PostMapping("/")
	public ResponseEntity<ResponseObjectDTO> registerCustomer(@RequestBody RegistrationDTO registration) {
		return registrationService.addMembership(registration);
	}
	
}
