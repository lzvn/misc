#include <iostream>

class Country
{
public:

   //Constructors and destructors
    Country();
    Country(char user_name[], float user_pop, float user_area);
    ~Country();

   //Methods
   float get_area() const;
   float get_pop() const;
   void get_name(char str[]);
   void set_country(char user_name[], float user_pop, float user_area);

private:

    char name[50];
    float population; //Population in thousands of people
    float area; //Area in thousands of kilometers squared

};

void largest(Country countries[]);

int main()
{
    Country paises[2];

    paises[0].set_country("Israel", 8712, 22.145);
    paises[1].set_country("Mongolia", 3076, 1556);

    largest(paises);

}

Country::Country()
{}

Country::Country(char user_name[], float user_pop, float user_area)
{
    int i = 0;
    while(user_name[i])
    {
        name[i] = user_name[i];
        ++i;
    }
    name[i] = 0;

    population = user_pop;
    area = user_area;
}

Country::~Country()
{}

float Country::get_area() const
{
    return this->area;
}

float Country::get_pop() const
{
    return this->population;
}

void Country::get_name(char str[])
{
    int i = 0;

    while(name[i])
    {
        str[i] = name[i];
        i++;
    }
    str[i] = 0;
}

void Country::set_country(char user_name[], float user_pop, float user_area)
{
    Country aux(user_name, user_pop, user_area);

    *this = aux;
}

void largest(Country countries[])
{

    Country* p_country = countries;
    Country* larg_pop;
    Country* larg_area;
    Country* larg_dens;
    float larg_density = 0;
    float density;p_country;

    int i = 0;

    while(p_country->get_area()) //I know this is wrong, but it was the easiest way
    {
        density = (countries[i].get_pop())/(countries[i].get_area());

        if(countries[i].get_area()>larg_area->get_area())
            larg_area = p_country;

        if(countries[i].get_area()>larg_pop->get_pop())
            larg_pop = p_country;

        if(density > larg_density)
        {
            larg_dens = p_country;
            larg_density = density;
        }

        p_country++;
        i++;
    }
    char aux_name[50];

    larg_area->get_name(aux_name);
    std::cout<<"Country with the largest area: "<<aux_name<<std::endl;

    larg_pop->get_name(aux_name);
    std::cout<<"Country with the largest population: "<<aux_name<<std::endl;

    larg_dens->get_name(aux_name);
    std::cout<<"Country with the largest population density: "<<aux_name<<std::endl;

}
