function fizzbuzz(n)
{
    for(var i = 0; i<=n;i++)
    {
        if(i%3===0 && i%5!==0)
	    console.log("fizz");
	else if(i%3!==0 && i%5===0)
	    console.log("buzz");
	else if(i%3===0 && i%5===0)
	    console.log("fizzbuzz");
	else
	    console.log(i);
    }
}

fizzbuzz(20);
