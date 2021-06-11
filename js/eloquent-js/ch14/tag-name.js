//paste this code on the book's page and run it

function getByTag(tag) {
	tag = tag.toLowerCase();
	let bodyNodes = document.body.childNodes;
	function scan(tag, nodes) {
		let found = [];
		nodes.forEach((node) => {
			if(node.childNodes.length>0) {
				let childrenFound = scan(tag, node.childNodes);
				if(childrenFound.length>0) found.concat(childrenFound);
			}
			if(node.nodeName.toLowerCase() === tag) {
				found.push(node);
			}
		})
		return found;
	}
	return scan(tag, bodyNodes);
}

document.addEventListener("DOMContentLoaded", () => {
	console.log(getByTag("p"));
})
