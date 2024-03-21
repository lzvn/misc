package db;

import db.dao.DaoFactory;
import db.dao.DirectorDao;
import db.dao.GenreDao;
import model.entities.Director;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class DirectorDaoTests {

    @Test
    void generalTest() throws ParseException {
        //TODO: add the list of movies to testing
        DirectorDao directorDao = DaoFactory.makeTestDirectorDao();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Director testDir = new Director(null, "Bob Sacamano", sdf.parse("02/01/2000"));

        //insertion and selection
        long generatedKey = directorDao.insert(testDir);
        Director insertedDir = directorDao.get(generatedKey);
        assertEquals(testDir.getName().toLowerCase(), insertedDir.getName().toLowerCase());
        assertEquals(testDir.getBirthDate(), testDir.getBirthDate());

        //updating
        testDir.setId(generatedKey);
        testDir.setName("Robert Sacamano");
        testDir.setBirthDate(sdf.parse("05/04/2003"));
        directorDao.update(testDir);
        Director updatedDir = directorDao.get(testDir.getId());
        assertEquals(testDir.getName().toLowerCase(), updatedDir.getName().toLowerCase());
        assertEquals(testDir.getBirthDate(), updatedDir.getBirthDate());

        //deletion
        directorDao.delete(testDir.getId());
        assertNull(directorDao.get(testDir.getId()));
    }

    @Test
    public void getAllDirectorsTest() throws ParseException {
        DirectorDao directorDao = DaoFactory.makeTestDirectorDao();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        Director[] testDirectors = new Director[]{
                new Director(null, "amanda", sdf.parse("01/01/1980")),
                new Director(null, "bob", sdf.parse("01/01/1970")),
                new Director(null, "caesar", sdf.parse("01/01/1960"))
        };
        Long testDirId = 0L;

        for(int i = 0; i < testDirectors.length; i++) {
            testDirId = directorDao.insert(testDirectors[i]);
            testDirectors[i].setId(testDirId);
        }

        List<Director> insertedDirectors = directorDao.getAll();
        for(int i = 0; i < testDirectors.length; i++) {
            assertTrue(insertedDirectors.contains(testDirectors[i]));
            directorDao.delete(testDirectors[i].getId());
        }
    }
}
