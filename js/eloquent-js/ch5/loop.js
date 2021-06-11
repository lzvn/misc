function loop(startValue, testFunction, stepFunction, bodyFunction) {
	if(!testFunction(startValue)) return;
	bodyFunction(startValue);
	loop(stepFunction(startValue), testFunction, stepFunction, bodyFunction);
	return 0;
}

loop(3, n => n > 0, n => n - 1, console.log);
