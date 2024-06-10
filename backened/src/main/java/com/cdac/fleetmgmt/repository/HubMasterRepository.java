package com.cdac.fleetmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.fleetmgmt.entities.CityMaster;
import com.cdac.fleetmgmt.entities.HubMaster;

public interface HubMasterRepository extends JpaRepository<HubMaster,Long> {

	List<HubMaster> getHubByCityId(CityMaster cityId);

}
