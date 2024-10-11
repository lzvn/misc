#include <stdio.h>

int main()
{

printf("este e o fim\rEste e o comeco\n"); //Ele volta ao começo da linha e sobrescreve tudo que houver
//Se o que vier deposi do /r acabar antes de terminar o que já foi escrito, este restante ficará e.g:
printf("este e o fim    e esta parte não será apagada.\rEste e o comeco");
printf("\n"); //só para não bugar

printf("este e o fim \f Este e o comeco,"); //Não funciona, aparentemente



}
