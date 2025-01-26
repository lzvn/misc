from models import *

def insertMovie(cursor, movie):
    cursor.execute('insert into movies values (null, ?, ?, ?, ?, ?)', (movie.title, movie.director.id, movie.synopsis, movie.releaseDate, movie.duration))
    movieId = cursor.lastrowid
    cursor.execute('insert into movies_genres_relation values (null, ?, ?)', (movieId, movie.genres.id))
    return movieId

def insertGenre(cursor, genre):
    cursor.execute('insert into genres values (null, ?)', (genre,))
    return cursor.lastrowid

def insertDirector(cursor, name, birthdate):
    cursor.execute('insert into directors values (null, ?, ?)', (name, birthdate))
    return cursor.lastrowid