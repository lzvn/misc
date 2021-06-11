package db.dao;
import db.dao.enums.MovieCols;

//TODO: find a way to use this as a generic DAO and make a dryer code

import model.entities.Movie;

import java.util.List;

public interface MovieDao<T> {
    Long insert(Movie obj);
    Movie get(Long id);
    List<Movie> getAll();
	<T> List<Movie> getByCol(MovieCols column, T value);
    List<Movie> searchBy(String param, String q); //makes a more generic search
    void update(Movie obj);
    void delete(Long id);
}
