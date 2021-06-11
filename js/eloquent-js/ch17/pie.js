const results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

document.addEventListener("DOMContentLoaded", () => {
	let cx = document.querySelector("canvas").getContext("2d");
	let total = results
	.reduce((sum, {count}) => sum + count, 0);
	let currentAngle = -0.5 * Math.PI;
	let textAngle = -0.5*Math.PI;
	let pieRadius = 100;
	let textRadius = 1.1*pieRadius;
	let centerX = 300, centerY = 150;
	let pixelsPerCharX = 15;
	let pixelsPerCharY = 35;
	cx.font = "28px Georgia";

	// Add code to draw the slice labels in this loop.
	for (let result of results) {
		let sliceAngle = (result.count / total) * 2 * Math.PI;
		cx.beginPath();
		cx.arc(centerX, centerY, pieRadius, currentAngle, currentAngle + sliceAngle);
		currentAngle += sliceAngle;
		cx.lineTo(centerX, centerY);
		cx.fillStyle = result.color;
		cx.fill();

		textAngle +=sliceAngle/2;
		let textX = textRadius*Math.cos(textAngle) + centerX;
		let textY = textRadius*Math.sin(textAngle) + centerY;
		if(textAngle > 3*Math.PI/4 && textAngle < 5*Math.PI/4) textX -= pixelsPerCharX*result.name.length;
		if(textAngle > Math.PI/4 && textAngle < 3*Math.PI/4) textY += pixelsPerCharY;
		cx.fillText(result.name, textX, textY);
		textAngle+=sliceAngle/2;
	}
})
