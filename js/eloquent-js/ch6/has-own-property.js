//necessary definition
let map = {one: true, two: true, hasOwnProperty: true};
console.log(map);

let hasOwnProperty = Symbol("hasOwnProperty");
map[hasOwnProperty] = Object.hasOwnProperty;
//console.log(Object.hasOwnProperty);

console.log(map[hasOwnProperty]("one"));

//I believe my solution above is valid, but the author's is:

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
//which doesn't require the symbol
