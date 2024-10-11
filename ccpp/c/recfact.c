#include <stdio.h>
#include <stdlib.h>

int recfact(int n);

int main(int argc, char* argv[]) {
  int n = (argc>1) ? atoi(argv[1]) : 0;
  //printf("%d", argc);
  int fatorial = recfact(n);
  printf("%d! = %d", n, fatorial);
}

int recfact(int n) i
  return (n>0)?(n*recfact(n-1)):1;
}
