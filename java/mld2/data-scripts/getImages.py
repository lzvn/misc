import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, WebDriverException
import bs4
import time
import sys
import urllib.request
from hashlib import sha256
from auxFunctions import *
import csv

outputFolder = "/home/r2d2/Documentos/prg/java-e-spring/mld2/src/main/resources/static/images/posters/"

baseUrl = "https://www.movieposterdb.com/search?"
titleParam= "q"
directorParam = "director"
urlSpace = "+"

posterImgClass = "poster_img"

firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument('--headless')
driver =  webdriver.Firefox(options=firefox_options)

#stopped at 14
#next time, startLine must be where it stopped (for instance, for stopped at 5, next startLine must be 5)
startLine = 14
endLine = 20

# investigate problem with https://www.movieposterdb.com/search?q=Dressed+to+Kill&director=Brian+De+Palma   It turns out that it was a problem with their database, movie without director

with open('movies.csv') as csvfile:
    movies = csv.reader(csvfile, delimiter=',', quotechar='"')
    movies.__next__()

    lineCount = startLine

    for i in range(0, startLine):
        movies.__next__()

    for row in movies:

        if lineCount >= endLine:
            break

        movie = extractMovie(row)

        filteredMovieTitle = movie.title

        forbiddenChars = ['!', '?', ':']

        for c in forbiddenChars:
            filteredMovieTitle = filteredMovieTitle.replace(c, '')
        
        fullUrl = baseUrl + titleParam + "=" + filteredMovieTitle.replace(' ', urlSpace) + "&" + directorParam + "=" + movie.director.name.replace(' ', urlSpace)

        try:
            driver.get(fullUrl)
            time.sleep(1)
            posterImage = driver.find_element(By.CLASS_NAME, posterImgClass)
        except (NoSuchElementException, WebDriverException) as e:
            print("error")
            print("\n\n full error: \n\n ")
            print(e)
            print("\n\n\n\n\n\n")
            print("trying to access: " + fullUrl)
            print("stopped at line: " + str(lineCount))
            sys.exit(1)
            continue

        posterSrc = posterImage.get_attribute('src')

        hashInput = movie.title + " " + movie.director.name + " " + str(movie.releaseDate.year)

        outputDir = outputFolder + sha256(hashInput.encode()).hexdigest() + ".jpg"

        urllib.request.urlretrieve(posterSrc, outputDir)

        lineCount += 1


