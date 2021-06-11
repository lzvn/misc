function deepEqual(var1, var2) {
	let isEqual = false;
	if(typeof(var1)!==typeof(var1)) {
		isEqual = false;
	} else if(typeof(var1)===typeof(var2) && typeof(var1)!=='object') {
		isEqual = var1===var2;
	} else {
		let keysOfVar1 = Object.keys(var1).sort();
		let keysOfVar2 = Object.keys(var2).sort();

		if(keysOfVar1.length!==keysOfVar2.length) {
			isEqual = false;
		} else {
			let differences = 0;
			for(let i = 0; i < keysOfVar1.length; i++) {
				if( keysOfVar1[i] !== keysOfVar2[i] ) differences++;
				if( var1[keysOfVar1[i]] !== var2[keysOfVar2[i]] ) differences++;
			}
			if(differences === 0) isEqual = true;
			else isEqual = false;
		}
	}
	return isEqual;
}

console.log("string and number");
console.log(deepEqual("word", 10));

console.log("two different numbers");
console.log(deepEqual(10, 12));

console.log("two equal strings");
console.log(deepEqual("word", "word"));

let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, b: 2};
let obj3 = {a: 2, b: 3};
let obj4 = {a: 1, c: 2};
let obj5 = {b: 2, a: 1};

console.log("obj1 and obj2 (equal)");
console.log(deepEqual(obj1, obj2));

console.log("obj1 and obj3 (same keys in same order but different values)");
console.log(deepEqual(obj1, obj3));

console.log("obj1 and obj4 (different keys with same correspondent values)");
console.log(deepEqual(obj1, obj4));

console.log("obj1 and obj5 (same keys and correspondent values but in different order)");
console.log(deepEqual(obj1, obj5));
