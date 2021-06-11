const ALIVE = true;
const DEAD = false;
const LIFE_CHANCE = 0.95;
const WIDTH = 250;
const HEIGHT = 250;
let cells = [];
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("canvas").width = WIDTH;
	document.querySelector("canvas").height = HEIGHT;
	document.querySelector("#next-gen").onclick = nextGen;
	document.querySelector("#reset").onclick = resetCells;
})

function nextGen() {
	if(cells.length==0) {
		let nextGenBtn = document.querySelector("#next-gen");
		nextGenBtn.innerHTML = "Loading..."
		startGame();
		nextGenBtn.innerHTML = "Next Generation";
		return;
	}

	let newCells = cells.map(row => row.map(cell => cell)); //creates a copy of cells;
	let liveCells = 0;
	let canvas = document.querySelector("canvas");
	let ctx = canvas.getContext("2d");

	for(let i = 0; i < WIDTH; i++) {
		for(let j = 0; j < HEIGHT; j++) {
			let liveCells = scanForLifeForms(i, j);
			let cell = cells[i][j];

			if(cell===ALIVE && liveCells < 2) newCells[i][j] = DEAD;
			else if(cell = ALIVE && liveCells >= 2) newCells[i][j] = cell;
			else if(cell = DEAD && liveCells >= 2) newCells[i][j] = ALIVE;
			else newCells[i][j] = cell; //by default, newCells gets the same value of cell
			
			if(newCells[i][j] === ALIVE) makeLiveCell(i, j, ctx);
			else if(newCells[i][j] === DEAD) makeDeadCell(i, j, ctx);
		}
	}

	cells = newCells.map(row => row.map(cell => cell));
}

function startGame() {
	let canvas = document.querySelector("canvas");
	let ctx = canvas.getContext("2d");
	for(let i = 0; i < WIDTH; i++) {
		cells.push([]);
		for(let j = 0; j < HEIGHT; j++) {
			let cellLife = (Math.random()>LIFE_CHANCE)?ALIVE:DEAD;
			cells[i].push(cellLife);
			if(cellLife===ALIVE) makeLiveCell(i, j, ctx);
			else makeDeadCell(i, j, ctx);
		}
	}
}

function makeLiveCell(x, y, ctx) {
	ctx.fillStyle = "black";
	ctx.fillRect(x, y, 1, 1);
}

function makeDeadCell(x, y, ctx) {
	ctx.fillStyle = "white";
	ctx.fillRect(x, y, 1, 1);
}

function scanForLifeForms(x, y) {
	let liveCells = 0;
	for(let i = -1; i <= 1; i++) {
		if(x + i < 0 || x + i >= WIDTH) continue;
		for(let j = -1; j <= 1; j++) {
			if(y + j < 0 || y + j >= HEIGHT) continue;
			if(i == 0 && j == 0) continue;

			if(cells[x + i] == undefined || cells[x + i][y + j] == undefined) {
				console.log("Undefined cell or row");
				console.log(x+i);
				console.log(y+j);
			}
			if(cells[x + i][y + j] == ALIVE) liveCells++;
		}
	}

	return liveCells;
}

function resetCells() {
	let canvas = document.querySelector("canvas");
	let ctx = canvas.getContext("2d");
	cells = [];
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	document.querySelector("#next-gen").innerHTML = "Start Game";
}
