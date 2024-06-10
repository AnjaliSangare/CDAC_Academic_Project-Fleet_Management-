package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.fleetmgmt.entities.AddOnMaster;

public interface AddOnRepository extends JpaRepository<AddOnMaster, Long> {

}
