function compareRobot(robot1, mem1, robot2, mem2) { 
	//four arguments, I'm sorry Uncle Bob
	let taskNumber = 100;
	let testMap = new Graph(roads); //roads from the lesson;
	let testState = new VillageState.random(taskNumber);
	//supposedly, I've made a change to runRobot so that it returns the number of turns taken :)
	let resultRobot1 = runRobot(testState, robot1, mem1);
	let resultRobot2 = runRobot(testState, robot2, mem2);
	console.log("The average number of steps per tasks of the first robot is %s", resultRobot1/taskNumber);
	console.log("The average number of steps per tasks of the second robot is %s", resultRobot2/taskNumber);
}
