package com.lzvn.mld2.model.entities;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class Movie {
    private Long id;
    private String title;
    private Director director;
    //private List<Actor> actors; TODO
    //private List<CrewMember> crewMembers; //TODO
    private String synopsis;
    private List<String> genres = new ArrayList<>();
    private Date releaseDate;
    private Integer duration; //in minutes
    //private AgeRating ageRating; //TODO: think of a list of ratings and countries, each a AgeRating type
    //private Grade grade; //TODO: add the Grade class and implement the voting system


    public Movie(Long id, String title, Director director, String synopsis,
                 Date releaseDate, Integer duration) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.synopsis = synopsis;
        this.releaseDate = releaseDate;
        this.duration = duration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Director getDirector() {
        return director;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public List<String> getGenres() {
        return this.genres;
    }

    public void addGenre(String genre) {
        this.genres.add(genre);
    }

    public void removeGenre(String genre) {
        this.genres.remove(genre);
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie movie = (Movie) o;
        return Objects.equals(id, movie.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        //synopsis is not here because it is supposed to be a big text and this is a
        //short summary of the object for debugging purposes
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", director=" + director +
                ", genres=" + genres +
                ", releaseDate=" + releaseDate +
                ", duration=" + duration +
                '}';
    }

    public String shortToString() {
        SimpleDateFormat year = new SimpleDateFormat("yyyy");
        return title + " " + director.getName() + " " + year.format(releaseDate);
    }
}
