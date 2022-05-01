package com.plantatree.backend.service;

import com.plantatree.backend.dao.CustomerRepository;
import com.plantatree.backend.dto.Purchase;
import com.plantatree.backend.dto.PurchaseResponse;
import com.plantatree.backend.entity.Customer;
import com.plantatree.backend.entity.Order;
import com.plantatree.backend.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

  private CustomerRepository customerRepository;

  @Autowired
  public CheckoutServiceImpl(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @Override
  @Transactional
  public PurchaseResponse placeOrder(Purchase purchase) {

    // retrieve order info from dto
    Order order = purchase.getOrder();


    // generate tracking number
    String orderTrackingNumber = generateOrderTrackingNumber();
    order.setOrderTrackingNumber(orderTrackingNumber);


    // populate order with orderItems
    Set<OrderItem> orderItems = purchase.getOrderItems();
    orderItems.forEach(item -> order.add(item));


    // populate order with billingAddress and shippingAddress
    order.setBillingAddress(purchase.getBillingAddress());
    order.setShippingAddress(purchase.getShippingAddress());


    // save to the database
    Customer customer = purchase.getCustomer();
    customer.add(order);


    // return response
    return new PurchaseResponse(orderTrackingNumber);
  }

  private String generateOrderTrackingNumber() {
    // generate a random UUID
    return UUID.randomUUID().toString();
  }

}
