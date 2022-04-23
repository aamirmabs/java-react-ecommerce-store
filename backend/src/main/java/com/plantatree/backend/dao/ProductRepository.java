package com.plantatree.backend.dao;

import com.plantatree.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {

}
