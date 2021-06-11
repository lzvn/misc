package db.dao;

import db.Db;
import db.dao.implementation.DirectorDaoJDBC;
import db.dao.implementation.GenreDaoJDBC;
import db.dao.implementation.MovieDaoJDBC;

public class DaoFactory {
    private static final String testDbProps = "./test/db/test-db.properties";
    public static DirectorDao makeDirectorDao() {
        return new DirectorDaoJDBC(Db.getConn());
    }
    public static MovieDao makeMovieDao() {
        return new MovieDaoJDBC(Db.getConn());
    }
    public static GenreDao makeGenreDao() {
        return new GenreDaoJDBC(Db.getConn());
    }

    public static DirectorDao makeTestDirectorDao() {
        return new DirectorDaoJDBC(Db.getConn(testDbProps));
    }
    public static MovieDao makeTestMovieDao() {
        return new MovieDaoJDBC(Db.getConn(testDbProps));
    }
    public static GenreDao makeTestGenreDao() {
        return new GenreDaoJDBC(Db.getConn(testDbProps));
    }
}
