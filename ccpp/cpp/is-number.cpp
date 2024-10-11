#include <iostream>
#include <string>

using namespace std;

bool isNumber(string s);

int main() {
	string s = "2e-2";
	cout<<(isNumber(s)?"true":"false")<<endl;
	return 0;
}


//TODO: this function was written with no planning, improve and optimize it
bool isNumber(string s) {
	char digits[10] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
	char plusSign = '+';
	char minusSign = '-';
	char sciSign = 'E';
	char numDot = '.';

	bool rational = false;
	bool sciNotation = false;
	
	bool result = true;
	for(int i = 0; i < s.length(); i++) {
		bool isDigit = false;
		for(int j = 0; j < 10; j++) { //magic number because there are only 10 digits
			if(s[i]==digits[j]) {
				isDigit = true;
				break;
			}
		}

		if(s[i]==sciSign+32) s[i]-=32;

		if(!isDigit && s.length() < 2)
			result = false;

		if(i==0 && isDigit==false && s[i]!=numDot && s[i]!=plusSign && s[i]!=minusSign)
			result = false;

		if(i>0 && isDigit==false && s[i]!=numDot && s[i]!=sciSign) {
			if((s[i]!=plusSign && s[i]!=minusSign) && s[i-1] != sciSign )
				result = false;
		}

		if(i>0 && s[i]==numDot) {
			if(sciNotation) result=false;
			else if(!rational) rational=true;
			else result = false;
		}
		if(i>0 && s[i]==sciSign) {
			if(!sciNotation)  sciNotation=true;
			else result=false;
		}
		
		if(result==false) break;
	}
	return result;
}
