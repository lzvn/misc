package com.lzvn.mld2.db.dao;

//TODO: find a way to use this as a generic DAO and make a dryer code

public interface Dao<T> {
    <T> int insert(T obj);
    <T> T get(Integer id);
    <T> void update(T obj);
    <T> void delete(Integer id);
}
