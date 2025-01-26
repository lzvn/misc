window.addEventListener("load", () => {
	searchBtn = document.getElementById('search-btn');
	console.log(searchBtn);
	searchBtn.addEventListener("click", (event) => {
		document.getElementById("search-q").value !== ""||event.preventDefault();
	});
});