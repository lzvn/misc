#include <stdio.h>

typedef struct {
	char* content;
	int length;
} String;

String StringConstructor(char* new_content);

int main() {
	String test_str = StringConstructor("Hi, my name is Bob!\n");
	String new_string = test_str;
	printf("%s", new_string.content);
	printf("%d\n", new_string.length);
}

String StringConstructor(char* new_content) {
	String new_string;
	new_string.content = new_content;
	int i = 0;
	while(new_content[i++]);
	new_string.length = i - 1;
	return new_string;
}
