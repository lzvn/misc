//I cheated because I saw the hint
//also, I'm reusing code in the if and the else, whatever
function searcherRobot({place, parcels}, route) {
	if (route.length == 0) {
		let parcel = parcels[0];
		if (parcel.place != place) {
			route = findRoute(roadGraph, place, parcel.place);
			for(let i = 0; i < parcels.length; i++) {
				let possibleRoute = findRoute(roadGraph, place, parcels[i].place);
				let route = (route.length<=possibleRoute.length)?route:possibleRoute;
			}
		} else {
			route = findRoute(roadGraph, place, parcel.address);
			for(let i = 0; i < parcels.length; i++) {
				let possibleRoute = findRoute(roadGraph, place, parcels[i].address);
				route = (route.length<=possibleRoute.length)?route:possibleRoute;
			}
		}
	}
	return {direction: route[0], memory: route.slice(1)};
}
