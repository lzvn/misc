//I'm so stupid, I could've done this as an array
var mountains = {
	model: { name: "name", height: "height", place: "place" },
	kilimanjaro: {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
	everest: {name: "Everest", height: 8848, place: "Nepal"},
	mountFuji: {name: "Mount Fuji", height: 3776, place: "Japan"},
	vaalserberg: {name: "Vaalserberg", height: 323, place: "Netherlands"},
	denali: {name: "Denali", height: 6168, place: "United States"},
	popocateptl: {name: "Popocatepetl", height: 5465, place: "Mexico"},
	montBlac: {name: "Mont Blanc", height: 4808, place: "Italy/France"}
}

function initTable() {
	let table = document.createElement("table");
	const BORDER = "2px black solid";
	table.style.border = BORDER;
	var row = document.createElement("tr");
	row.style.border = BORDER;
	var attributes = Object.keys(mountains.model);
	var cel;

	for(var attr of attributes) {
		cel = document.createElement("th");
		cel.style.border = BORDER;
		cel.innerHTML = attr;
		row.appendChild(cel);
	}
	table.appendChild(row);

	var mountainNames = Object.keys(mountains);

	for(var name of mountainNames) {
		if(name==="model") continue;

		row = null;
		row = document.createElement("tr");
		row.style.border = BORDER;

		for(let attr of attributes) {
			cel = null;
			cel = document.createElement("td");
			cel.style.border = BORDER;
			cel.innerHTML = mountains[name][attr];
			row.appendChild(cel);
		}

		table.appendChild(row);
	}

	return table;
}

document.addEventListener('DOMContentLoaded', () => {
	var body = document.getElementsByTagName("body")[0];
	var table = initTable();
	body.appendChild(table);
});
