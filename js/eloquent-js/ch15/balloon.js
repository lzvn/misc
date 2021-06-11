var balloon;
const INTACT_BALLOON = 127880;
const EXPLODED_BALLOON = 128165;
const STEP = 10;
var size = 10;
var exploded = false;

document.addEventListener("DOMContentLoaded", () => {
	balloon = document.getElementById("balloon");
	balloon.style.fontSize = size + "px";
	//console.log(balloon);	
	document.body.onkeydown = (event) => {
		if(event.key === "ArrowUp" && !exploded)
			size+=STEP;
		else if(event.key === "ArrowDown" && !exploded)
			size-=STEP;

		if(size>300 && !exploded) {
			balloon.innerHTML = document.querySelector("#exploded").innerHTML;
			exploded = true;
			alert("BOOOOOOOOOOOOOOM!");
		}
		balloon.style.fontSize = size + "px";
		//console.log(size);
	}
})
