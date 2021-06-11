const fs = require("fs");
const path = require("path");

let args = process.argv;
let regexString = "";
let flags = "g";
let appendToFlags = false;

for(let i = 0; i < args[2].length; i++) {
	//console.log(args[2][i]);
	if(i==0 && args[2][i]=="/") continue;
	if(i > 0 && args[2][i]=="\\" && args[2][i+1]=="/") {
		regexString = regexString.concat("/");
		//console.log(regexString);
		i++;
		continue;
	}
	if(i > 0 && args[2][i] == "/") {
		appendToFlags = true;
		continue;
	}
	if(!appendToFlags) {
		regexString = regexString.concat(args[2][i]);
	} else {
		if(args[2][i] == "g") continue;
		else flags = flags.concat(args[2][i]);
	}
}

let regex = new RegExp(regexString, flags);

args.slice(3, args.length).forEach((dir) => {
	new Promise((resolve, reject) => {
		fs.lstat(dir, (err, stats) => {
			if(err) reject(err);
			resolve(stats);
		})
		
	}).then((stats) => {
		if(stats.isFile()) {
			fs.readFile(dir, "utf8", (error, text) => {
				if(error) throw error;
				console.log(text);
				grep(regex, text);
			});
		} else {
			fs.readdir(dir, (err, files) => {
				files.forEach(file => {
					let fileShow = false;
					fs.readFile(path.join(dir, file), "utf8", (error, text) => {
						if(!fileShow) {
							console.log("At file " + file);
							fileShow = true;
						}
						if(error) throw error;
						grep(regex, text);
					})
				})
			});
		}
	}).catch((err) => {
		console.log(err);
	})
})

function grep(regex, text) {
	let found;
	while(found = regex.exec(text)) console.log(found[0] + " at character " + found.index);
}
