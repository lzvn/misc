#include <iostream>
#include <string>

/* Exerc�cios do cap�tulo 1 */

/*
// Exerc�cio 1.0
// Compilar o programa exemplo usado
//O programa pede um nome do usu�rio e imprime
//uma sauda��o com o nome dele cercado por estrelas

int main()
{
    std::string name;
    std::cout<<"Digite seu nome: ";
    std::cin>>name;

    std::string greetings = "Hello, " + name + "!";
    //Seria melhor declarar greetings l� em cima, armazenar o nome nela
    //e depois fazer a concatena��o, evitando uso de duas vari�veis
    //mas estou fazendo tal como o original

    std::string spaces(greetings.size(), ' ');
    std::string second = "*" + spaces + "*";

    std::string first(second.size(), '*');

    std::cout<<first<<std::endl;
    std::cout<<second<<std::endl;
    std::cout<<"*"<<greetings<<"*"<<std::endl;
    std::cout<<second<<std::endl;
    std::cout<<first<<std::endl;
}
/**/

/*
//Exerc�cio 1.1

int main()
{
    const std::string hello = "Hello";
    const std::string message = hello + ", world" + "!";

    std::cout<<message<<std::endl;
    //Ambas as duas declara��es est�o corretas, achei que a segunda n�o por causa
    //da soma de duas strings literais, mas n�o.
}
*/

/*
//Exerc�cio 1.2

int main()
{
    const std::string exclam = "!";
    const std::string message = "Hello" + ", world" + exclam;

    std::cout<<message<<std::endl;
    //Diferentemente do 1.1, esse d� merda. J� entendi o porqu�
    //No primeiro, soma-se o literal ", world" � hello e depois
    //soma-se "!" ao novo hello que � colocado em message e
    //hello volta ao valor original
    //No segundo caso, tenta-se somar duas literais, por defini��o
    //s�o do tipo const string e, por isso, a primeira n�o pode
    //comportar a segunda e depois o exclam.
}
*/

/*
//Exerc�cio 1.3

int main()
{
 { const std::string s = "a string";
 std::cout << s << std::endl; }

 { const std::string s = "another string";
 std::cout << s << std::endl; }
 return 0;

 //Como esperava, � totalmente v�lido
}

/**/

/*
//Exerc�cio 1.4

int main()
{
 { const std::string s = "a string";
 std::cout << s << std::endl;
 { const std::string s = "another string";
 std::cout << s << std::endl; };}
 return 0;

 //Funciona colocar o ; entre as duas chaves. WTF
}
/**/
