let reverseArray = function(arr)
{
    let L = arr.length;
    let reverse_arr = [];

    for(i = 0; i<L; i++)
    {
        reverse_arr[i] = arr[L-1-i];
    }

    return reverse_arr;
}

function reverseArrayInPlace(arr)
{
    revarr = reverseArray(arr);
    //console.log(revarr);
    //I get it now, you have to change each address for this to work
    //given this condition, it would be better to use the traditional algorithm, but whatever
    for(let i = 0; i<arr.length; i++)
        arr[i] = revarr[i];
    return arr;
}

/*
//why does my code (above) doesn't work, but this one does?
//got it
function reverseArrayInPlace(array) 
{
  for (let i = 0; i < Math.floor(array.length / 2); i++) 
  {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/


arr = ["1", "2", "3"];
console.log("arr = " + arr);
revarr = reverseArray(arr);
console.log("revar = " + revarr);
reverseArrayInPlace(arr);
console.log("new arr = " + arr);
