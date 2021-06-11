let text = "'I'm the cook,' he said, 'it's my job.'";
let regex = /\s'|'\s|^'|'$/g;
let replaceCall = (quote) => {
	//console.log(quote)
	let doubleQuote;
	switch(quote) {
		case " '":
			doubleQuote = " \"";
			break;
		case "' ":
			doubleQuote = "\" ";
			break;
		default:
			doubleQuote = "\"";
	}
	return doubleQuote;
}
console.log(text);
console.log(text.replace(regex, replaceCall));
// → "I'm the cook," he said, "it's my job."
