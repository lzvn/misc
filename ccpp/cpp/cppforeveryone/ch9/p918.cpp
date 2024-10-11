#include <iostream>
#include <stdlib.h>
#include <time.h>


#define XMAX 100
using namespace std;

class Bug
{
public:

   //Constructors and destructors
   Bug();
   Bug(int initial_position);
   ~Bug();

   //Methods
   void turn();
   void move();


private:
    int x_max; //Posição máxima, aqui sempre 100 porque sim
    int x; //Posição presente
    int direction; //1 é direita, -1 é esquerda

};

int main()
{
    Bug spider(XMAX/2);
    long unsigned int i = 0;
    int random;
    srand(time(NULL));

    while(i < 10000000)
    {
        spider.move();

        random = rand()% 10 + 1;

        if(random>9)
            spider.turn();
    }
    return 0;
}

Bug::Bug(){};

Bug::Bug(int initial_position)
{
    x_max = XMAX;

    if(initial_position <= 0)
        x = 1;
    else if(initial_position > x_max)
        x = x_max;
    else
        x = initial_position;

    direction = 1;
}

Bug::~Bug() {};

void Bug::turn()
{
    direction= -direction;
}

void Bug::move()
{
    string spacel(x - 1, ' ');
    string spacer(x_max-x, ' ');
    cout<<spacel<<'*'<<spacer<<endl;
    x+=direction;
    if(x>=x_max)
        x = x_max;
    if(x<=1)
        x = 1;

    if(x >= x_max)
        direction = -1;
    else if(x <= 1)
        direction = 1;
}
