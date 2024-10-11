#include <iostream>
#include "test.h"

int main(int argc, char* argv[])
{
    int i;
    test teste;

    for(i = 1; i<=argc; i++)
        teste.print(argv[i]);

    teste.print_segredo();
}
