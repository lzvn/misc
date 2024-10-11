//Thanks to the last exercise and the use of string, I know how to do it
//I just don't want to

#include <iostream>
#include <string>
using namespace std;
class Person
{
public:

    Person();
    Person(string user_name, unsigned int user_birthday[3]);

    string get_name() const;
    void get_bd(unsigned int vec[3]) const;

    void set_person(string user_name, unsigned int user_birthday[3]);
    virtual void display();

private:
    string name;
    unsigned int birthday[3]; //A little unorthodox, but I like it
};

class Student : public Person
{
public:

    Student();
    Student(string u_name, unsigned int u_bd[3], string u_major);

    virtual void display();

private:

    string major;

};

class Instructor : public Person
{
public:

    Instructor();
    Instructor(string u_name, unsigned int u_bd, float u_salary);

    virtual void display();

private:

    float salary;
};

int main()
{}

string Person::get_name() const
{
    return name;
}

void Person::get_bd(unsigned int vec[3]) const
{
    int i;
    for(i = 0; i<3; i++)
        vec[i] = birthday[i];
}

void Person::set_person(string user_name, unsigned int user_birthday[3])
{
    name = user_name;
    int i;
    for(i = 0; i<3; i++)
        birthday[i] = user_birthday[i];
}
