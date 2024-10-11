#include <iostream>
#include <string>

/* Exercícios do capítulo 1 */

/*
// Exercício 1.0
// Compilar o programa exemplo usado
//O programa pede um nome do usuário e imprime
//uma saudação com o nome dele cercado por estrelas

int main()
{
    std::string name;
    std::cout<<"Digite seu nome: ";
    std::cin>>name;

    std::string greetings = "Hello, " + name + "!";
    //Seria melhor declarar greetings lá em cima, armazenar o nome nela
    //e depois fazer a concatenação, evitando uso de duas variáveis
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
//Exercício 1.1

int main()
{
    const std::string hello = "Hello";
    const std::string message = hello + ", world" + "!";

    std::cout<<message<<std::endl;
    //Ambas as duas declarações estão corretas, achei que a segunda não por causa
    //da soma de duas strings literais, mas não.
}
*/

/*
//Exercício 1.2

int main()
{
    const std::string exclam = "!";
    const std::string message = "Hello" + ", world" + exclam;

    std::cout<<message<<std::endl;
    //Diferentemente do 1.1, esse dá merda. Já entendi o porquê
    //No primeiro, soma-se o literal ", world" à hello e depois
    //soma-se "!" ao novo hello que é colocado em message e
    //hello volta ao valor original
    //No segundo caso, tenta-se somar duas literais, por definição
    //são do tipo const string e, por isso, a primeira não pode
    //comportar a segunda e depois o exclam.
}
*/

/*
//Exercício 1.3

int main()
{
 { const std::string s = "a string";
 std::cout << s << std::endl; }

 { const std::string s = "another string";
 std::cout << s << std::endl; }
 return 0;

 //Como esperava, é totalmente válido
}

/**/

/*
//Exercício 1.4

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
