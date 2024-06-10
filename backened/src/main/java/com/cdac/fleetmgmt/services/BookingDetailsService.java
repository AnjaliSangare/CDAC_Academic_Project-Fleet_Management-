package com.cdac.fleetmgmt.services;

import org.springframework.stereotype.Service;

public interface BookingDetailsService {

	 void createBookingDetailsWithAddons(Long[] addonIds);
}
