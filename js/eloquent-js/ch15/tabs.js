document.addEventListener("DOMContentLoaded", () => {
	function tabAs(event) {
		//console.log(event.target.id);
		let btnId = event.target.id;
		if(btnId.slice(0, btnId.length -1)!=="btn-tab-") return;

		let tabNum = Number(btnId[btnId.length-1]);
		for(let i = 1; i <= 3; i++) {
			let tab = document.querySelector("#tab-" + i);
			tab.hidden = true;
			if(i===tabNum) tab.hidden = false;
		}
	}
	menu.onclick = tabAs;
})
