package com.lzvn.mld2.db.dao.enums;

public enum MovieGenreRelCols {
  ID,
  MOVIE_ID,
  GENRE_ID;

  @Override
  public String toString() {
    return this.name().toLowerCase();
  }
}
