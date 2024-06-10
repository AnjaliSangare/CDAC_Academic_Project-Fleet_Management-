package com.cdac.fleetmgmt.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.repository.CustomerMasterRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.transaction.Transactional;

@Service(value = "CustomerService")
public class CustomerMasterService {
	
	@Autowired
	CustomerMasterRepository customerMasterRepository;
	
	@Autowired
	ObjectMapper mapper;
	
	public ResponseEntity<List<CustomerMaster>> getAllCustomer() {
		List<CustomerMaster> returnList = new ArrayList<>();
		
		returnList = customerMasterRepository.findAll();
		
		if(returnList!=null) {
			return new ResponseEntity<>(returnList, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(returnList, HttpStatus.NOT_FOUND);
		}
	}
	
	public String addCustomer(CustomerMaster customer) {
		
		CustomerMaster cust = customerMasterRepository.save(customer);

		if(cust==null) {
			return "Error";
		} else {
			 return "Success";
		}

	}
	
	public CustomerMaster registerCustomer(CustomerMaster customer) {
		return customerMasterRepository.save(customer);
	}
	
	public String deleteCustomerById(Long id) {
		@SuppressWarnings("deprecation")
		CustomerMaster customerFound = customerMasterRepository.getById(id);
		if(customerFound==null) {
			return "Error";
		} else {
			customerMasterRepository.delete(customerFound);
			return "Success";
		}
	}
	
	public CustomerMaster getCustomerById(Long id) {
		CustomerMaster customerFound = customerMasterRepository.findById(id).get();
		return customerFound;

	}
	
	public String updateCustomer(CustomerMaster customer) {

		CustomerMaster customerFound = customerMasterRepository.getReferenceById(customer.getCustomerId());
		
		customerFound.setAddress1(customer.getAddress1());
		customerFound.setAddress2(customer.getAddress2());
		customerFound.setCityId(customer.getCityId());
		customerFound.setCreditCardType(customer.getCreditCardType());
		customerFound.setDrivingLicence(customer.getDrivingLicence());
		customerFound.setDlIssuedBy(customer.getDlIssuedBy());
		customerFound.setDlValidThrough(customer.getDlValidThrough());
		customerFound.setPassportNumber(customer.getPassportNumber());
		customerFound.setPassportIssuedBy(customer.getPassportIssuedBy());
		customerFound.setPassportValidUpto(customer.getPassportValidUpto());
		customerFound.setDob(customer.getDob());
		customerFound.setPhone(customer.getPhone());
		customerFound.setPin(customer.getPin());
		customerFound.setStateId(customer.getStateId());
		customerFound.setEmail(customer.getEmail());
		customerFound.setFirstName(customer.getFirstName());
		customerFound.setLastName(customer.getLastName());
		
		CustomerMaster cust = customerMasterRepository.save(customerFound);
		
		if(cust==null) {
			return "Error";
		} else {
			 return "Success";
		}
		
	}
	
}
