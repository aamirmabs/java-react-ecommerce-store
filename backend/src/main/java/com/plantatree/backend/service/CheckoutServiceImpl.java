package com.plantatree.backend.service;

import com.plantatree.backend.dao.CustomerRepository;
import com.plantatree.backend.dto.Purchase;
import com.plantatree.backend.dto.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService {

  private CustomerRepository customerRepository;

  @Autowired
  public CheckoutServiceImpl(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @Override
  public PurchaseResponse placeOrder(Purchase purchase) {
    return null;
  }

}
