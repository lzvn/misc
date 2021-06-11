function listFromArray(array) {
	if(array.length === 0)
		return null;
	else
		return {value: array[0], next: listFromArray(array.slice(1, array.length))};
}

function nth(index, list) {
	let node;

	if(index>0 && list.next===null) node = "LIST OVERFLOW";
	else if(index===0) node = list.value;
	else node = nth(index-1, list.next);

	return node;
}

let arr = [1, 2, 3];
let list = listFromArray(arr);
console.log(arr);
console.log(list);
console.log(nth(2, list));
