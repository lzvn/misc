class Rectangle
{
public:

    //Constructors and destructors
    Rectangle();
    Rectangle(float user_width, float user_height);
    ~Rectangle();

    //Methods
    float get_perimeter() const;
    float get_area() const;
    void resize(float factor); //Multiplies the rectangle's width and height by factor

private:

    float width;
    float height;
};

Rectangle::Rectangle()
{
    this->width = 0;
    this->height = 0;
}

Rectangle::Rectangle(float user_width, float user_height)
{
    this->width = user_width;
    this->height = user_height;
}

float Rectangle::get_perimeter()
{
    return (2*(this->width + this->height));
}

float Rectangle::get_area()
{
    return (this->width * this->height);
}

void Rectangle::resize(float factor)
{
    this->width = factor * this->width;
    this->height = factor * this->height;
}
