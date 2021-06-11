fs = require('fs');
path = require('path');

fs.open("./hello.txt", 'r', (err, data) =>
{
    console.log("Open function result: ");
    if(err)
    {
        console.log("erro");
        console.log(err);
    }
    else
    {
        console.log("sucesso");
        console.log(data);
    }
});

fs.stat("./hello.txt",  (err, data) =>
{
    console.log("Stat function result");
    if(err)
    {
        console.log("erro");
        console.log(err);
    }
    else
    {
        console.log("sucesso");
        console.log(data)
    }

    console.log(data.isFile());
    console.log(data.isDirectory());
    console.log(data.isSymbolicLink());
    console.log(data.size);
});



const file = "/home/r2d2/Documents/prg/nodejs-dev/hello.txt";

console.log(path.dirname(file)); //parent directory
console.log(path.basename(file)); //name with extension
console.log(path.extname(file)); //extension only
console.log(path.basename(file, path.extname(file))); //only the name, without the extension

//there is also:
let name = "hello";
path.join("~/", "Documents", "prg", "nodejs-dev", name, ".txt"); // ~/Documents/prg/nodejs-dev/hello/txt
path.resolve(name+".txt"); // yelds the same as the file constant above (in other words, the absolute path)
path.resolve("nodejs-dev", name+".txt"); // yields same as above, the function accepts other arguments as well
path.normalize('/users/joe/..//test.txt'); ///users/test.txt

fs.readFile("./hello.txt", "utf8", (err, data) =>
{
    if(err)
    {
        console.log("erro");
        console.log(err);
    }
    else
    {
        console.log("sucesso");
        console.log(data)
    }
})

let text = "Hello, R2D2!"
fs.writeFile("./hello.txt", text, {flag: "a"}, err =>
{
    if(err)
        console.log(err);
});
//apparently, writeFile doesn't add a \n at the end of the string (as it should be)

fs.appendFile("./hello.txt", "See ya!", err =>
{
    if(err)
        console.log(err);
})

//there is the part about folders and directories, but I'll won't put it here since it is practically a listing
//of the main functions with a example for each
//one thing I believe a should mention is the fs-extra library. It has a lot of nice extre functionalites for fs

