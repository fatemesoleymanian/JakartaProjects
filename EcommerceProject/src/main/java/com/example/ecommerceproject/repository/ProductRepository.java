package com.example.ecommerceproject.repository;

import com.example.ecommerceproject.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("SELECT p from Product p where "+
            "LOWER(p.name) like lower(concat( '%', :keyword,'%')) or "+
            "LOWER(p.description) like lower(concat( '%', :keyword,'%')) or "+
            "LOWER(p.brand) like lower(concat( '%', :keyword,'%')) or "+
            "LOWER(p.category) like lower(concat( '%', :keyword,'%'))")
    public List<Product> search(String keyword);
}
