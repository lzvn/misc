nfunction factorial(x)
{
    return(x>1?x*factorial(x-1):1);
}

console.log(factorial(8));
