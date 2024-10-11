#include <iostream>

class employee
{
public:

    //Constructors and destructors
    employee();
    employee(char name[50], float salary, float id[5]);
    ~employee();

    //Methods
    void get_name(char str[]) const;
    void get_id(char str[]) const;
    float get_salary() const;

    virtual void update(char new_name[], float new_salary, char new_id[]);
    virtual void display() const;

private:

    char name[50];
    float salary;
    char id[6];

};

class programmer : public employee
{
public:

    programmer();
    programmer(char user_name[], char user_id[], float user_salary, char user_spec[], char user_lang1[], char user_lang2[]);
    ~programmer();

    virtual void display() const;

private:

    char specialization[30];
    char primary_language[10]; //This is written as shit, I know
    char secondary_language[10];
    /* A correct approach is to make a char matrix of variable number of lines,
    instead of fixing it in primary and secondary languages, but this would require
    too much work on it when this isn't my focus in the moment, which is practing
    inheritance and more OOP related things.
    I would need some time to do it and do it well, time I could be using studying
    things I'm in more need for now.
    */

};

int main()
{
    programmer luiz("Luiz", "00101", 2000.00, "Low-level", "C", "Assembly");
    luiz.display();
    return 0;
}

employee::employee()
{}

employee::employee(char user_name[], float user_salary, float user_id[5])
{
    /*As it is obvious by the code, it lacks some safety measures, like checking if
    the entered id is correct according to some intern pattern or if it is not
    already registered for some employee. Also, it could be self-generated to avoid
    such problems, but this is just an academic example and it doesn't need to be
    perfect
    */
    int i = 0;
    while(user_name[i])
    {
        name[i] = user_name[i];
        i++;
    }
    name[i] = 0;
    i = 0;

    while(user_id[i])
    {
        id[i] = user_id[i];
        i++;
    }
    id[i] = 0;

    salary = user_salary;
}

employee::~employee()
{}

void employee::get_name(char str[]) const
{
    int i = 0;
    for(i = 0; name[i]; ++i)
        str[i] = name[i];
    str[i] = 0;
}
void employee::get_id(char str[]) const
{
    int i = 0;
    for(i = 0; id[i]; ++i)
    {
        str[i] = id[i];
    }
    str[i] = 0;
}

float employee::get_salary() const
{
    return salary;
}

void employee::display() const
{
    std::cout<<"Employee's name: "<<name<<std::endl;
    std::cout<<"Employee's id number: "<<id<<std::endl;
    std::cout<<"Employee's salary: "<<salary<<std::endl;
}

void employee::update(char new_name[], float new_salary, char new_id[])
{
    int i = 0;
    while(new_name[i])
    {
        name[i] = new_name[i];
        i++;
    }
    name[i] = 0;
    i = 0;

    while(new_id[i])
    {
        id[i] = new_id[i];
        i++;
    }
    id[i] = 0;
    salary = new_salary;
}

programmer::programmer()
{}

programmer::programmer(char user_name[], char user_id[], float user_salary, char user_spec[], char user_lang1[], char user_lang2[])
{
    update(user_name, user_salary, user_id);

    int i = 0;

    for(i = 0; user_spec[i]; ++i)
        specialization[i] = user_spec[i];
    specialization[i] = 0;
    i = 0;
    for(i = 0; user_lang1[i]; ++i)
        primary_language[i] = user_lang1[i];
    primary_language[i] = 0;
    i = 0;
    for(i = 0; user_lang2[i]; ++i)
        secondary_language[i] = user_lang2[i];
    secondary_language[i] = 0;
}

programmer::~programmer()
{}

void programmer::display() const
{
    char str[50];
    get_name(str);
    std::cout<<"Programmer's name: "<<str<<std::endl;
    get_id(str);
    std::cout<<"Programmer's id: "<<str<<std::endl;
    std::cout<<"Programmer's salary: "<<employee::get_salary()<<std::endl;
    std::cout<<"Programmer's specialization: "<<specialization<<std::endl;
    std::cout<<"Programmer's primary and secondary languages: "<<primary_language<<", "<<secondary_language<<std::endl;
}
