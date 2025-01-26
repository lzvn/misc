class Director:
    def __init__(self, id, name, birthdate):
        self.id = id
        self.name = name
        self.birthdate = birthdate #TODO: search for the better way to represent dates here 

class Genre:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class Movie:
    def __init__(self, title, director, synopsis, genres, releaseDate, duration):
        if(len(title) > 49):
            self.title = title[0:49]
        else:
            self.title = title

        self.director = director

        if(len(title) > 299):
            self.synopsis = synopsis[0:299]
        else:
            self.synopsis = synopsis
        

        self.genres = genres
        self.releaseDate = releaseDate  #TODO: search for the better way to represent dates here

        if duration != "":
            self.duration = int(float(duration))
        else:
            self.duration = 0