#include <iostream>
#include "test.h"

/* //Essa definição não funciona pois ela está no header e ela não pode ficar aqui, mas sim no header
class test{
  public:
    test();
    void print(char* to_print);
    void print_segredo();

  private:
    char segredo[18];

};
/**/

test::test()
{
    char aux[18] = "Esse é um segredo";
    int i;
    for(i = 0; i<18; i++)
        segredo[i] = aux[i];
}

void test::print(char* to_print)
{
    while(*to_print) {
    std::cout<<(*to_print);
    to_print++;
    }
    std::cout<<std::endl;
}

void test::print_segredo()
{
    std::cout<<segredo<<std::endl;
}
