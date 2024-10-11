#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
	typedef map<string, unsigned> wlist_t;
	wlist_t words;
	string word;
	cout << "Press Ctrl-D on unix systems or Ctrl-z on windows when you finish writing" << endl;
	while(cin) {
		cin >> word;
		words[word] += 1;
	}

	for(wlist_t::iterator i = words.begin(); i!=words.end(); i++) {
		cout << i->first << ": " << i->second <<endl;
	}
}
