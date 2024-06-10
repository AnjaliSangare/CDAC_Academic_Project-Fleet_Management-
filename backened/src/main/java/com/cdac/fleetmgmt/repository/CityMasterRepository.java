package com.cdac.fleetmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.fleetmgmt.entities.CityMaster;

public interface CityMasterRepository extends JpaRepository<CityMaster, Long>{
	
	@Query("from CityMaster c where c.stateId.stateId = :stateId")
	List<CityMaster> getCityByStateId(@Param("stateId") Long stateId);
	
}


