//Okay, this doesn't work and I don't get it
//I think I more or less got promises and stuff, I have an algorithm in my head,
//but I can't apply it, I don't get it

//I cheated and saw the solution, but I got it now
const crow = require('./crow.js');

const SCALPEL = 'scalpel'

async function locateScapel(nest) {
	//I wanted to do it with recursion, but because the way anyStorage is made, I can't
	let currentNestName = nest.name;
	let nestWithScalpel;

	while(1) {
		let nextNestName = await anyStorage(nest, currentNestName, SCALPEL);
		if(nextNestName == currentNestName) {
			nestWithScalpel = currentNestName;
			break;
		} else {
			current = next;
		}
	}

	return nestWithScalpel;
}

function locateScapel2(nest) {
	function searchForScalpel(currentNextName) {
		return anyStorage(nest, currentNextName, SCALPEL)
		.then(nextNestName => {
			if(nextNestName == currentNextName) return currentNextName;
			else return searchForScalpel(nextNestName);
		})
	}

	return searchForScalpel(nest.name);
}
