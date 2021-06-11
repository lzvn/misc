//code for the exercise
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

//my part
function reliableMultiply(a, b) {
	let result;
	for(;;) {
		try {
			result = primitiveMultiply(a, b);
			break;
		} catch(err) {
			if(!(err instanceof MultiplicatorUnitFailure)) throw err;
			//else console.log("Trying again.");
		}
	}
	return result;
}

//test of the result
console.log(reliableMultiply(8, 8));
