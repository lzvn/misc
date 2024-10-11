#include <iostream>
#include <cmath>

#define STEP 0.001
//normal value of 0.001
#define MAX_LIMIT 10000
//normal value of 10000
#define PI 3.1416

//Still not fully working for negative numbers

float zeta(float s);
float gamma(float s);
float secant(float xn1, float xn2);
char cp2c(char* tochar);
float cp2f(char* tofloat);

int main(int argc, char* argv[])
{
    if(argc > 2 && argc < 4)
    {
        char arg = cp2c(argv[1]);
        float s = cp2f(argv[2]);
        switch(arg)
        {
            case 'R' :
                std::cout<<"R("<<s<<") = "<<zeta(s)<<std::endl;
                //std::cout<<"R("<<s<<") = "<<s<<std::endl; //Para testes.
                break;
            case 'G':
                std::cout<<"Gamma("<<s<<") = "<<gamma(s)<<std::endl;
                break;
            default:
                std::cout<<"Argumento errado."<<std::endl;
                return 1;
                break;
        }
        return 0;
    }
    else
    {
        std::cout<<"Número errado de argumentos."<<std::endl;
        return 2;
    }
}

float zeta(float s)
{
    float y = 0;
    //If s is greater or equal than zero, the function is calculated by an approximation of the integral
    if(s>1)
    {
        float x = STEP/100;
        float g = gamma(s);
        while(x<MAX_LIMIT)
        {
            y+=(pow(x, s-1)*STEP)/((exp(x)-1)*g);
            x+=STEP;
            //std::cout<<y<<std::endl; //Para testes
        }
    }
    //I just couldn't calculate the values for s = 1 and s = 0 numerically and get the right answers, so I
    //forced them. I'm not sure it is right to do this, but either way, it is how I did it.
    else if(s == 0)
        return -0.5;
    else if(s == 1)
        return gamma(0);
    //if s is negative, then zeta is calculated by its functional equation, which uses some recursion
    else
    {
        y = pow(2, s)*pow(PI, s-1)*sin(PI*s/2)*gamma(1-s)*zeta(1-s);
    }
    return y;
}

float gamma(float s)
{
    float x = 0;
    float g = 0;

    if(s>=0)
    {
        while(x<MAX_LIMIT)
        {
            g+=(pow(x, s-1)*exp(-x))*STEP;
            x+=STEP;
        }
    }
    else
    {
        g = PI/(sin(PI*s)*gamma(1-s));
    }
    return g;
}

float secant(float xn1, float xn2)
{

}

char cp2c (char* tochar)
{
    if(*tochar == '-')
    {
        tochar++;
    }
    while(*tochar)
    {
        return ((char)*tochar);
    }
}

float cp2f(char* tofloat)
{
    float sign = 1.0;
    float num = 0;
    if(*tofloat == '-')
    {
        sign = -1.0;
        tofloat++;
    }

    int i = 0;
    int j = 0;
    int dot = 0;
    char* inicio = tofloat;

    while(*tofloat)
    {
        if(*tofloat == '.' || *tofloat == ',')
        {
            dot = 1;
        }

        if(!dot)
            i++;
        else
            j--;

        tofloat++;
    }

    i-=1;
    if(dot)
    {
    j+=1;
    }

    tofloat = inicio;
    while(i>=j)
    {
        if(*tofloat != '.' && *tofloat != ',')
        {
            num+=(int)(*tofloat - 48)*pow(10, i);
            i--;
        }
        tofloat++;
    }

    return (num*sign);
}
