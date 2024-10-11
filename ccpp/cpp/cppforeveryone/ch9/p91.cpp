class TallyCounter
{
public:

    //Constructors and destructors
    TallyCounter(); //Starts wtih 0 by default
    TallyCounter(unsigned int initial_value); //Starts with an initial value set by the user
    ~TallyCounter();

    //Methods
    void count();
    unsigned int get_count() const;

private:

    unsigned int count_value;
};

TallyCounter::TallyCounter()
{
    this->count_value = 0;
}

TallyCounter::TallyCounter(unsigned int initial_value)
{
    this->count_value = initial_value;
}

TallyCounter::~TallyCounter()
{
    this->count_value = 0; //Dunno what I should do here, lmao
}

void TallyCounter::count()
{
    this->count_value++;
}

unsigned int TallyCounter::get_count()
{
    return this->count_value;
}
