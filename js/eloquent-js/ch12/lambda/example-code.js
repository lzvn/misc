//I am making a lambda-calculus-like language in this project
//since he made almost a lisp clone with his egg language, it won't be much different than his code
//now I'm gonna put some code here of what I think this language should look like to serve as reference

//basic types
//numbers are values, no difference between intengers and floats
//strings and chars are put between double quotes and double quotes only

//comments are defined by // and /**/, like c and c++ and js

//increment and decrement
++(x)
--(x)

//basic operations of two numbers
+(10, 20) // 10 + 20
-(10, 20) // 10 - 20
*(10, 20) // 10 * 20
/(10, 20) // 10 / 20 /*fucking regular expressions*/

//assignment
=(x, 10) // x = 10

//comparisons
==(x, 5) // x === 5
!=(x, 5) // x !== 5
<(x, 5) // x < 5
//and so forth

//function definition
=(sum, lambda( (x, y), +(x, y) ) )
//define sum(x, y) as x + y, lambda is also for anonymous functions

//////////////////////now the block the parser will generate
//this is not exactly like he did
// for +()
{
	type: "func",
	name: "+",
	args: [
		{ type: "var", name: "x", value: 0 }, //supposing x is 0
		{ type: "value", name: "5", value: 5 }
	]
}
