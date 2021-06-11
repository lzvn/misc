//I didn't test this program and it might be full of small and big errors


//supposed code to inclue the script.js file into this one so that I can have the
//library of possible letters

//characterScripts from the author of the book
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
      return code >= from && code < to;
        })) {
      return script;
    }
  }
  return null;
}

//my code:
function verifyDominantDirection(text) {
	let ttbCounter;
	let rtlCounter;
	let ltrCounter;

	text.forEach((character) => {
		switch(characterScript(character.codePointAt(0)).direction) {
			case "ltr":
				ltrCounter++;
				break;
			case "rtl":
				rtlCounter++;
				break;
			case "ttb":
				ttbCounter++;
				break;
			default:
				console.log("ERROR: INVALID DIRECTION FOUND");
				return;
		}
	})
	let dominantDirection;
	let dominantCount = Math.max(ttbCounter, rtlCounter, ltrCounter);
	switch(dominantCount) {
		case ltrCounter:
			dominantDirection = "ltr";
			break;
		case rtlCounter:
			dominantDirection = "rtl";
			break;
		case ttbCounter:
			dominantDirection = "ttb";
			break;
	}
	return dominantDirection;
}
