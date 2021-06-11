let countChar = function(phrase, letter)
{
    let n = 0;
    phrase = phrase.toLowerCase();
    letter = letter.toLowerCase();

    for(let i = 0; i<phrase.length; i++)
        if(phrase[i]===letter)
            n++;

    return n;
}

let countBs = function(phrase)
{
    return countChar(phrase, "b");
}

console.log(countChar("abAcate", "a"));

console.log(countBs("black Ball"));
