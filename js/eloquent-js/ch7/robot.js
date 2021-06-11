//this was supposed to be the code of the lesson + the exercises, but I'll leave the lesson here
//and do the exercises in another file

//roads given in the book
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//graph builder from the book
//graphs are fun
function BuildGraph(edges) {
	let graph = Object.create(null);
	function addEdge(from, to) {
		if(graph[from] == null) {
			graph[from] = [to]
		} else {
			graph[from].push(to);
		}
	}

	for(let [from, to] of edges.map((r) => { return r.split('-') })) {
		addEdge(from, to);
		addEdge(to, from);
	}

	return graph;
}
//const roadGraph = BuildGraph(roads);
//console.log("The book's function method:");
//console.log(roadGraph);

//now as a class
class Graph {
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

const meadowfieldMap = new Graph(roads);
//console.log(meadowfieldMap);

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if(!meadowfieldMap[this.place].includes(destination)) {
			return this;
		} else {
			let parcels = this.parcels.map((p) => {
				if(p.place != this.place) return p;
				return {place: destination, address: p.address};
			}).filter((p) => { return p.place != p.address });

			return new VillageState(destination, parcels);
		}
	}
}

//funcion that runs the robot
function runRobot(state, robot, memory) {
	for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Done in ${turn} turns`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

//functions for random picking of places et al
function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot(state) {
	return {direction: randomPick(meadowfieldMap[state.place])};
}

//function that initialize random parcels
VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(meadowfieldMap));
		let place;
		do {
			place = randomPick(Object.keys(meadowfieldMap));
		} while (place == address);
		parcels.push({place, address});
	}
	//console.log(parcels);
	return new VillageState("Post Office", parcels);
};

//1st test
//runRobot(VillageState.random(), randomRobot);

//an improved version that runs through the village twice in an specific route that passes through all places
function routeRobot(state, memory) {
	const mailRoute = [
		"Alice's House", "Cabin", "Alice's House", "Bob's House",
		"Town Hall", "Daria's House", "Ernie's House",
		"Grete's House", "Shop", "Grete's House", "Farm",
		"Marketplace", "Post Office"
	];
	if (memory==undefined || memory.length === 0) {
		memory = mailRoute;
	}
	return {direction: memory[0], memory: memory.slice(1)};
}

//2nd test
//runRobot(VillageState.random(), routeRobot);

//route-finding algorithm
function findRoute(graph, from, to) {
	let work = [{at: from, route: []}];
	for (let i = 0; i < work.length; i++) {
		let {at, route} = work[i];
		for (let place of graph[at]) {
			if (place == to) return route.concat(place);
			if (!work.some(w => w.at == place)) {
				work.push({at: place, route: route.concat(place)});
			}
		}
	}
}

//robot that uses the above algorithm
function goalOrientedRobot({place, parcels}, route) {
	if (route.length == 0) {
	let parcel = parcels[0];
	if (parcel.place != place) {
		route = findRoute(meadowfieldMap, place, parcel.place);
	} else {
		route = findRoute(meadowfieldMap, place, parcel.address);
	}
	}
	return {direction: route[0], memory: route.slice(1)};
}

//3rd test
//runRobot(VillageState.random(), goalOrientedRobot, []);
