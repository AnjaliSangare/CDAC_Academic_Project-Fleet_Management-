package com.cdac.fleetmgmt.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class InvoiceDetailTableReturn {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long invoiceDetailId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "invoiceId", referencedColumnName = "invoiceId")
	public InvoiceHeaderTableHandover invoiceId;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "addOnId", referencedColumnName = "addOnId")
//	public AddOnMaster addOnId;
	
	public double addOnAmt;
	
	public long getInvoiceDetailId() {
		return invoiceDetailId;
	}
	public void setInvoiceDetailId(long invoiceDetailId) {
		this.invoiceDetailId = invoiceDetailId;
	}
	public double getAddOnAmt() {
		return addOnAmt;
	}
	public void setAddOnAmt(double addOnAmt) {
		this.addOnAmt = addOnAmt;
	}
//	public AddOnMaster getAddOnId() {
//		return addOnId;
//	}
//	public void setAddOnId(AddOnMaster addOnId) {
//		this.addOnId = addOnId;
//	}
	public void setInvoiceId(InvoiceHeaderTableHandover invoiceId) {
		this.invoiceId = invoiceId;
	}
	public InvoiceHeaderTableHandover getInvoiceId() {
		return invoiceId;
	}
	@Override
	public String toString() {
		return "InvoiceDetailTableReturn [invoiceDetailId=" + invoiceDetailId + ", invoiceId=" + invoiceId
				+ ", addOnAmt=" + addOnAmt + "]";
	}
	
	
//	@Override
//	public String toString() {
//		return "InvoiceDetailTableReturn [invoiceDetailId=" + invoiceDetailId + ", invoiceId=" + invoiceId
//				+ ", addOnId=" + addOnId + ", addOnAmt=" + addOnAmt + "]";
//	}
	
}
