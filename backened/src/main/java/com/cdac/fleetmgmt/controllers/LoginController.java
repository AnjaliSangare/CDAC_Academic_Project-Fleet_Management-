package com.cdac.fleetmgmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.dto.UserLoginDTO;
import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.services.LoginService;

@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping("/user")
	public ResponseEntity<CustomerMaster> login(@RequestBody UserLoginDTO user) {		
		return loginService.login(user);
	}
	
}
