package com.org.JobBoard.repository;

import com.org.JobBoard.model.Post;

import java.util.List;

public interface SearchRepository {
    public List<Post> findByText(String text);
}
