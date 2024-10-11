#ifndef TEST_H_INCLUDED
#define TEST_H_INCLUDED

//class test; //Fazer só isso não funciona, há um erro de definição vazia

//Tem que ser da forma abaixo, mostrada no c++ for everyone, definição completa
//aqui e funções no .cpp

class test{
  public:
    test();
    void print(char* to_print);
    void print_segredo();

  private:
    char segredo[18];

};
/**/

#endif // TEST_H_INCLUDED
