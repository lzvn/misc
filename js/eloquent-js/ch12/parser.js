class SyntaxError extends Error {}

function parseExpression(program) {
	program = skipSpace(program);
	let match, expr;

	if(match = /^"([^"]*)"/.exec(program)) {
		expr = { type: "value", value:match[1] };
	} else if(match = /^\d+\b/.exec(program)) {
		expr = { type: "value", value: Number(match[0]) };
	} else if(match = /^[^\s(),#"]+/.exec(program)) {
		expr = { type: "word", name: match[0] };
	} else {
		throw new SyntaxError("Unexpected expression: " + program);
	}

	return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
	//this line is the exercise to remove comments in the form of # ... \n
	string = string.replace(/(#.+)\S|$/, "");

	let first = string.search(/\S/);
	if(first === -1) return "";
	return string.slice(first);
}

function parseApply(expr, program) {
	program = skipSpace(program);

	if(program[0] != "(") return { expr: expr, rest: program };

	program = skipSpace(program.slice(1));
	expr = { type: "apply", operator: expr, args: [] };
	while(program[0]!=")") {
		let arg = parseExpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);
		if(program[0] == ",") program = skipSpace(program.slice(1));
		else if(program[0] != ")") throw new SyntaxError("Expected ',' or ')'");
	}
	return parseApply(expr, program.slice(1));
}

function parse(program) {
	let { expr, rest } = parseExpression(program);
	if(skipSpace(rest).length>0) throw new SyntaxError("Unexpected text after end of program: " + rest);
	return expr;
}

module.exports = {
	parse: parse,
	parseApply: parseApply,
	skipSpace: skipSpace,
	parseExpression: parseExpression
}
