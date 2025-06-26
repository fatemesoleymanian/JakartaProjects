package com.example.SpringSecurity.service;

import com.example.SpringSecurity.model.UserPrinciples;
import com.example.SpringSecurity.model.Users;
import com.example.SpringSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Users user = repository.findByUsername(username);

        if (user == null) {
            System.out.println("user not found!!!");
            throw new UsernameNotFoundException("user not found");
        }
        return new UserPrinciples(user);
    }
}
