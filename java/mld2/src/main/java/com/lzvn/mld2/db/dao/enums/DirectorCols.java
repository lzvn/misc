package com.lzvn.mld2.db.dao.enums;

public enum DirectorCols {
  ID,
  NAME,
  BIRTHDATE;

  @Override
  public String toString() {
    return this.name().toLowerCase();
  }
}
