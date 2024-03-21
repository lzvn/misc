package db.dao.implementation;

import db.dao.GenreDao;
import model.entities.Movie;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GenreDaoJDBC implements GenreDao {
    private Connection conn;

    public GenreDaoJDBC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public Long insert(String name) {
        try(PreparedStatement insert = conn.prepareStatement("insert into genres values (null, ?)",
                Statement.RETURN_GENERATED_KEYS)) {
            insert.setString(1, name.toLowerCase());
            if(insert.executeUpdate() == 0) {
                throw new SQLException("Insertion failed, no rows were affected");
            }

            try(ResultSet genKeys = insert.getGeneratedKeys()) {
                if(genKeys.next()) {
                    return genKeys.getLong(1);
                } else {
                    throw new SQLException("Insertion failed, rows were affected, but no ID obtained");
                }
            }
        } catch(SQLException e) {
            System.out.println("ERROR GENREDAO");
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public String get(Long id) {
        String name = null;
        try(PreparedStatement query = conn.prepareStatement("select name from genres where id=?")) {
            query.setLong(1, id);
            try(ResultSet result = query.executeQuery()) {
                if(result.next()) {
                    name=result.getString("name");
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }
        return name;
    }

    //TODO: this smells, rethink the genres table
    @Override
    public Long getId(String name) {
        Long id = null;
        try(PreparedStatement query = conn.prepareStatement("select id from genres where name=?")) {
            query.setString(1, name);
            try(ResultSet result = query.executeQuery()) {
                if(result.next()) {
                    id=result.getLong("id");
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

    @Override
    public List<String> getAll() {
        List<String> genres = new ArrayList<>();

        try(Statement query = conn.createStatement()) {
            try(ResultSet results = query.executeQuery("select name from genres")) {
                while(results.next()) {
                    genres.add(results.getString("name"));
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }

        return genres;
    }

    @Override
    public void update(Long id, String newName) {
        try(PreparedStatement update = conn.prepareStatement("update genres set name=? where id=?")) {
            update.setString(1, newName.toLowerCase());
            update.setLong(2, id);
            if(update.executeUpdate()==0) {
                throw new SQLException("Update failed, no rows were affected");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        try(PreparedStatement delete = conn.prepareStatement("delete from genres where id=?")) {
            delete.setLong(1, id);
            if(delete.executeUpdate()==0) {
                throw new SQLException("Deletion failed, no rows were affected");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
