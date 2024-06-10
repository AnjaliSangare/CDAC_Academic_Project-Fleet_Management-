package com.cdac.fleetmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.fleetmgmt.entities.StateMaster;

@Repository
public interface StateMasterRepository extends JpaRepository<StateMaster, Long>{
public List<StateMaster> findAll();
public StateMaster save(StateMaster state);
public StateMaster findByStateName(String StateName);
}
