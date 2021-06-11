package db;

import db.dao.DaoFactory;
import db.dao.DirectorDao;
import db.dao.MovieDao;
import model.entities.Director;
import model.entities.Movie;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class MovieDaoTests {

    @Test
    public void generalTest() throws ParseException {
        MovieDao movieDao = DaoFactory.makeTestMovieDao();
        DirectorDao directorDao = DaoFactory.makeTestDirectorDao();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        Director testDir = new Director(null, "Bob", sdf.parse("01/01/1970"));
        Long testDirId = directorDao.insert(testDir);
        testDir.setId(testDirId);

        //insertion and selection
        Movie testMovie = new Movie(null, "Great Adventures", testDir,
                "A hero goes on a journey to the unexpected", sdf.parse("04/05/1996"), 90);
        Long genKey = movieDao.insert(testMovie);

        Movie insertedMovie = movieDao.get(genKey);

        assertEquals(testMovie.getTitle(), insertedMovie.getTitle());
        assertEquals(testMovie.getDirector(), insertedMovie.getDirector());
        assertEquals(testMovie.getSynopsis(), insertedMovie.getSynopsis());
        assertEquals(testMovie.getReleaseDate(), insertedMovie.getReleaseDate());
        assertEquals(testMovie.getDuration(), insertedMovie.getDuration());

        //update
        testMovie.setId(genKey);
        testMovie.setTitle("Dragonhunter");
        testMovie.setSynopsis("A great hero hunts down an evil dragon");
        testMovie.setReleaseDate(sdf.parse("08/12/1999"));
        testMovie.setDuration(150);

        movieDao.update(testMovie);
        Movie updatedMovie = movieDao.get(testMovie.getId());

        assertEquals(testMovie.getTitle(), updatedMovie.getTitle());
        assertEquals(testMovie.getSynopsis(), updatedMovie.getSynopsis());
        assertEquals(testMovie.getReleaseDate(), updatedMovie.getReleaseDate());
        assertEquals(testMovie.getDuration(), updatedMovie.getDuration());

        //deletion
        movieDao.delete(testMovie.getId());
        directorDao.delete(testDir.getId());
        assertNull(movieDao.get(testMovie.getId()));
    }
}
