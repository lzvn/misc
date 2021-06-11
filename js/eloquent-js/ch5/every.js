function every(array, test) {
	let allPass = true;
	array.forEach((element) => {
		if(!test(element)) {
			allPass = false;
			return;
		}
	})
	return allPass;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
