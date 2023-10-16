package com.tech3.srinithi.service;



import java.util.List;

import com.tech3.srinithi.model.ServiceProvider;
import com.tech3.srinithi.request.ServiceProviderRequest;

public interface ServiceProviderService {
    List<ServiceProvider> getAllServiceProviders();
    ServiceProvider getServiceProviderById(long id);
    boolean createServiceProvider(ServiceProviderRequest serviceProviderRequest);
    boolean updateServiceProvider(long id, ServiceProviderRequest serviceProviderRequest);
    boolean deleteServiceProvider(long id);
}