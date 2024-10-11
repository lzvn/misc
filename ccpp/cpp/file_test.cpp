#include <iostream>
#include <fstream>

#define FILEPATH ".\\files\\test.txt"

using namespace std;

int main() {

    ofstream file_out;
    ifstream file_in;

    file_out.open(FILEPATH);
    file_in.open(FILEPATH);

    if(file_out.fail() || file_in.fail()) {
        cout<<"ERRO AO ABRIR O ARQUIVO"<<endl;
        return -1;
    }

    char nome[20];
    cout<<"Digite um nome: ";
    cin>>nome;

    file_out<<"Oi, "<<nome<<"!"<<endl;

    file_out.close();

    int i;

    for(i = 0; i<19; i++)
        file_in.get(nome[i]);
    nome[i] = 0;

    cout<<nome;


}
