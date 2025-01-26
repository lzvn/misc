from models import *

import datetime
import re


DEFAULT_BIRTHDATE = "01/01/0001"
DEFAULT_SYNOPSIS = "A fascinating story"
titleIndex = 0
directorIndex = 7
# synopsisIndex = -1 # the dataset I found has no synopsis for these movies, so I will write the default synospsis for all and I just left it here to register it
genreIndex = 2
releaseDateIndex = 4
durationIndex = 14

def isInList(candidate, list):
    inList = -1
    for i in list:
        if candidate==i.name:
            inList = i.id
            break
    return inList

def monthToNumber(month):
    names = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    monthLowcase = month.lower()
    number = -1

    for i in range(0, 12):
        if monthLowcase == names[i]:
            number = i+1
        
    return number


def makeDate(csvDate):
    ## TODO handle dayless entries
    dateRaw = re.sub(r'\(([^\)]+)\)', "", csvDate).split(' ')[:-1]
    if len(dateRaw) == 3:
        date = datetime.date(int(dateRaw[2]), monthToNumber(dateRaw[0]), int(dateRaw[1][:-1]))
    elif len(dateRaw) == 2:
        date = datetime.date(int(dateRaw[1]), monthToNumber(dateRaw[0]), 1)
    elif len(dateRaw) == 1:
        date = datetime.date(int(dateRaw[0]), 1, 1)
    else:
        date = datetime.date(1, 1, 1)

    return date

def extractMovie(info):

    #TODO put here only the parts necessary to make a Movie object the everything revolviing the "genre list", "director list" and databases goes back to the original script

    newGenre = Genre(-1, info[genreIndex])
    newDirector = Director(-1, info[directorIndex], DEFAULT_BIRTHDATE)

    csvReleaseDate = info[releaseDateIndex]
    #csvReleaseDate model June 13, 1980 (United States) some may no have the day
    releaseDate = makeDate(csvReleaseDate)

    newMovie = Movie(info[titleIndex], newDirector, DEFAULT_SYNOPSIS, newGenre, releaseDate, info[durationIndex])
    
    return newMovie