const pokerDeck = Array.from(require('poker-deck'));
const pokerRank = require('poker-rank');
const pokerComb = require('poker-combinations');
const deepEqual = require('deep-equal');
const assert = require('assert');

function makeDeck(deckIndexes) {
	let i = 0;
	let deck = [];

	deckIndexes.forEach((j) => {
		deck[i] = pokerDeck[j];
		i++;
	});

	return deck;
}
/*
for(let i = 0; i<pokerDeck.length; i++) {
	console.log(i);
	console.log(pokerDeck[i]);
}
*/

let tableDeck = [];
let playerDeck1 = [];
let playerDeck2 = [];

//0 4 8 15 16 23 36, 0 4 8 are the table cards, 15 and 23 the first player's and 16 42 the second player's
console.log('Decks: ')
tableDeck = makeDeck([]);
playerDeck1 = makeDeck([43, 46, 47, 50, 51, 45, 49]);
playerDeck2 = makeDeck([43, 46, 47, 50, 51, 39, 2]);
//playerDeck3 = makeDeck([0, 4, 8, 15, 23]);

console.log(tableDeck);
console.log(playerDeck1);
console.log(playerDeck2);


let bestComb = [];
bestComb.push(pokerRank(pokerComb(playerDeck1))[0]);
bestComb.push(pokerRank(pokerComb(playerDeck2))[0]);
//bestComb.push(pokerRank(pokerComb(playerDeck3))[0]);

console.log('Best combs: ');
console.log(bestComb);
bestComb = pokerRank(bestComb);
console.log('\n Best combs ranked: ');
console.log(bestComb);

console.log('Best Combs with kickers and shit: ');
for(let i = 0; i<2; i++)
	console.log(bestComb[i]);
//console.log(bestComb[0]['exequo']);

console.log(deepEqual(bestComb[1], bestComb[2]));
