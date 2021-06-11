const express = require('express');
let server = express();
const PORT = 8080

server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>HELLO WORLD!</h1>');
  //res.send('Hello World!');
});

server.listen(PORT, function () {
  console.log('Example server listening on port ' + PORT + '!');
});
