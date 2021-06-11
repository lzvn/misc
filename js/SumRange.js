let CustomRange = function(start, end, step=1)
{
    let arr = [];
    for(i = start; i<=end; i+=step)
        arr.push(Number(i));

    return arr;
}

let CustomSum = function(arr)
{
    const L = arr.length;
    let result = 0;
    for(i = 0; i<L; i++)
    {
        result+=arr[i];
    }

    return result;
}

arr =CustomRange(1, 10); 
console.log(CustomSum(arr));
