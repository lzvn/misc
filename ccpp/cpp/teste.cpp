#include <iostream>

class teste
{
public:

    void altera_prova(int nova_prova);
    void mostra_prova() const;

private:

    int prova;
};

int fact(int x);

int main()
{
    std::cout<<fact(5);
    /*
    teste teste1;

    teste1.altera_prova(6);
    teste1.mostra_prova();

    int prova_usuario;

    std::cout<<"Digite o novo valor: ";
    std::cin>>prova_usuario;

    teste1.altera_prova(prova_usuario);
    teste1.mostra_prova();

    /**/
}

void teste::altera_prova(int nova_prova)
{
    prova = nova_prova;
}

void teste::mostra_prova() const
{
    std::cout<<prova<<std::endl;
}

int fact(int x)
{
    if(x >1)
        return x*fact(x-1);
    else
        return 1;
}
