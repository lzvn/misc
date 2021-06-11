function arrayToList(array)
{
    if(array.length===1)
    {
       list = {value: array[0], next: null};
    }
    else
    {
        //node is not letting me use array.shift(), so I made it this way.
        let newarray = [];
        for(let i = 1; i<array.length; i++)
        {
            newarray[i-1] = array[i];
        }

        list = {value: array[0], next: arrayToList(newarray)};
    }

    return list;
}

array = [1, 2, 3];
list = arrayToList(array, array.length);
console.log(list);
