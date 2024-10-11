#include <iostream>

#define type char

template <typename T>
T getMax(T a, T b);

int main(int argc, char** args) {
	type a = 'c';
	type b = 'b';
	std::cout<<"Max value: "<<getMax<type>(a, b)<<std::endl;
	return 0;
}

template <typename T>
T getMax(T a, T b) {
	return (a>b)?a:b;
}
