package com.tech3.srinithi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tech3.srinithi.model.ServiceProvider;



@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Long> {
 
}