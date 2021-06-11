package db;

import db.dao.DaoFactory;
import db.dao.GenreDao;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class GenreDaoTests {
    @Test
    public void generalTest() {
        GenreDao genreDao = DaoFactory.makeTestGenreDao();

        //insertion and selection
        Long genKey = genreDao.insert("Drama");
        String insertedGenre = genreDao.get(genKey);
        assertEquals("Drama", insertedGenre);

        //update
        genreDao.update(genKey, "Action");
        String updatedGenre = genreDao.get(genKey);
        assertEquals("Action", updatedGenre);

        //deletion
        genreDao.delete(genKey);
        assertNull(genreDao.get(genKey));
    }

    @Test
    public void getAllTest() {
        GenreDao genreDao = DaoFactory.makeTestGenreDao();
        String[] testGenres = new String[]{"Adventure", "Fighting", "Comedy"};
        Long[] testGenresIds = new Long[3];
        for(int i = 0; i < testGenres.length; i++) {
            testGenresIds[i] = genreDao.insert(testGenres[i]);
        }

        List<String> insertedGenres = genreDao.getAll();
        for(int i = 0; i < testGenres.length; i++) {
            assertTrue(insertedGenres.contains(testGenres[i]));
        }
        for(int i = 0; i < testGenres.length; i++) {
            genreDao.delete(testGenresIds[i]);
        }
    }
}
