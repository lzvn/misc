package com.lzvn.mld2.db.dao;

import com.lzvn.mld2.db.Db;
import com.lzvn.mld2.db.dao.implementation.DirectorDaoJDBC;
import com.lzvn.mld2.db.dao.implementation.GenreDaoJDBC;
import com.lzvn.mld2.db.dao.implementation.MovieDaoJDBC;

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
