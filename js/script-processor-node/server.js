'use strict'

const fs = require("fs");
const express = require('express');
const getStat = require('util').promisify(fs.stat);

//const HOSTNAME = '127.0.0.1';
//const URL_ADDR = 'proj-final-siscom.herokuapp.com';
const PORT = process.env.PORT||3000;
const URL_ADDR = '127.0.0.1:'+PORT;
const AUDIO_FILE = './viper.ogg';
const AUX_LIB = './auxiliary.js'
const AM_LIB = './amiqdemod.js';
const FM_LIB = './lib/demodulators/fmiqdemod.js'
const LSB_LIB = './lib/demodulators/lsbiqdemod.js'
const USB_LIB = './lib/demodulators/usbiqdemod.js'

const app = express();

app.use(express.static('./'));

app.get('/audio.wav', async (req, res) => {
	const stat = await getStat(AUDIO_FILE);
	res.writeHead(200, {
		'Content-Type': 'audio/wav',
		'Content-Length': stat.size
	});

	let stream = fs.createReadStream(AUDIO_FILE);
	//stream.on('end', () => console.log('Fim do arquivo'));
	stream.pipe(res);
});

app.get('/auxiliary.js', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/javascript'
	});
	res.write(fs.readFileSync(AUX_LIB));
	res.end();
});

app.get('/amiqdemod.js', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/javascript'
	});
	res.write(fs.readFileSync(AM_LIB));
	res.end();
});


app.listen(PORT, () => {
	console.log('Server working at port ' + PORT);
	console.log('Check it at the address ' + URL_ADDR);
})
