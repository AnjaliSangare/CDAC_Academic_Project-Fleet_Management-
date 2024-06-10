package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.CarMaster;

@Repository
public interface CarRepository extends JpaRepository<CarMaster, Long>{

}
