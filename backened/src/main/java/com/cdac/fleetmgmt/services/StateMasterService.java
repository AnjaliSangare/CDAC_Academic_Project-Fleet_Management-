package com.cdac.fleetmgmt.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.StateMaster;
import com.cdac.fleetmgmt.repository.StateMasterRepository;


@Service
public class StateMasterService {
	
	@Autowired
	StateMasterRepository stateMasterRepository;
	
	public List<StateMaster> getAllState() {
		List<StateMaster> returnList = new ArrayList<>();
		
		returnList = stateMasterRepository.findAll();
		
		return returnList;
	}
	
	public String addState(StateMaster state) {
		StateMaster state1;
		try {
			state1 = stateMasterRepository.save(state);
		} catch (Exception e) {
			return e.getCause().toString();
		}
		
		if(state1==null) {
			return "Error";
		} else {
			 return "Success";
		}

	}
	
	public String deleteStateById(Long id) {
		StateMaster stateFound = stateMasterRepository.getById(id);
		if(stateFound==null) {
			return "Error";
		} else {
			stateMasterRepository.delete(stateFound);
			return "Success";
		}
	}
	
	public StateMaster getStateById(Long id) {
		StateMaster stateFound = stateMasterRepository.findById(id).get();
		return stateFound;

	}
	
	public String updateState(StateMaster state) {
		
		StateMaster stateFound = stateMasterRepository.getById(state.getStateId());
		
		stateFound.setStateName(state.getStateName());

		
		StateMaster state1 = stateMasterRepository.save(stateFound);
		
		if(state1==null) {
			return "Error";
		} else {
			 return "Success";
		}

	}
	
}


