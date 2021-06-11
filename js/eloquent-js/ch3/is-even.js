const isEven = (number) => {
	if(number < 0) number = -number;
	let isEvenOutput = false;
	switch(number) {
		case 0:
			isEvenOutput = true;
			break;
		case 1:
			isEvenOutput = false;
			break;
		default:
			isEvenOutput = isEven(number-2);
	}
	return isEvenOutput;
}

console.log(isEven(6));
console.log(isEven(5));
console.log(isEven(-6));
console.log(isEven(-5));
