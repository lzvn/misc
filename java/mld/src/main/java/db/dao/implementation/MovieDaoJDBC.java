package db.dao.implementation;

import db.Db;
import db.dao.DaoFactory;
import db.dao.DirectorDao;
import db.dao.GenreDao;
import db.dao.MovieDao;
import db.dao.enums.MovieCols;
import model.entities.Movie;

import javax.xml.transform.Result;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.text.SimpleDateFormat;

public class MovieDaoJDBC<T> implements MovieDao<T> {

    //TODO: add genres list to operations

    Connection conn;

    public MovieDaoJDBC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public Long insert(Movie obj) {
        try(PreparedStatement insert = conn.prepareStatement("insert into movies values "+
                "(null, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            insert.setString(1, obj.getTitle().toLowerCase());
            insert.setLong(2, obj.getDirector().getId());
            insert.setString(3, obj.getSynopsis().toLowerCase());
            insert.setDate(4, new Date(obj.getReleaseDate().getTime()));
            insert.setInt(5, obj.getDuration());

            if(insert.executeUpdate() == 0)
                throw new SQLException("Insert failed, no rows were affected");

            GenreDao genreDao = DaoFactory.makeGenreDao();
            List<String> genres = obj.getGenres();
            for(String genre : genres) {
                genre = genre.toLowerCase();
                PreparedStatement insertRelation = conn.prepareStatement("insert into movies_genres_relation "+
                        "values (null, ?, ?)" );
                Long genreId = genreDao.getId(genre);
                if(genreId == null) {
                    genreId = genreDao.insert(genre);
                }

                insertRelation.setLong(1, obj.getId());
                insertRelation.setLong(2, genreId);

                if(insertRelation.executeUpdate() == 0) {
                    throw new SQLException("Insertion failed, could not set all genres");
                }

                Db.close(insertRelation);
            }
            try(ResultSet genKeys = insert.getGeneratedKeys()) {
                if(genKeys.next()) {
                    return genKeys.getLong(1);
                } else {
                    throw new SQLException("Insert failed, rows were affected, but no ID was obtained");
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public Movie get(Long id) {
        Movie movie = null;
        try(PreparedStatement query = conn.prepareStatement("select * from movies where id=?")) {
            query.setLong(1, id);

            try(ResultSet result = query.executeQuery()) {
                if(result.next()) {
                    movie = movieFromResult(result);
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }
        return movie;
    }

    @Override
    public List<Movie> getAll() {
        List<Movie> movies = new ArrayList<>();
        try(Statement query = conn.createStatement()) {
            try(ResultSet results = query.executeQuery("select * from movies")) {
                while(results.next()) {
                    movies.add(movieFromResult(results));
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }
        return movies;
    }

	@Override
	public <T> List<Movie> getByCol(MovieCols column, T value) {
		List<Movie> movies = new ArrayList<>();

		try(PreparedStatement query = conn.prepareStatement("select * from movies where "+column+" = ?")) {
			switch(column) {
			case ID:
			case DIRECTOR_ID:
				query.setLong(1, (Long) value);
				break;
			case TITLE:
			case SYNOPSIS:
				query.setString(1, (String) value);
				break;
			case RELEASE_DATE:
				query.setDate(1, (Date) value);
				break;
			case DURATION:
				query.setInt(1, (Integer) value);
				break;
			}

			try(ResultSet result = query.executeQuery()) {
				while(result.next()) {
					movies.add(movieFromResult(result));
				}
			}
		} catch(SQLException e) {
			e.printStackTrace();
		}

		return movies;
	}

	@Override
    public List<Movie> searchBy(String param, String value) {
		List<Movie> movies = new ArrayList<>();
		String queryStr = "select movies.* from movies ";
		if(param.equals("director")) {
			queryStr+="inner join directors on directors.id=movies.director_id where directors.name like ?";
		} else if(param.equals("genre")) {
			queryStr+= "inner join movies_genres_relation on movies_genres_relation.movie_id = movies.id "+
				"inner join genres on genres.id = movies_genres_relation.genre_id  where genres.name like ?";
		} else if(param.equals("duration")) {
			queryStr += "where "+MovieCols.fromString(param)+" = ?";
		} else {
			queryStr += "where "+MovieCols.fromString(param)+" like ?";
		}
	
        try(PreparedStatement query = conn.prepareStatement(queryStr)) {
			if(param.equals("duration")) {
				query.setInt(1, Integer.parseInt(value));
			} else {
				query.setString(1, "%"+value+"%");
			}
            
            try(ResultSet results = query.executeQuery()) {
                while(results.next()) {
                    movies.add(movieFromResult(results));
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        }

		return movies;
    }

    @Override
    public void update(Movie obj) {
        try(PreparedStatement update = conn.prepareStatement("update movies set title=?, director_id=?, "+
                "synopsis=?, release_date=?, duration=?")) {
            update.setString(1, obj.getTitle().toLowerCase());
            update.setLong(2, obj.getDirector().getId());
            update.setString(3, obj.getSynopsis().toLowerCase());
            update.setDate(4, new Date(obj.getReleaseDate().getTime()));
            update.setInt(5, obj.getDuration());

            if(update.executeUpdate() == 0)
                throw new SQLException("Update failed, no rows were affected");

            PreparedStatement deleteRelations = conn.prepareStatement("delete from movies_genres_relation "+
            "where movie_id = ?");
            deleteRelations.setLong(1, obj.getId());
            deleteRelations.executeUpdate();

            GenreDao genreDao = DaoFactory.makeGenreDao();
            List<String> genres = obj.getGenres();
            for(String genre : genres) {
                genre = genre.toLowerCase();
                Long genreId = genreDao.getId(genre);
                if(genreId == null) {
                    genreId = genreDao.insert(genre);
                }

                PreparedStatement updateRelation = conn.prepareStatement("insert into movies_genres_relation "+
                "values (null, ?, ?)");
                updateRelation.setLong(1, obj.getId());
                updateRelation.setLong(2, genreId);

                if(updateRelation.executeUpdate()==0) {
                    throw new SQLException("Update failed, could not set all genres");
                }

                Db.close(updateRelation);
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        try(PreparedStatement delete = conn.prepareStatement("delete from movies where id=?")) {
            delete.setLong(1, id);
            if(delete.executeUpdate() == 0)
                throw new SQLException("Delete failed, no rows were affected");
        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    private Movie movieFromResult(ResultSet result) throws SQLException {
        DirectorDao dirDao = DaoFactory.makeDirectorDao();
        Movie movie =  new Movie(result.getLong("id"), result.getString("title"),
								 dirDao.get(result.getLong("director_id")), result.getString("synopsis"),
								 result.getDate("release_date"), result.getInt("duration"));
		List<String> genres = getGenresOfMovie(movie.getId());
		for(String genre : genres) {
			movie.addGenre(genre);
		}

		return movie;
    }

    private List<String> getGenresOfMovie(Long id) throws SQLException {
        List<String> genres = new ArrayList<>();

        try(PreparedStatement query = conn.prepareStatement("select movies_genres_relation.genre_id "+
        "from movies_genres_relation where movie_id = ?")) {
            query.setLong(1, id);
            try(ResultSet rs = query.executeQuery()) {
                GenreDao genreDao = DaoFactory.makeGenreDao();
                while(rs.next()) {
                    genres.add(genreDao.get(rs.getLong(1)));
                }
            }
        }
        return genres;
    }
}
