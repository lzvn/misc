create database mlddb_test;
use mlddb_test;

create table directors (
    id integer auto_increment,
    name varchar(50) not null,
    birthdate date not null,
    constraint directors_pk primary key(id)
);

create table movies (
    id int auto_increment,
    title varchar(50) not null,
    director_id int,
    synopsis varchar(300),
    release_date date not null,
    duration int not null,
    constraint movies_pk primary key (id),
    constraint movies_directors_fk foreign key (director_id) references directors(id)
);

create table genres (
    id integer auto_increment,
    name varchar(50) not null,
    constraint genres_pk primary key(id),
    constraint genres_name_unique unique(name)
);

create table movies_genres_relation (
    id int auto_increment,
    movie_id int,
    genre_id int,
    constraint movies_genres_relation_pk primary key (id),
    constraint movies_fk foreign key(movie_id) references movies(id),
    constraint genres_fk foreign key(genre_id) references genres(id)
);