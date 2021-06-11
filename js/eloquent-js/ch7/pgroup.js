//From group exercise in the chapter 6
/*
class Group {
	constructor(...firstElements) {
		this.elements = [];
		let elementsToAdd;
		if(typeof firstElements[0] === 'object') elementsToAdd = firstElements[0];
		else elementsToAdd = firstElements;

		for(let i = 0; i < elementsToAdd.length; i++) this.add(elementsToAdd[i]);
	}

	static from(array) {
		return new Group(array);
	}

	add(newElement) {
		if(!this.has(newElement)) this.elements.push(newElement);
	}

	//the exercise has delete, but I decided to use remove since delete is a reserved word
	remove(elementToRemove) {
		if(this.has(elementToRemove)) {
			let indexOfRemoved = this.elements.indexOf(elementToRemove);
			let firstPart = this.elements.slice(0, indexOfRemoved);
			let secondPart = this.elements.slice(indexOfRemoved+1, this.elements.length);
			this.elements = firstPart.concat(secondPart);
		}
	}

	has(elementToVerify) {
		let inSet = false;
		this.elements.forEach((element) => {
			if(elementToVerify===element) inSet = true;
		});
		return inSet;
	}
}
*/

class PGroup {
	constructor(...firstElements) {
		this.elements = [];
		let elementsToAdd;
		if(typeof firstElements[0] === 'object') elementsToAdd = firstElements[0];
		else elementsToAdd = firstElements;

		for(let i = 0; i < elementsToAdd.length; i++) {
			if(!this.has(elementsToAdd[i])) this.elements.push(elementsToAdd[i]);
		}
	}

	static from(array) {
		return new PGroup(array);
	}

	add(newElement) {
		let groupWithAdded = PGroup.from(this.elements);
		if(!groupWithAdded.has(newElement)) groupWithAdded.elements.push(newElement);
		return groupWithAdded;
	}

	//the exercise has delete, but I decided to use remove since delete is a reserved word
	remove(elementToRemove) {
		let groupWithoutRemoved = PGroup.from(this.elements);
		if(groupWithoutRemoved.has(elementToRemove)) {
			let indexOfRemoved = groupWithoutRemoved.elements.indexOf(elementToRemove);
			let firstPart = groupWithoutRemoved.elements.slice(0, indexOfRemoved);
			let secondPart = groupWithoutRemoved.elements.slice(indexOfRemoved+1, this.elements.length);
			groupWithoutRemoved.elements = firstPart.concat(secondPart);
		}
		return groupWithoutRemoved;
	}

	has(elementToVerify) {
		let inSet = false;
		this.elements.forEach((element) => {
			if(elementToVerify===element) inSet = true;
		});
		return inSet;
	}
}
let group = PGroup.from([10, 20, 10]);
console.log(group);
//console.log(group.has(10));
//console.log(group.has(30));
console.log(group.add(10));
console.log(group.remove(10));
//console.log(group.has(10));
console.log(group);
