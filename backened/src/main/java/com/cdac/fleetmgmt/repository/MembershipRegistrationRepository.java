package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.fleetmgmt.entities.MembershipRegistration;

public interface MembershipRegistrationRepository extends JpaRepository<MembershipRegistration, Long>  {
	
}
