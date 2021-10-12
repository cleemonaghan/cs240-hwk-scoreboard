/**
 * Scoreboard Homework
 * @author Colin Monaghan
 */

// GamePoints[0] is the home team
// GamePoints[1] is the away team
var GamePoints = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

function addPoint() {
	//retrieve the team and inning from html
	let team = document.querySelector("#who").value;
	let inning = document.querySelector("#inning").value;

	let gameIndex = 1;
	if (team == "home") {
		//increment the points for home
		gameIndex = 0;
	}
	//otherwise we increment points for away

	//add a point to the inning and refresh the html
	GamePoints[gameIndex][inning - 1] += 1;

	//add a point to the total and refresh the html
	GamePoints[gameIndex][GamePoints[gameIndex].length] += 1;
}

function subPoint() {}

function playMusic1() {}

function playMusic2() {}
