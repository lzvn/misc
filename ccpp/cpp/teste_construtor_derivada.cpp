#include <iostream>
using namespace std;
class mae {
public:
    mae() {};
    mae(int num);
private:
    int numero;
};

class filha : public mae {
public:
    filha () {};
    filha (int num, int num2): mae(num){
    numero2 = num2;
    cout<<"filha "<<numero2<<endl;
}
//n�o consigo fazer a declara��o fora daqui, n�o sei porque
//fica assim, o que n�o aprendi, n�o aprenderei hoje nem amanh� antes da prova
private:
    int numero2;
};

int main() {
    filha(5, 6);
}

mae::mae(int num) {
    numero = num;
    cout<<"base "<<numero<<endl;
}
