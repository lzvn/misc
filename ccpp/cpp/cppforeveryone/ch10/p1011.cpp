#include <iostream>
#include <string>
using namespace std;

#define INTR_SAV 0.06
#define INTR_CHECK 0.03
#define MIN_BAL_CHECK 1000.00

class Account
{
public:

    Account();

    float get_balance() const;

    //deposit and withdraw are virtual in case they would need different behaviors for checkings and savings, but I'll not use
    //that here, it won't be necessary. Obviously, this WILL BE with daily_interest
    virtual void deposit(float value);
    virtual void withdraw(float value);
    virtual void daily_interest();
    virtual void display_balance();

private:

    float balance;

};

class Savings : public Account
{
public:

    Savings();
    Savings(float initial_balance);

    float get_interest() const;
    void update_interest(float new_interest);
    //float get_min_bal() const;

    virtual void daily_interest();
    virtual void display_balance();

private:

   float interest;  //Initialized by a fixed value
   //float min_balance = 0;
};

class Checking : public Account
{
public:

    Checking();
    Checking(float initial_balance);

    float get_interest() const;
    void update_interest(float new_interest);
    float get_min_bal() const;
    void update_min_bal(float new_min_balance);

    virtual void daily_interest();
    virtual void display_balance();

private:

    float interest;
    float min_balance;
};

int main()
{
    Savings* conta = new Savings(1000.00);
    Checking* conta2 = new Checking(1245.00);

    Account* p_account[2];
    p_account[0] = conta;
    p_account[1] = conta2;

    int i;
    for(i = 0; i<2; i++)
        p_account[i]->display_balance();
}

Account::Account()
{
balance = 0;
}

void Account::daily_interest()
{}

void Account::display_balance() {}

float Account::get_balance() const
{
    return balance;
}

void Account::deposit(float value)
{
    while(value <0)
    {
        float new_value;
        cout<<"Invalid value to the deposit"<<endl;
        cout<<"Please, enter a valid number or type 0 to resume: ";
        cin>>new_value;
        if(new_value == 0)
            return;
        else
            value = new_value;
    }

    balance+=value;
}

void Account::withdraw(float value)
{
    while(value <0)
    {
        float new_value;
        cout<<"Invalid value to the deposit"<<endl;
        cout<<"Please, enter a valid number or type 0 to resume: ";
        cin>>new_value;
        if(new_value == 0)
            return;
        else
            value = new_value;
    }

    balance-=value;
}

Savings::Savings()
{
    interest = INTR_SAV;
}

Savings::Savings(float initial_balance)
{
    interest = INTR_SAV;
    if(initial_balance==0)
        return;
    else if(initial_balance>0)
        deposit(initial_balance);
    else if(initial_balance<0)
        withdraw(-initial_balance);
}

void Savings::daily_interest()
{
    //It doesn't check if a day passed, despite the name
    //This would be done outside
    float balance = Account::get_balance();
    if(balance = 0)
        return;
    else if(balance > 0)
        deposit(interest*balance);
    else if(balance < 0)
        withdraw(-interest*balance);
}

float Savings::get_interest() const
{
    return interest;
}

void Savings::update_interest(float new_interest)
{
    interest = new_interest;
}

void Savings::display_balance()
{
    cout<<"The value of this saving account is "<<get_balance()<<endl;
}

Checking::Checking()
{
    interest = INTR_CHECK;
    min_balance = MIN_BAL_CHECK;
}

Checking::Checking(float initial_balance)
{
    interest = INTR_CHECK;
    min_balance = MIN_BAL_CHECK;
    if(initial_balance==0)
    return;
    else if(initial_balance>0)
        deposit(initial_balance);
    else if(initial_balance<0)
        withdraw(-initial_balance);
}

void Checking::daily_interest()
{
    //It doesn't check if a day passed, despite the name
    //This would be done outside
    float balance = Account::get_balance();
    if(balance < min_balance)
        return;
    else
        deposit(interest*balance);
}

float Checking::get_interest() const
{
    return interest;
}

void Checking::update_interest(float new_interest)
{
    interest = new_interest;
}

float Checking::get_min_bal() const
{
    return min_balance;
}

void Checking::update_min_bal(float new_min_balance)
{
    min_balance = new_min_balance;
}

void Checking::display_balance()
{
    cout<<"The balance of this checking account is "<<get_balance()<<endl;
}
