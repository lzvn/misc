function reverseArray(input) {
	let inputLength = input.length;
	let output = [];
	for(let i = inputLength - 1; i >= 0; i--) output.push(input[i]);
	return output;
}

let numarr = [1, 2, 3, 4];
let letarr = ["A", "B", "C"];
console.log(reverseArray(numarr));
console.log(reverseArray(letarr));

function reverseArrayInPlace(input) {
	let inputLength = input.length;
	let aux;
	for(let i = 0; i < inputLength/2; i++) {
		aux = input[i];
		input[i] = input[inputLength - 1 - i];
		input[inputLength - 1 - i] = aux;
	}
}

reverseArrayInPlace(numarr);
console.log(numarr);
reverseArrayInPlace(letarr);
console.log(letarr);
