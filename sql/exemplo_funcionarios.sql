/*exemplo de própria autoria para testar os comandos de dml*/
create database funcionarios_empresa;

/*use funcionarios_empresa;*/
\c funcionarios_empresa

create table dados_funcionario(
codigo_func numeric(5),
nome_func varchar(30) not null,
idade_func int not null,
sexo_func char check(sexo_func in ('M', 'F')),
data_nasc date not null,
data_ingresso date not null,
tel_cel char(20) not null unique,
email char(40) not null unique,
endereco char(100),
primary key(codigo_func)
);

create table cargos(
codigo_cargo numeric(5),
nome_cargo char(50) not null unique,
descricao_cargo char(200) not null,
primary key(codigo_cargo)
);

create table relacao_cargos_func(
codigo_func numeric(5) references dados_funcionario(codigo_func),
codigo_cargo numeric(5) references cargos(codigo_cargo),
dept_trabalho char(50), /*Se houvesse uma tabela de depts., esta seria referenciada aqui. Provavelmente haveria um código ao inves de uma nome*/
salario numeric(10, 2) not null
);

/*inserts da vida*/

insert into cargos (codigo_cargo, nome_cargo, descricao_cargo)
values (00000, 'Presidente', 'Representa o poder máximo da empresa.'),
(00001, 'Estagiario', 'Estudante de nível médio ou superior contratado sem registro formal para aprendizado.'),
(00002, 'Servente de limpeza', 'Zela pelo bom estado e limpeza do ambiente da empresa.'),
(00003, 'Administrador do banco de dados', 'Organiza e mantem o banco de dados da empresa');
/*coloquei alguns com _func no final, depois tirei, depois coloquei, depois tirei kkk*/
insert into dados_funcionario (codigo_func, nome_func, idade_func, sexo_func, data_nasc, data_ingresso, tel_cel, email, endereco)
values (00000, 'Alenzete de Damião', 63, 'M', '1956-01-01', '1990-02-02', '(47) 99999-9999', 'alenzete_damiao@gmail.com', 'Itajaí, SC'),
(00001, 'Joãozinho da Silva', 19, 'M', '2001-04-23', '2019-11-11', '(47) 95665-8998', 'joaofodaonocs@gmail.com', 'Balneário Camboriu, SC'),
(00002, 'Clementina Pereira', 47, 'F', '1972-03-14', '2018-02-03', '(47) 96655-5554', 'clementina.pereira19@gmail.com', 'Itajaí, SC'),
(00003, 'Luiz Vinicius Costa Oliveira', 21, 'M', '1998-02-08', '2019-11-11', '(47) 999929846', 'lvinicius15@gmail.com', 'Balneário Piçarras, SC');

insert into relacao_cargos_func (codigo_func, codigo_cargo, dept_trabalho, salario)
values (00000, 00000, 'Administracao', 100000.00),
(00001, 00001, 'Administracao', 600.00),
(00002, 00002, 'Todos', 1400.00),
(00003, 00003, 'TI', 2000.00);

/*updates da vida*/

update relacao_cargos_func set salario = 1.2*salario where codigo_cargo = 00001;
update relacao_cargos_func set salario = 1.1*salario where not (codigo_cargo = 00000) and not(codigo_cargo = 00001);

/*selects da vida */
select * from dados_funcionario;
select codigo_func, 3*salario as "Triplo do salario dos funcionarios" from relacao_cargos_func order by codigo_func desc;
select codigo_func, 3*salario as "Triplo do salario dos funcionarios" from relacao_cargos_func order by 1 asc;
/*os dois acima são equivalentes sob exceção do asc e desc. Posso ordenar pelo nome ou pela ordem pela qual a variável de
referencia foi citada no select (no caso, codigo_func foi o primeiro, se tivesse colocado o salario antes, seria 2 */
select distinct dept_trabalho from relacao_cargos_func; /*distinct faz não repetir*/

/*select com funções de agregação e outras operações com select*/

select count(codigo_func) as "Total de funcionarios", max(salario) as "Maior salario", min(salario) as "Menor salario", sum(salario) as "Total da folha de pag.", avg(salario) as "Salario médio" from relacao_cargos_func;

