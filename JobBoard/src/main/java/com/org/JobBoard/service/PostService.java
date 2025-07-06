package com.org.JobBoard.service;

import com.org.JobBoard.model.Post;
import com.org.JobBoard.repository.PostRepository;
import com.org.JobBoard.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepository repository;

    @Autowired
    SearchRepository searchRepository;

    public List<Post> findAll(){
        return repository.findAll();
    }
    public void findById(String id){
    }

    public List<Post> searchByText(String text){
        return searchRepository.findByText(text);
    }

    public Post create(Post post) {
        return repository.save(post);
    }
    public Post update(Post post) {
        return repository.save(post);
    }
    public void delete(Post post) {
        repository.save(post);
    }
}
