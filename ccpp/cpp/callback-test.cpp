#include <iostream>
using std::cout, std::endl;

class Caller {
	public:
		void call(void (*cb)()) {
			cout<<"Call method in Caller"<<endl;
			(*cb)();
		}
};

class Test {
	public:
		Test(Caller newc)  {
			tested = false;
			c = newc;
		}
		void test() {
			cout<<"Test method in Test"<<endl;
			c.call(&cb2);
		}
		void cb() {
			cout<<"Callback method in Test"<<endl;
			tested=true;
			cout<<"tested = "<<tested<<endl;
		}

	private:
		Caller c;
		bool tested;
		static void cb2() {
			cout<<"Static callback in Test"<<endl;
		}


};


int main() {
	Caller c;
	Test t(c);
	t.test();
	//Test::cb2();
}
