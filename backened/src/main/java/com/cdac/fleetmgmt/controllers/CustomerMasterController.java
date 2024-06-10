package com.cdac.fleetmgmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.fleetmgmt.entities.CustomerMaster;
import com.cdac.fleetmgmt.services.CustomerMasterService;

@RestController
@RequestMapping("customer")
@CrossOrigin(origins="*")
public class CustomerMasterController {
	
	@Autowired
	@Qualifier(value = "CustomerService")
	CustomerMasterService customerMasterService;
	
	@GetMapping()
	public ResponseEntity<?> getAllCustomers() {
		return new ResponseEntity<>(HttpStatus.CREATED) ;
	}
	
	@GetMapping("/{id}")

	public CustomerMaster getCustomerById(@PathVariable Long id) {
		System.out.println(id);
		return customerMasterService.getCustomerById(id);
	}
	
	@PostMapping("/addcustomer")
	public String addCustomer(@RequestBody CustomerMaster customer) {
	
		return customerMasterService.addCustomer(customer);
	}
	
	@PutMapping("")
	public String updateCustomer(@RequestBody CustomerMaster customer) {
		return customerMasterService.updateCustomer(customer);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable Long id) {
		return customerMasterService.deleteCustomerById(id);
	}
			
}
