let RecIsOdd = function(x)
{
    if(x===0)
        y = "even";
    else if(x===1)
        y = "odd";
    else
        y = RecIsOdd(x-2);

    return y;
}

result = RecIsOdd(10);
console.log("10 is " + result);
result = RecIsOdd(21);
console.log("21 is " + result);
