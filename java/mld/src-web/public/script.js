const $ = (arg) => {return document.querySelector(arg)};

window.addEventListener("load", () => {
	$('#search-btn').addEventListener("click", (event) => {
		$("#search-q").value !== ""||event.preventDefault();
	});
});
