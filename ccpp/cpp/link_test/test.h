#ifndef TEST_H_INCLUDED
#define TEST_H_INCLUDED

//class test; //Fazer s� isso n�o funciona, h� um erro de defini��o vazia

//Tem que ser da forma abaixo, mostrada no c++ for everyone, defini��o completa
//aqui e fun��es no .cpp

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
