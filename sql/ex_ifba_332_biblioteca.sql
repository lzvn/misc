create database ex_ifba_332_biblioteca;
use ex_ifba_332_biblioteca;

create table editoras(
codigo_editora numeric(6),
nome_editora char(50),
telefone_editora char(16),
endereco_editora char(150),
primary key(codigo_editora) );

create table areas_conhecimento(
codigo_area_conh numeric(6),
nome_area_conh char(50),
descricao_area_conh char(200),
primary key(codigo_area_conh) );

create table palavras_chave(
codigo_palavra numeric(6),
palavra char(25),
descricao_palavra char(150),
primary key(codigo_palavra) );

create table autores(
codigo_autor numeric(6),
nome_autor char(50),
telefone_autor char(16),
endereco_autor char(200),
primary key(codigo_autor) );

create table livros(
codigo_livro numeric(6),
nome_livro char(50),
quantidade_exemplares numeric(3),
--não sei verificar se a quantidade bate as repetições na tabela de exemplares ou fazer que esse valor seja igual isso
autores char(150) references autores(nome_autor),
editora char(50) references editoras(nome_editora),
area_conh char(50) references areas_conhecimento(nome_area_conh),
palavras_chave char(150) references palavras_chave(palavra),
primary key(codigo_livro));

create table exemplares_livro(
codigo_exemplar numeric(6),
codigo_livro numeric(6) references livros(codigo_livro),
quantidade_exemplares numeric(3) not null,
primary key(codigo_exemplar) );

create table usuarios(
codigo_usuario numeric(6),
nome_usuario char(50) not null,
classe_usuario char(13) not null check(classe_usuario in("Aluno", "Professor", "Funcionário")),
divida numeric(4, 2) check(divida>=0),
primary key(codigo_usuario) );

create table emprestimos(
codigo_usuario numeric(6) references usuarios(codigo_usuario),
codigo_exemplar numeric(6) references exemplares_livros(codigo_exemplar),
data_emprestimo date not null,
data_retorno date not null,
--data real de retorno do livro, sendo antes ou após o limite
limite_retorno date not null,
--uma semana após o empréstimo
--não sei calcular uma função que faz o cálculo do limite automaticamente
atraso char not null check(atraso in('s', 'n'))
--tanto se o livro está atrasado quando se foi retornado sob atraso, aqui por clareza, não realmente necessário
);

--poderia colocar uma quantidade de exemplares disponíveis de um livro, que seria a total menos o quanto está em empréstimo
--poderia haver uma função que calcula automaticamente a dívida de um usuario com base no tempo de atraso
--aparentemente, colocar comentarios do lado da linha buga o código kkkkkkkkkkkkk que merdakkkkkkkkkkkkkkkk vou colocá-las em baixo
--das linhas para facilitar o ctrl-c ctrl-v
--código funfou, embora não consegui rodá-lo de verdade, copiei e colei no command line client do mysql e tive o problema acima

drop database ex_ifba_332_biblioteca;
--só pra facilitar :)
