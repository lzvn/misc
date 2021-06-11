function charCounter(phrase, letter) {
	lowCasePhrase = phrase.toLowerCase();
	lowCaseLetter = letter.toLowerCase();
	phraseLength = phrase.length;
	count = 0;
	for(let i = 0; i < phraseLength; i++) {
		if(lowCasePhrase[i]===lowCaseLetter) count++;
	}
	return count;
}

function bCounter(phrase) {
	return charCounter(phrase, "b");
}

let text = "This is a text with ";
let letter = 'i';
console.log(text + charCounter(text, letter) + ' ' + letter + " letters");
text = "Buffalo Bill ";
console.log(text + bCounter(text) + " B letters");
