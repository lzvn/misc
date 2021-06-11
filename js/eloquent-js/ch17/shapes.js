function getById(id) { return document.getElementById(id) }

var trapezoid;
var diamond;
var zigzag;
var spiral;
var star;

document.addEventListener("DOMContentLoaded", () => {
	drawTrapezoid(50, 25, 25, {x: 50, y: 50});
	drawDiamond(500, { x: 50, y: 50 });
	drawZigZag(50, 100, 10, { x: 25, y: 25 });
	drawSpiral(Math.PI/16, 2, { x: 50, y: 50 });
	drawStar(50, 15, { x: 50, y: 50 });
});

function drawTrapezoid(lowerBase, upperBase, height, start) {
	var trapezoid = getById("trapezoid");
	var ctx = trapezoid.getContext("2d");
	var nextPoint = {
		x: start.x,
		y: start.y
	}
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	nextPoint.x = start.x + lowerBase;
	nextPoint.y = start.y
	ctx.lineTo(nextPoint.x, nextPoint.y);
	nextPoint.x = nextPoint.x - (lowerBase - upperBase)/2;
	nextPoint.y = nextPoint.y - height;
	ctx.lineTo(nextPoint.x, nextPoint.y);
	nextPoint.x = nextPoint.x - upperBase;
	ctx.lineTo(nextPoint.x, nextPoint.y);
	ctx.closePath();
	ctx.stroke();
}

function drawDiamond(side, start) {
	var diamond = getById("diamond");
	var ctx = diamond.getContext("2d");
	var increment = side/Math.sqrt(side);
	var nextPoint = {
		x: start.x,
		y: start.y
	}
	function lineTo() { ctx.lineTo(nextPoint.x, nextPoint.y) }
	function update(x, y) { nextPoint.x+=x; nextPoint.y+=y; lineTo() }

	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.moveTo(start.x, start.y);
	update(increment, -increment);
	update(increment, increment);
	update(-increment, increment);
	ctx.closePath();
	ctx.fill();
}

function drawZigZag(horzLength, height, step, start) {
	var zigzag = getById("zig-zag");
	var ctx = zigzag.getContext("2d");
	var lineNumber = Math.round(height/step);

	var nextPoint = {
		x: start.x,
		y: start.y
	}
	function continueDraw(x, y) { nextPoint.x+=x; nextPoint.y+=y; ctx.lineTo(nextPoint.x, nextPoint.y) }

	ctx.moveTo(start.x, start.y);
	for(var i = 0; i < lineNumber; i++) {
		let sign = (i%2===0)?1:-1
		continueDraw(sign*horzLength, step);
	}
	ctx.stroke();
}

function drawSpiral(angular_frq, radiusStep, center) {
	const SEGMENT_NUM = 100;
	var spiral = getById("spiral");
	var ctx = spiral.getContext("2d");
	var radius = 0;
	var radius_incr = radiusStep/(2*Math.PI);

	ctx.moveTo(center.x, center.y);
	for(var i = 0; i < SEGMENT_NUM; i++) {
		incr_x = radius*Math.cos(angular_frq*i);
		incr_y = -radius*Math.sin(angular_frq*i);
		radius+=radius_incr;
		ctx.lineTo(incr_x + center.x, incr_y + center.y);
	}
	ctx.stroke();
}
//okay, fuck this one
function drawStar(outerRadius, innerRadius, center) {
	const CURVE_NUM = 6;
	const PHASE = 30*Math.PI/180;
	var star = getById("star");
	var ctx = star.getContext("2d");
	var x = outerRadius*Math.cos(curveAngle - PHASE) + center.x;
	var y = -outerRadius*Math.sin(curveAngle - PHASE) + center.y;
	var curveMaxX;
	var curveMaxY;
	var curveAngle = 0;
	var angleIncr = 2*Math.PI/CURVE_NUM;

	ctx.fillStyle = "gold";
	ctx.beginPath();
	ctx.moveTo(x, y);

	for(let i = 0; i < CURVE_NUM+1; i++) {
		x = outerRadius*Math.cos(curveAngle + PHASE) + center.x;
		y = -outerRadius*Math.sin(curveAngle + PHASE) + center.y;
		curveMaxX = innerRadius*Math.cos(curveAngle) + center.x;
		curveMaxY = -innerRadius*Math.sin(curveAngle) + center.y;
		ctx.quadraticCurveTo(curveMaxX, curveMaxY, x, y)
		curveAngle+=angleIncr;
	}
	//ctx.closePath();
	ctx.fill();
}
