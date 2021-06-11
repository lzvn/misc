function deepEqual(x, y)
{
    let is_equal = false;

    if(typeof(x)!==typeof(y))
        is_equal = false;
    else if(typeof(x)===typeof(y) && typeof(x)!=="object")
        is_equal = (x===y);
    else if(typeof(x)==="object" && typeof(y)==="object" && (Object.keys(x).length!==Object.keys(y).length))
        is_equal = false;
    else
    {
        is_equal = true;
        const L = Object.keys(x).length;
        x_keys = Object.keys(x);
        y_keys = Object.keys(y);

        for(let i = 0; i<L; i++)
        {
            if(x_keys[i]!==y_keys[i])
                is_equal = false;
            else if(x[x_keys[i]] !== y[y_keys[i]])
                is_equal = false;

            if(!is_equal)
                break;
        }
    }

    return is_equal;
}

let num1 = 2;
let num2 = 3;
let num3 = 2;

//console.log(deepEqual(num1, num3));

obj1 = {name: "jon", age: 15};
obj2 = {name: "erik", age: 77};
obj3 = {country: "usa", continent: "americas"};
obj4 = {name: "jon", age: 15};
obj5 = {country: "jon", continent: 77};
obj6 = {name: "jon", age: 15, country: "usa"};

console.log(deepEqual(obj1, obj6));
