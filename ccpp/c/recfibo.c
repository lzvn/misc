//beautiful
#include <stdio.h>
#include <stdlib.h>

int recfibo(int n);
int recfibo2(int n);

int main(int argc, char* argv[]) {

  const int N = (argc>1)?(atoi(argv[1])):0;
  int i = 0;

  for(i = 0; i<=N; i++)
    printf("Fibonacci(%d): %d\n", i, recfibo(i));
  
}

int recfibo(int n) {
  return (n>1)?(recfibo(n-1)+recfibo(n-2)):1;
}

int recfibo2(int n) {
  //This one is a little more optimized while still using recursion
  //This done by calculating on of the recursion trees and stoing the resulting value
  //so that it can be used later, hence saving the time of recalculating that variable
  //If my intuition is correct, this saves about half of the calculations
  if(n<1)
    return 1;
  else {
    fib2 = recfibo2(n-2);
    fib1 = fibo2 - recfibo2(n-3);
    return fib1 - fib2;
  }
}
