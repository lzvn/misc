#include <stdio.h>

void main() {
	int i = 0;
LOOP:
	printf("%d\n", i);
	i++;
	if(i < 10) goto LOOP;
}
