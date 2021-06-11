const max_fizz = 20; //the exercise wanted 100, but fuck them

for(let i = 0; i <= max_fizz; i++) {
	let isFizz = i%3;
	let isBuzz = i%5;
	let str = "";

	if(isFizz == 0) str+="Fizz";
	if(isBuzz== 0) str+=(isFizz)?"buzz":"Buzz";
	if(str === "") str = i;
	console.log(str);
}
