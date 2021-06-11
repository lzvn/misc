let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	let userid = socket.id;
	console.log('User ' + userid + ' connected!');
	socket.on('disconnect', (socket) => {
		console.log('User ' + userid + ' disconnected');
	});
	socket.on('chat-message', (msg) => {
		console.log('Message from ' + msg.userid + ': '+ msg.value);
		io.emit('chat-message', msg);
	});
});
http.listen(3000, () => {
	console.log('Listening at 3000!');
});
