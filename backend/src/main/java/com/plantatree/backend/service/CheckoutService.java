package com.plantatree.backend.service;

import com.plantatree.backend.dto.Purchase;
import com.plantatree.backend.dto.PurchaseResponse;

public interface CheckoutService {

  PurchaseResponse placeOrder(Purchase purchase);

}
