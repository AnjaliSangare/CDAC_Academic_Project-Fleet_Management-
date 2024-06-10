package com.cdac.fleetmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.CustomerMaster;

@Repository
public interface CustomerMasterRepository extends JpaRepository<CustomerMaster, Long> {
	public List<CustomerMaster> findAll();
	public CustomerMaster save(CustomerMaster customer);
	public CustomerMaster findByEmail(String Email);
}
