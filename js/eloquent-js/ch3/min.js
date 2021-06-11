let min = function(...args) {
	let argNum = args.length;
	let minValue = 0; 
	for(let i = 0; i < argNum; i++) {
		minValue = (minValue<args[i])?minValue:args[i];
	}
	return minValue;
}

console.log("Minimum of [0, 2, 3] is " + min(0, 2, 3));
console.log("Minimum of [-10, 100, -90] is " + min(-10, 100, -90));
