function Promise_all(promises) {
	return new Promise((resolve, reject) => {
		let returnedPromises = [];

		if(promises.length===0) resolve(promises);
		else promises.forEach((promise) => { returnedPromises.push(undefined) });
		
		promises.forEach((promise) => {
			promise
			.then((result) => {
				returnedPromises[promises.indexOf(promise)] = result;
				
				let emptyItem = false;
				returnedPromises.forEach((returnedPromise) => {
					if(returnedPromise===undefined) emptyItem = true;
				})

				if(returnedPromises.length >= promises.length && !emptyItem) resolve(returnedPromises);
			})
			.catch((err) => {
				returnedPromises = [];
				reject(err);
				return;
			})
		})
	})
}

//test
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    } else {
	    console.log("X");
    }
  });
