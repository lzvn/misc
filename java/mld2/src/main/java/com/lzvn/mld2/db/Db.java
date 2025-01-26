package com.lzvn.mld2.db;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Db {
    private static Connection conn;

    public static Connection getConn(String propsPath) {
        if(conn==null) {
            Properties props = loadProps(propsPath);
            try {
				Class.forName("org.mariadb.jdbc.Driver");
                conn = DriverManager.getConnection((String) props.get("url"), props);
            } catch(SQLException e) {
                System.out.println(e.getMessage());
                e.printStackTrace();
            } catch(ClassNotFoundException e) {
				System.out.println(e.getMessage());
                e.printStackTrace();
			}
        }

        return conn;
    }
    public static Connection getConn() {
        return getConn("/home/r2d2/Documentos/prg/java-e-spring/mld2/src/main/java/com/lzvn/mld2/db/db.properties");
    }

    private static Properties loadProps(String propsPath) {
        Properties props = new Properties();
        try {
            FileInputStream file = new FileInputStream(propsPath);
            props.load(file);
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return props;
    }

    public static <T extends AutoCloseable> void close(T dbObj) {
        if(dbObj == null) return;

        try {
            dbObj.close();
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
