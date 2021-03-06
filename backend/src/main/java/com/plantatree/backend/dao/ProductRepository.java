package com.plantatree.backend.dao;

import com.plantatree.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {

  Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

  Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);

}
