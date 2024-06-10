package com.cdac.fleetmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.CarTypeMaster;
import com.cdac.fleetmgmt.entities.HubMaster;

@Repository
public interface CarTypeMasterRepository extends JpaRepository<CarTypeMaster, Long> {

	List<CarTypeMaster> findAllByHubId(HubMaster hubMaster);

}
