//group class from group.js, to be made iterable

class Group {
	constructor(...firstElements) {
		this.elements = [];
		let elementsToAdd;
		if(typeof firstElements[0] === 'object') elementsToAdd = firstElements[0];
		else elementsToAdd = firstElements;
		for(let i = 0; i < elementsToAdd.length; i++) this.add(elementsToAdd[i]);

		class GroupIterator {
			constructor(group) {
				this.group = group;
				this.index = 0;
			}
			next() {
				if(this.index === this.group.elements.length) return {done: true}
				let output = {value: this.group.elements[this.index], done: false};
				this.index++;
				return output;
			}
		}
		this.groupIterator = new GroupIterator(this);
	}

	[Symbol.iterator] = () => { return this.groupIterator; }

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
console.log(Group.from(["a", "b", "c"]));

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

