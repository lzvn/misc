'use strict'

//let aux;
if(typeof module!=='undefined' && typeof module.exports!=='undefined') {
	module.exports = amiqdemod;
	let aux = require('../auxiliary');
}

function amiqdemod(iq, fltr_coef)
{
	let offset = 0;
	let buffer_size = iq[0].length;
	let filter_order = fltr_coef.length;
	let y = [];
	let tmp = [];

	for(let count = 0; count<buffer_size; count++)
	{ 
		let i = iq[0][count];
		let q = iq[1][count];

		tmp.push(Math.sqrt(i*i + q*q)); //tira a magnitude da amostra IQ

		//filtro
		if(count>filter_order)
		{
			y[count] = aux.fir_filter(tmp, fltr_coef);
			tmp.shift();
		}
		else
		{
			y[count] = tmp[count];
		}

		offset += y[count]; //toma o menor valor do sinal 
	}
	offset /= buffer_size;

	for(let count = 0; count<buffer_size; count++)
		y[count]-=offset; //retira o menor valor encontrado, de forma a tirar o offset sem tornar o sinal negativo

	return y;
}

/* Código do matlab para referência:
function [y_AM_demodulated] = AM_IQ_Demod(y, fs)
    [b, a] = butter(2, 18000/fs);
    y_AM_demodulated = abs(y);
    y_AM_demodulated = filter(b, a, y_AM_demodulated);
    y_AM_demodulated = detrend(y_AM_demodulated);
end
*/
