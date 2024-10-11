#include <iostream>

struct Point {
	int x;
	int y;
	Point(int x, int y) {
		this->x = x;
		this->y = y;
	}
};

int main() {
	Point *p = new Point(44, 54);
	std::cout<<"(x, y) = ("<<p->x<<", "<<p->y<<")"<<std::endl;
	return 0;
}
