package com.plantatree.backend.dto;

import com.plantatree.backend.entity.Address;
import com.plantatree.backend.entity.Customer;
import com.plantatree.backend.entity.Order;
import com.plantatree.backend.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

  private Customer customer;

  private Address shippingAddress;

  private Address billingAddress;

  private Order order;

  private Set<OrderItem> orderItems;

}
