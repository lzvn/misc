const PORT = 8080;

const http = require('http');
const fs = require('fs');

const server = http.createServer
( (req, res) =>
    {
        res.setHeader('Content-Type', 'text/html');
        let strm = fs.createReadStream('./index.html');
        strm.pipe(res);
        strm.pipe(process.stdout);
        strm.pipe(fs.createWriteStream("site.txt"));
    }
)

server.listen(PORT, () =>
{
    console.log("localhost:" + PORT);
});
