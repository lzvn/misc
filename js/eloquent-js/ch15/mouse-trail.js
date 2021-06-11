var followers = [];
const FOLLOWER_NUMBER = 6;
const VARIANCE = 10;
document.addEventListener("DOMContentLoaded", () => {
	for(let i = 0; i<FOLLOWER_NUMBER; i++) {
		followers[i] = document.createElement("div");
		followers[i].className = "trail";
		document.body.appendChild(followers[i]);

	}
	function updateFollower(event) {
		var x = event.clientX;
		var y = event.clientY;
		followers.forEach((follower) => {
			let xVariance = VARIANCE*(2*Math.random()-1);
			let yVariance = VARIANCE*(2*Math.random()-1);
			follower.style.top = (yVariance + y) + "px";
			follower.style.left = (xVariance + x) + "px";
		})
	}

	document.body.onmousemove = updateFollower;
})
