package com.cdac.fleetmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.dto.RegistrationDTO;
import com.cdac.fleetmgmt.dto.ResponseObjectDTO;
import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.entities.MembershipRegistration;
import com.cdac.fleetmgmt.repository.CarTypeMasterRepository;
import com.cdac.fleetmgmt.repository.CityMasterRepository;
import com.cdac.fleetmgmt.repository.MembershipRegistrationRepository;
import com.cdac.fleetmgmt.repository.StateMasterRepository;

@Service
public class MembershipRegistrationService {
	
	@Autowired
	MembershipRegistrationRepository membershipRegistrationRepository;
	
	@Autowired
	CarTypeMasterRepository carTypeRepo;
	
	@Autowired
	CustomerMasterService customerMasterService;
	
	@Autowired
	StateMasterRepository stateMasterRepository;
	
	@Autowired
	CityMasterRepository cityMasterRepository;
	
	
	
	@SuppressWarnings("deprecation")
	public ResponseEntity<ResponseObjectDTO> addMembership(RegistrationDTO registration) {
		
		ResponseObjectDTO response = new ResponseObjectDTO();
		CustomerMaster customer = new CustomerMaster();
		MembershipRegistration membership = new MembershipRegistration();
		
		customer.setAddress1(registration.getAddress1());
		customer.setAddress2(registration.getAddress2());
		customer.setCityId(cityMasterRepository.findById(Long.valueOf(registration.getCity())).get());
		customer.setCreditCardType(registration.getCreditCardType());
		customer.setDrivingLicence(registration.getDrivingLicence());
		customer.setDlIssuedBy(registration.getDlIssuedBy());
		customer.setDlValidThrough(registration.getDlValidThrough());
		customer.setPassportNumber(registration.getPassportNumber());
		customer.setPassportIssuedBy(registration.getPassportIssuedBy());
		customer.setPassportValidUpto(registration.getPassportValidUpto());
		customer.setDob(registration.getDob());
		customer.setPhone(registration.getPhone());
		customer.setPin(registration.getPin());
		customer.setStateId(stateMasterRepository.findById(Long.valueOf(registration.getState())).get());
		customer.setEmail(registration.getEmail());
		customer.setFirstName(registration.getFirstName());
		customer.setLastName(registration.getLastName());
		
		CustomerMaster cust = customerMasterService.registerCustomer(customer);
		
		membership.setCustomer_id(cust);
		membership.setPassword(registration.getPassword());
		membership.setCarTypeId(carTypeRepo.getById(Long.valueOf(registration.getCarTypeId())));
		
		MembershipRegistration member = membershipRegistrationRepository.save(membership);
		
		response.setResponseCode("REGISTERED");
		response.setResponseMessage(String.valueOf(member.getMemRegId()));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
		
	}
	
}
