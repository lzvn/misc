#include <stdio.h>

int main()
{

printf("este e o fim\rEste e o comeco\n"); //Ele volta ao come�o da linha e sobrescreve tudo que houver
//Se o que vier deposi do /r acabar antes de terminar o que j� foi escrito, este restante ficar� e.g:
printf("este e o fim    e esta parte n�o ser� apagada.\rEste e o comeco");
printf("\n"); //s� para n�o bugar

printf("este e o fim \f Este e o comeco,"); //N�o funciona, aparentemente



}
