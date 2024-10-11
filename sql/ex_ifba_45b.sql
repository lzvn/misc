/*criação do db e das relações*/

create database vacina_animais;

\c vacina_animais;

create table animal(codigo_pk numeric(5), nome varchar(30) not null, especie varchar(30) not null, raca varchar(30), primary key(codigo_pk));

create table vacina(tipo_pk numeric(2), primary key(tipo_pk), nome varchar(30), preco numeric(4, 2) not null, fornecedor varchar(30) not null);

create table vacinacao(tipo_pk numeric(2) references vacina(tipo_pk), codigo_pk numeric(5) references animal(codigo_pk) );






/*os exercícios em sí*/

/*dados para teste*/
insert into animal(codigo_pk, nome, especie)
values (0, 'Titiolina', 'Gato'),
(1, 'Rex', 'Cachorro'),
(2, 'Digo', 'Cachorro');

insert into vacina(tipo_pk, nome, preco, fornecedor) values
(0, 'EXV35', 10.00, 'Lexcorp'),
(1, 'GGH99', 20.00, 'Lexcorp'),
(2, 'VARIG', 13.00, 'Lexcorp'),
(3, 'ANTIBIOTIC-CCVB', 25.00, 'Lexcorp');

insert into vacinacao(tipo_pk, codigo_pk) values
(1, 0), (1, 1), (1, 2), (0, 0), (2, 1), (3, 1), (3, 2);


/*Recuperar o código dos animais que são da espécie gato ou que recebam
vacina do tipo 2.*/

select codigo_pk from animal where especie = 'Gato' or (select count(tipo_pk) from vacinacao where vacinacao.codigo_pk = animal.codigo_pk and vacinacao.tipo_pk = 2) > 0;

/*Recuperar o tipo das vacinas que o animal de código 20 não foi vacinado.*/

select tipo_pk from vacina
except
select tipo_pk from vacinacao where codigo_pk = 20 order by tipo_pk;

/*Recuperar o nome das vacinas tomadas pelo animal de código 30.*/

select vacina.nome from vacina, vacinacao where (vacina.tipo_pk = vacinacao.tipo_pk and vacinacao.codigo_pk = 30);

/*Recupere todos os tipos de vacinas com preço maior que 20 e o código (tipo)
seja menor que 10.*/

select * from vacina where preco > 20 and tipo_pk < 10;

/*Recuperar o nome das vacinas tomadas por todos os animais.*/

/*por contagem*/
select vacina.nome from vacina where (select count(tipo_pk) from vacinacao where vacina.tipo_pk = vacinacao.tipo_pk group by vacinacao.tipo_pk) = (select count(codigo_pk) from animal);


/*Obter os dados dos animais cujo nome seja iniciado com a letra R.*/

select * from animal where nome like 'R%';

/*Informar quantas vacinas foram aplicadas em animais cuja raça seja
labrador.*/
/*fiz para quantas vacinas foram aplicadas à animais cuja espécie seja cachorro para poder usar nos dados que eu cadastrei :)*/

select count(tipo_pk) from vacinacao where codigo_pk = (select codigo_pk from animal where vacinacao.codigo_pk = animal.codigo_pk and animal.especie = 'Cachorro');

/*Obter o nome e o preço da vacina mais barata cadastrada no banco de dados.*/

select nome, preco from vacina where preco = (select min(preco) from vacina);
