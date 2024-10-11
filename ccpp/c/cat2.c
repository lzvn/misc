#include <stdio.h>

int main(int argc, char* args[]) {
	int success=0;

	FILE *file=fopen(args[1], "r");

	if(file==NULL) {
		printf("ERROR: File not found\n");
		success=1;
	} else {
		char c=0;
		while((c=fgetc(file))!=EOF) printf("%c", c);
		fclose(file);
	}
	
	return success;
}
