package utilities;

import org.springframework.stereotype.Component;

import com.cdac.fleetmgmt.entities.AddOnMaster;
import com.cdac.fleetmgmt.repository.AddOnRepository;

@Component
public class Utilities {
	
	public static double calculateAddOnTotal(int[] arr, AddOnRepository addOnRepo) {
		double total = 0;
		
		for(int i=0; i<arr.length; i++) {
			double rate = 0;
			AddOnMaster addOn = addOnRepo.getById(Long.valueOf(arr[i]));
			total += addOn.getAddOnRate();
		}
		
		return total;
	}
}
