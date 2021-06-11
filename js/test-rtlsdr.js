const fs = require('fs');
const wav = new require('wavefile').WaveFile();
const fm = require('./fmiqdemod.js');
const aux = require('./auxiliary.js');

const filename = './FMcapture1.dat'
const OLD_FRQ = 2500000;
const NEW_FRQ = 150000;
const TOTAL_TIME = 10;
const DEC_RATIO = Math.round(OLD_FRQ/NEW_FRQ);

let raw_data_buffer = fs.readFileSync(filename);
let raw_data = decimate(bin2float(raw_data_buffer));

console.log(raw_data);

function bin2float(buffer) {
	let float_data = [[], []];
	for(let i = 0; i<buffer.length; i+=2) {
		float_data[0].push((Number(buffer[i])-127.5)/127.5);
		float_data[1].push((Number(buffer[i+1])-127.5)/127.5);
	}
	return float_data;
}

//decimate espera um array de vários canais já depois de bin2float ou antes dele
function decimate(buffer, dec_ratio) {
	let decimated = [];
	let channel_number = 0;
	let buffer_length = 0;

	if(buffer[0].length>0) {
		channel_number = buffer.length;
		buffer_length = buffer[0].length;
	} else {
		channel_number = 1;
		buffer_length = buffer.length;
	}
	for(let i = 0; i<channel_number; i++) decimated.push([]);

	for(let i = 0; i<buffer_length; i++) {
		for(let j = 0; j<channel_number; j++) {
			if(i%dec_ratio===0) {
				decimated[j].push(buffer[j][i]);
			}
		}
	}

	return decimated;
}


