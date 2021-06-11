let star = "";

for(let i = 0; i<18; i++)
{
    if(i===8 || i===17)
    {
        star+="\n";
        continue;
    }
    if(i%2 === 0)
        star+=" ";
    else
        star+="#";
}

star+=star;
star+=star;

console.log(star);
