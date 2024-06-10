package com.cdac.fleetmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.fleetmgmt.entities.AddOnMaster;
import com.cdac.fleetmgmt.entities.BookingDetails;
import com.cdac.fleetmgmt.repository.AddOnMasterRepository;
import com.cdac.fleetmgmt.repository.BookinDetailsRepository;

@Service
public class BookingDetailServiceImpl implements BookingDetailsService {

	@Autowired
	private BookinDetailsRepository bookingDetailRepository;

	@Autowired
	private AddOnMasterRepository addonMasterRepository;

	@Override
	public void createBookingDetailsWithAddons(Long[] addonIds) {
		for (Long addonId : addonIds) {
			AddOnMaster addonMaster = addonMasterRepository.findById(addonId).orElse(null);

			if (addonMaster != null) {
				BookingDetails bookingDetails = new BookingDetails();
				bookingDetails.setAddonId(addonMaster.getAddOnId());
				bookingDetails.setAddonRate(addonMaster.getAddOnRate());
				//bookingDetails.setBookingId(8);

				bookingDetailRepository.save(bookingDetails);
			}
		}
	}

}
