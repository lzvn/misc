function flatten(matrix) {
	let flatennedMatrix = matrix.reduce((a, b) => { if(a) return a.concat(b); });

	return flatennedMatrix;
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
