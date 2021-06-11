const range = (start, end, step) => {
	if(step === undefined) step = 1;
	let rangeArray = [];
	for(let i = start; i<=end; i += step) rangeArray.push(i);
	return rangeArray;
}

const sum = (itens) => {
	let itensNumber = itens.length;
	let sumResult = 0;
	for(let i = 0; i < itensNumber; i++) sumResult += itens[i];
	return sumResult;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
