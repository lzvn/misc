#include <iostream>

using std::cout, std::endl;

void func1();
void func2(int i, void (*cb)() );

unsigned int t = 0;
unsigned int timeout = 30000;

int main() {
	func2(0, &func1);
	return 0;
}

void func1() {
	cout<<"Hello"<<endl;
	if(t<timeout) {
		t++;
		func1();
	}
}

void func2(int i, void (*cb)() ) {
	cout<<"Hello "<<i<<endl;
	if(i < timeout) {
		func2(i+1, cb);
	}
}