select distinct dados_funcionario.codigo_func as "Codigo", dados_funcionario.nome_func as "Nome", cargos.nome_cargo as "Cargo", relacao_cargos_func.salario as "Salario" from dados_funcionario, cargos, relacao_cargos_func where (dados_funcionario.codigo_func = relacao_cargos_func.codigo_func and relacao_cargos_func.codigo_cargo = cargos.codigo_cargo) order by 1;
/*Esse comando gigante mostra o código, nome, cargo e salário de cada funcionario, ordenando pelo código. Sem o where, ele mostra todas as possibilidades de
combiação entre as tabelas, sendo necessário estipular que queremos apenas valores casados entre as tabelas*/

select dados_funcionario.sexo_func, sum(relacao_cargos_func.salario) from dados_funcionario, relacao_cargos_func where (dados_funcionario.codigo_func = relacao_cargos_func.codigo_func) group by dados_funcionario.sexo_func;
/*o codigo acima era pra mostrar a soma do salarios dos homens e a soma dos salarios das mulheres em separado, mas não está funfando.
Consegui fazer funcionar, faltou o where para fazer com que ele não faça todas as combinações possíveis.*/
/*tem o compando having, que é igual ao where, mas especificamente para o group by*/
/*O exemplo acima também tem a ligação entre tabelas*/
/*O comando where, já mencionado, deve ser feito entre as chaves primárias e estrangeiras, de forma a ligar as tabelas da do jeito
correto, com os dados nas relações corretas. */

select codigo_func from dados_funcionario
union
select codigo_func from relacao_cargos_func;
/*no meu exemplo, não dá para ver o que o union faz, mas ele junta os dadso de colunas de mesmo tipo de tabelas diferentes. ex: se eu juntar codigo_func de
dados_funcionario e codigo_func de relacao_cargos_func, ele vai unir numa coluna só, ignorando repetições, dando preferência à primeira tabela mencionada. Assim,
se eu tivesse um código em uma tabela não existente em outra ele ia colocar junto, se tivesse, ele ia pegar da primeira, assim por diante.
Outras regrinhas do union são que cada select pode ter o seu where, mas só pode ter apenas um union no último select.*/

select codigo_func from dados_funcionario
intersect
select codigo_func from relacao_cargos_func;
/*da mesma forma, não dá pra ver o intersect, mas ele faz uma interseção das colunas. No final, é o mesmo que as operações de conjuntos matemáticos.*/

select codigo_func from dados_funcionario
except
select codigo_func from relacao_cargos_func;
/*Este retorna tudo que há na primeira coluna que não há na segunda, ou seja, a diferença entre elas. Como pode-se perceber, a ordem das operações afeta
o resultado final*/


/*Selects dentro de selects*/
select nome_func from dados_funcionario where codigo_func = (select codigo_func from relacao_cargos_func where salario = (select min(salario) from relacao_cargos_func));

/*Pega o nome relativo ao código do funcionário que tem o menor salário. Para isso, é necessário fazer um select para pegar o nome do código encontrado, um para
pegar o código do funcionario de menor salário e um para pegar o menor salário.
LEMBRAR DE COLOCAR OS PARÊNTESES ENTRE OS SELECTS INTERNOS PARA QUE ELES SEJAM AVALIADOS ANTES.*/

select nome_func from dados_funcionario where codigo_func = (select codigo_func from relacao_cargos_func where salario = (select max(salario) from relacao_cargos_func));
/*mesma coisa, mas agora com o maior salário*/
/*é fácil se confundir nestas coisas. A dica é fazer "de dentro para fora", na mesma ordem de processo.*/

select * from dados_funcionario where codigo_func =  (select codigo_func from relacao_cargos_func where salario = (select salario from relacao_cargos_func where salario < 2000 and dados_funcionario.codigo_func = relacao_cargos_func.codigo_func) );
/*antes, não pus o que está depois do and e antes do primeiro parenteses, isso faz com que o select mais interior retorne uma tabela, que não pode ser comparada. Lembrar deste problema, sempre deve-se fazer as subseleções de forma que da primeria à penútima, retorne-se valores singulares. Apenas a última pode retornar uma tabela completa*/
/*embora pareça que há uma forma mais simples de fazer os dois primeiros exemplos, por causa daquela ligação entre as chaves no final do terceiro, 
não consegui encontrar a tal em minhas tentativas ou ela não existe. A experiência me dirá (ou assim eu espero).*/ 
