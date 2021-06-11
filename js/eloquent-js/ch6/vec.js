class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	get length() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
	plus(vector) {
		let resultX = this.x + vector.x;
		let resultY = this.y + vector.y;
		return new Vec(resultX, resultY);
	}
	minus(vector) {
		let resultX = this.x - vector.x;
		let resultY = this.y - vector.y;
		return new Vec(resultX, resultY);
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
