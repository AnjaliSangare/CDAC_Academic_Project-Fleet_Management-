package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.AddOnMaster;

@Repository
public interface AddOnMasterRepository extends JpaRepository<AddOnMaster,Long> {

}
