/*
    Eu escrevo código muito mal, testando adoidado sem pensar no que ele faz, quase chutando.
    Preciso melhorar isso.
*/

#include <iostream>
#include <string> //I'm using strings for this one, fuck optimization


class StreetAddress
{
public:

   //Constructors and destructors
    StreetAddress();
    StreetAddress(int user_apart_num, unsigned int user_house_num, std::string user_street, std::string user_city, std::string user_state, std::string user_pst_code);
    StreetAddress(unsigned int user_house_num, std::string user_street, std::string user_city, std::string user_state, std::string user_pst_code);
    ~StreetAddress();

   //Methods
   void print_address() const; //Prints numbers and street on one line and the rest on another
   bool comes_before(StreetAddress address);

private:
    int apartment_number; //Optional apartment number, negative numbers indicate inexistance
    unsigned int house_number; //House number
    std::string street; //Name of the street
    std::string city;
    std::string state;
    std::string postal_code;
};

long unsigned int string2int(std::string str);

int main()
{
    StreetAddress hebraica(1000, "Rua Hungria", "Sao Paulo", "Sao Paulo", "01455-000");
    StreetAddress ifsc_itajai(3899, "Av. Abraao Joao Francisco", "Itajai", "Santa Catarina", "88307-303");

    if(hebraica.comes_before(ifsc_itajai))
        std::cout<<"A hebraica vem antes do ifsc"<<std::endl;

    return 0;
}

StreetAddress::StreetAddress(int user_apart_num, unsigned int user_house_num, std::string user_street, std::string user_city, std::string user_state, std::string user_pst_code)
{
    apartment_number = user_apart_num;
    house_number = user_house_num;
    street = user_street;
    city = user_city;
    state = user_state;
    postal_code = user_pst_code;
}

StreetAddress::StreetAddress(unsigned int user_house_num, std::string user_street, std::string user_city, std::string user_state, std::string user_pst_code)
{
    apartment_number = -1;
    house_number = user_house_num;
    street = user_street;
    city = user_city;
    state = user_state;
    postal_code = user_pst_code;
}

StreetAddress::~StreetAddress()
{}

void StreetAddress::print_address() const
{
    if(apartment_number>=0)
        std::cout<<apartment_number<<", ";

    std::cout<<house_number<<", "<<street<<std::endl;
    std::cout<<city<<", "<<state<<", "<<postal_code<<std::endl;
}

bool StreetAddress::comes_before(StreetAddress address)
{
    //I'm not sure how I should do this because I don't understand postal codes
    //Maybe I'll correct it later
    //Whatever, I looked for the logic in postal codes both here and in the US, and I'm
    //still unsure how I'm supposed to do it, so I'll leave this as it is
    long unsigned int this_pst_code = string2int(this->postal_code);
    long unsigned int address_pst_code = string2int(address.postal_code);
    std::cout<<"this "<<this_pst_code<<"\naddress "<<address_pst_code<<std::endl;
    if(this_pst_code<address_pst_code)
        return true; //This address comes before the one it is compared to
    else
        return false;
}

long unsigned int string2int(std::string str)
{
    int i = 0;
    long unsigned int str_int = 0;
    int str_size = str.size();
    int power  = 1;
{
    int j = 0;

    for(j = 0; j < (str_size - 1);j++)
    {
        if( (int)(str[j])>=48 && (int)(str[j])<=57)
            power*=10;
    }
}

    while(str[i])
    {
        if( (int)(str[i])>=48 && (int)(str[i])<=57)
        {
            str_int += ( (int)(str[i]) -48)*power;
            power/=10;
        }

        i++;

    }

    return str_int;
}

