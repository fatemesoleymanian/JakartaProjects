package com.org.JobBoard.controller;

import com.org.JobBoard.model.Post;
import com.org.JobBoard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostService service;

    @GetMapping("")
    public List<Post> getAllPosts(){
        return service.findAll();
    }

    @PostMapping("")
    public Post createPost(@RequestBody Post post){
        return service.create(post);
    }

    @GetMapping("/search/{text}")
    public List<Post> searchPosts(@PathVariable String text){
        return service.searchByText(text);
    }


}
