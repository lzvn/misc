/*código do db para listas de filmes, séries, animes, livros, quadrinhos e mangas para ler ou lidos,
que vou usar de exemplo e exercício para aprender banco de dados*/
/*aparentemente, códigos usando esta estrutura não bugam na compilação, bom saber*/

/*comentado a parte abaixo pois a database já está feita, o código só está aqui por anotação*/
create database watchlists;
/*use watchlists;*/
\c watchlists;

/*Parte de filmes, comentado pois já foi feito*/
create table movies(
name varchar(50) not null,
watched char not null check(watched in('y', 'n')) default 'n',
director char(30) not null,
genre char(50) not null,
year_of_release numeric(4) not null,
duration varchar(6) not null,
score numeric(2)
);

insert into movies(name, watched, director, genre, year_of_release, duration, score)
values ('The Godfather', 'y', 'Francis Coppola', 'Drama, Crime', 1972, '02:55', 10);

/*Parte de livros, comentado pois já foi feito*/
create table books(
title varchar(30) not null,
isread char not null check(isread in('y', 'n')) default 'n',
author varchar(50) not null,
genre varchar(50) not null,
year_of_publish numeric(4) not null,
pages numeric(4) not null,
score numeric(2)
);
insert into books(title, isread, author, genre, year_of_publish, pages, score)
values('Dune', 'y', 'Frank Herbert', 'Science-fiction, Fantasy', 1965, 688, 8);

/*como não há necessidade, não há primary keys. Se eu fizer uma tabela só do que não ter sido consumido,
para filmes ou para outra mídia, vou colocar alguma para fazer a foreign key*/
/*tão porco que sequer coloquei not null no que fiz originalmente, direto no client kkk*/
