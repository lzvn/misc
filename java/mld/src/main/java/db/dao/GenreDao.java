package db.dao;

//TODO: find a way to use this as a generic DAO and make a dryer code

import model.entities.Movie;

import java.util.List;

public interface GenreDao {
    Long insert(String name);
    String get(Long id);
    Long getId(String name);
    List<String> getAll();
    void update(Long id, String newName);
    void delete(Long id);
}
