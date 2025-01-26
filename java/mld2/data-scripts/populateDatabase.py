import mariadb
import csv
import sys


import db
from models import *
from auxFunctions import *



startLine = 0
endLine = 10


sys.exit(0)
# class Movie: def __init__(self, title, director, synopsis, genres, release_date, duration)
# class Genre: def __init__(self, id, name):
# class Director: def __init__(self, id, name, birthdate):

genresList = []
directorsList = []

try:
    conn = mariadb.connect(
        user='',
        password='',
        host= '127.0.0.1',
        port = 3306,
        database = 'mlddb'
    )
    cursor = conn.cursor()
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)


##TODO remove the 'conn.comit()'s after the 'insert' methods and put them inside the methods to be executed automatically


try:
    with open('movies.csv') as csvfile:
        movies = csv.reader(csvfile, delimiter=',', quotechar='"')
        movies.__next__()
        for row in movies:
            #name,rating,genre,year,released,score,votes,director,writer,star,country,budget,gross,company,runtime

            ## TODO there must be a way to improve this and use one genre and one director object that I can use later. Fix this
            newMovie = extractMovie(row)

            newMovie.genres.id = isInList(newMovie.genres.name, genresList)
            if newMovie.genres.id == -1:
                newMovie.genres.id = db.insertGenre(cursor, newMovie.genres.name)
                conn.commit()
                genresList.append(newMovie.genres)

            newMovie.director.id = isInList(newMovie.director.name, directorsList)
            if newMovie.director.id == -1:
                newMovie.director.id = db.insertDirector(cursor, newMovie.director.name, newMovie.director.birthdate)
                conn.commit()
                directorsList.append(newMovie.director)

            db.insertMovie(cursor, newMovie)
            conn.commit()
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    conn.close()
    sys.exit(1)

conn.close()
