package com.lzvn.mld2.db.dao.enums;

public enum MovieCols {
  ID,
  TITLE,
  DIRECTOR_ID,
  SYNOPSIS,
  RELEASE_DATE,
  DURATION;

  @Override
  public String toString() {
    return this.name().toLowerCase();
  }

  public static MovieCols fromString(String str) {
    str = str.toLowerCase();
    if(str.equals("id")) {
      return MovieCols.ID;
    } else if(str.equals("director") || str.equals("director_id")) {
      return MovieCols.DIRECTOR_ID;
    } else if(str.equals("synopsis")) {
      return MovieCols.SYNOPSIS;
    } else if(str.equals("release_date") || str.equals("year")) {
      return MovieCols.RELEASE_DATE;
    } else if(str.equals("duration")) {
      return MovieCols.DURATION;
    } else {
      return MovieCols.TITLE;
    }
  }
}
