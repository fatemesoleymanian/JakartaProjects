package com.example.ecommerceproject.service;

import com.example.ecommerceproject.model.Product;
import com.example.ecommerceproject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService
{
    @Autowired
    private ProductRepository repository;
    public List<Product> getAllProducts() {
     return repository.findAll();
    }

    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
        product.setImageName(imageFile.getOriginalFilename());
        product.setImageType(imageFile.getContentType());
        product.setImageData(imageFile.getBytes());
        return repository.save(product);
    }

    public void deleteProduct(int id) {
        repository.deleteById(id);
    }

    public Product getProductById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Product updateProduct(int id, Product product, MultipartFile imageFile) throws IOException {
        if(repository.findById(id).orElse(null) == null){
            return null;
        }else {
            product.setImageData(imageFile.getBytes());
            product.setImageName(imageFile.getOriginalFilename());
            product.setImageType(imageFile.getContentType());
            return repository.save(product);
        }
    }

    public List<Product> search(String keyword) {
        return repository.search(keyword);
    }
}
