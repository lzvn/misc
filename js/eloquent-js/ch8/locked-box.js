const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
	//with the condition to leave it unlocked if the box is found so, for the extra points :)
	let boxPreviouslyLocked = true;
	if(box.locked) {
		box.unlock();
		boxPreviouslyLocked = false;
	}
	body(box.content);
	if(!boxPreviouslyLocked) box.lock();
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

let pirates = false;
try {
  withBoxUnlocked(function() {
    if(pirates) throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
