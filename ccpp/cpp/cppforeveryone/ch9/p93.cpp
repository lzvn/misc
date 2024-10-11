//ao menos a declaração

class CashRegister
{
public:

    //Constructor and destructor
    CashRegister(); //Simple constructor, just clears the price list
    ~CashRegister();

    //methods
    void clear(); //Clear the price list
    void add_item(); //appends a new price to the list
    float get_total() const; //Returns the total value
    unsigned int get_count() const; //Gets the number of things in the current sale
    void display_all() const; //Display all prices of the current sale

private:

    float *price_list = new float(50); //list of all prices
};
