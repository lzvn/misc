document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#run").onclick = () => {
		document.querySelector("pre").innerHTML = eval(document.querySelector("#code").value);
	}
	document.querySelector("#code").onkeyup = (event) => {
		if(event.keyCode === 13 && event.ctrlKey === true) document.querySelector("#run").click();
	}
})
//this doesn't deal with console.logs but his version also doesn't so whatever
//also, I don't want to build a parser to run this code and collect every bit of info that is outputed so whatever too
function eval(code) {
	var result =  Function("", code)();
	return String(result);
}
