const http = require('http')
const fs = require('fs');
//const bp = require('body-parser');

//const PORT = process.env.PORT;
const PORT = 8080;
const PAGE = fs.readFileSync("./index.html");

function parseBody(body_str)
{
    let div_str = body_str.split("&");
    //console.log("argument body_str = " + body_str)
    //console.log("div_str = " + div_str);
    let out_obj = {};
    //o código para quebrar as strings está estranho, mas funciona
    for(let i = 0; i<div_str.length; i++)
    {
        let aux2 = "";
        if(div_str[i]==="")
            continue;

        let aux = div_str[i].split("=");
        aux[1] = aux[1].split("+");

        for(let j = 0; j<aux[1].length; j++)
        {
            if(j>0)
                aux2+=" ";
            aux2+=aux[1][j];
        }

        //console.log(aux2);
        out_obj[aux[0]]=aux2;
        //console.log(out_obj);
    }


    return out_obj;
}

function extractPost(req)
{
    let promise = new Promise((resolve, reject) => {
        let body_str = "";
        req.on('data', (chunk) =>
        {
            //console.log(chunk.toString());
            body_str += chunk.toString() + "&";
        });
        //sim, isto é uma gambiarra muito feia, eu não me orgulho desse código
        setTimeout( () =>
        {
            if(body_str!=="")
                resolve(body_str);
            else
                reject("ERRO!");
        }, 0);
    })

    return promise;
}

const server = http.createServer((req, res) => {

    if(req.method==="POST")
    {
        console.log("POST request received");
        extractPost(req)
        .then(
            function(body_str)
            {
                //console.log("body string = "+body_str);

                let body = parseBody(body_str);
                return body;
            }
        )
        .then(body => console.log(body))
        .catch(err => console.log("ERRO!"));

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('sucess', true);
        res.end('<h1>Data sent to the skynet databases, human. Terminators are already in your way</h1>');
    }
    else if(req.method==="GET")
    {
        console.log("GET request received");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Set-Cookie', ['userid=1']);
        res.end(PAGE);
     }
    else
    {
        console.log("REQUEST RECEIVED WITH ERROR");
        console.log(req);
    }
});

server.listen(PORT, () => {
    //console.log(PAGE.toString());
    console.log(`Server running at port ${PORT}`);
});
