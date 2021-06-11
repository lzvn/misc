const parser = require("./parser.js");
const evltr = require("./evaluator.js");

let code = "do(define(x #OI\n, array(10, 50)), set(x, 1))";
let parsedObject = parser.parse(code);
//console.log(parsedObject);
console.log(evltr.evaluate(parsedObject, evltr.topScope));


/*
The exercises are in the evaluator.js file in a proper section marked by comments 
and in the parser's skipSpace function (one of them is there)
*/
