document.addEventListener("DOMContentLoaded", () => {
	let canvas = document.querySelector("canvas");
	let cx = document.querySelector("canvas").getContext("2d");
	let speed = 50;
	const arena = {
		startX: canvas.width*0.1,
		startY: canvas.height*0.1,
		endX: canvas.width*0.9,
		endY: canvas.height*0.9,
	}
	const ball = {
		x: (arena.startX + arena.endX)/2,
		y: (arena.startY + arena.endY)/2,
		r: 20
	}

	let lastTime = null;
	function frame(time) {
		if (lastTime != null) {
			updateAnimation(Math.min(100, time - lastTime) / 1000);
		}
		lastTime = time;
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);

	function updateAnimation(step) {
		//drawing the arena
		cx.clearRect(0, 0, canvas.width, canvas.height);
		cx.beginPath();
		cx.moveTo(arena.startX, arena.startY);
		cx.lineTo(arena.endX, arena.startY);
		cx.lineTo(arena.endX, arena.endY);
		cx.lineTo(arena.startX, arena.endY);
		cx.lineTo(arena.startX, arena.startY);
		cx.stroke();

		//the ball
		cx.beginPath();
		cx.fillStyle = "red";
		cx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
		cx.fill();
		ball.x+=speed*step;

		if(ball.x-ball.r <= arena.startX+step || ball.x + ball.r >= arena.endX-step) speed *= -1;
	}
})
