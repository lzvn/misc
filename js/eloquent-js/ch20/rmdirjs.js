//this would need the actual code from the lesson, but it can be tested with a simulation
//the urlPath function here is obviously not the one from the lesson, just here for these tests

const fs = require("fs");
const path = require("path");

let methods = Object.create(null);
methods.MKCOL = async function(request) {
	let folderPath = urlPath(request.url);
	await fs.mkdir(path.join(__dirname, folderPath), (error) => {
		if(error) throw error;
	});
	return { status: 204 };
}

methods.MKCOL({ url: "./test-folder" });

function urlPath(url) {
	return url;
}
