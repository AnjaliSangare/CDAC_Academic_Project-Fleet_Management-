package com.cdac.fleetmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.fleetmgmt.entities.InvoiceDetailTableReturn;

public interface ReturnRepository extends JpaRepository<InvoiceDetailTableReturn, Long> {

}
