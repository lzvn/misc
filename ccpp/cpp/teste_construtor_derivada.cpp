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
//não consigo fazer a declaração fora daqui, não sei porque
//fica assim, o que não aprendi, não aprenderei hoje nem amanhã antes da prova
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
