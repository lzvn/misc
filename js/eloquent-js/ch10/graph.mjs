//bugs because nodejs is still implementing ecmascript 6's export and I believe it is not working due to
//lack of a package.json in this folder, which I will not add because there is not true need of it
export class Graph {
	constructor(firstEdges) {
		for(let [from, to] of firstEdges.map((r) => { return r.split('-') })) {
			this.addEdge(from, to);
			this.addEdge(to, from);
		}
	}

	addEdge(from, to) {
		if(this[from] == null) {
			this[from] = [to];
		} else {
			this[from].push(to);
		}
	}

}
