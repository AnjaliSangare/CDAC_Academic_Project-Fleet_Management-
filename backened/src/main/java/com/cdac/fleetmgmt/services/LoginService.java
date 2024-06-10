package com.cdac.fleetmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.dto.UserLoginDTO;
import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.entities.MembershipRegistration;
import com.cdac.fleetmgmt.repository.CustomerMasterRepository;
import com.cdac.fleetmgmt.repository.MembershipRegistrationRepository;

@Service
public class LoginService {
	
	@Autowired
	CustomerMasterRepository customerMasterRepository;
	
	@Autowired
	MembershipRegistrationRepository membershipRegistrationRepository;
	
	public CustomerMaster findByEmail(String email) {
		CustomerMaster cust = customerMasterRepository.findByEmail(email);
		return cust;
	}
	
	public ResponseEntity<CustomerMaster> login(UserLoginDTO user) {
		MembershipRegistration registration = membershipRegistrationRepository.findById(Long.valueOf(user.getUsername())).get();
		CustomerMaster cust = null;
		if(registration.getPassword().equals(user.getPassword())) {
			cust = registration.getCustomer_id();
			return new ResponseEntity<CustomerMaster>(cust, HttpStatus.OK);
		} else {
			return new ResponseEntity<CustomerMaster>(cust, HttpStatus.FORBIDDEN);
		}
		
		
	}
}
