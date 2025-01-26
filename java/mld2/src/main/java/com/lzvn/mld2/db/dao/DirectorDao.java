package com.lzvn.mld2.db.dao;

//TODO: find a way to use this as a generic DAO and make a dryer code

import com.lzvn.mld2.model.entities.Director;

import java.util.List;

public interface DirectorDao {
    Long insert(Director obj);
    Director get(Long id);
    List<Director> getAll();
    void update(Director obj);
    void delete(Long id);
}
