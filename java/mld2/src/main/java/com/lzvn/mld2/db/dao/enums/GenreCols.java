package com.lzvn.mld2.db.dao.enums;

public enum GenreCols {
  ID,
  NAME;

  @Override
  public String toString() {
    return this.name().toLowerCase();
  }
}
