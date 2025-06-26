package com.example.SpringSecurity.service;

import com.example.SpringSecurity.model.Users;
import com.example.SpringSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    JWTService jwt;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);
    public Users register(Users user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
       return repository.save(user);
    }

    public String verify(Users user) {
        Authentication authentication = authManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));

        if(authentication.isAuthenticated())
            return jwt.generateToken(user.getUsername());
        return "failure";
    }


}
