package db.dao.implementation;

import db.Db;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import db.dao.DirectorDao;
import model.entities.Director;

public class DirectorDaoJDBC implements DirectorDao {

    private Connection conn;

    public DirectorDaoJDBC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public Long insert(Director obj) {
        try(PreparedStatement insert = conn.prepareStatement(
                "insert into directors values "+
                        "(null, ?, ?);", Statement.RETURN_GENERATED_KEYS);
        ) {
            insert.setString(1, obj.getName().toLowerCase());
            insert.setDate(2, new Date(obj.getBirthDate().getTime()));

            if(insert.executeUpdate() == 0)
                throw new SQLException("Insertion failed, no rows affected");

            try(ResultSet genKeys = insert.getGeneratedKeys()) {
                if(genKeys.next()) {
                    return genKeys.getLong(1);
                } else {
                    throw new SQLException("Insertion failed, one or more rows were affected, " +
                            "but no ID could be obtained");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public Director get(Long id) {
        Director director = null;
        PreparedStatement query = null;
        ResultSet result = null;

        try {
            query = conn.prepareStatement("select id, name, birthdate from directors where id = ?");
            query.setLong(1, id);
            result = query.executeQuery();
            if(result.next()) {
                director = directorFromResult(result);
            }
        } catch(SQLException e) {
            e.printStackTrace();
        } finally {
            Db.close(query);
            Db.close(result);
        }

        return director;
    }

    @Override
    public List<Director> getAll() {
        List<Director> directors = new ArrayList<>();
        try(Statement query = conn.createStatement()) {
            try(ResultSet results =
                        query.executeQuery("select id, name, birthdate from directors")) {
                while(results.next()) {
                    directors.add(directorFromResult(results));
                }
            }
        } catch(SQLException e) {
            e.printStackTrace();
        }

        return directors;
    }

    @Override
    public void update(Director obj) {
        try(PreparedStatement update =
            conn.prepareStatement("update directors set name=?, birthdate=? where id=?")
        ) {
            update.setString(1, obj.getName().toLowerCase());
            update.setDate(2, new Date(obj.getBirthDate().getTime()));
            update.setLong(3, obj.getId());
            if(update.executeUpdate() == 0)
                throw new SQLException("Update failed, no rows were affected");
        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        try(PreparedStatement delete = conn.prepareStatement("delete from directors where id = ?")) {
            delete.setLong(1, id);
            if(delete.executeUpdate() == 0)
                throw new SQLException("Deletion failed, no rows were affected");
        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    private Director directorFromResult(ResultSet result) throws SQLException {
        return new Director(result.getLong("id"),
                result.getString("name"), result.getDate("birthdate"));
    }
}
