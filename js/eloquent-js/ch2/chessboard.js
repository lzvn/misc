let chessSideLength = 8;

for(let row = 0; row < 8; row++) {
	let rowString = "";
	let evenRow = row%2===0;
	for(let col = 0; col < 8; col++) {
		let evenCol = col%2===0;
		rowString+=(evenRow?evenCol:!evenCol)?" ":"#"; //The ternary with evenRow and evenCol implements a NXOR
	}
	console.log(rowString);
}
