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

init();

function init() {
	//initialize the html for home team
	for (let i = 1; i < GamePoints[0].length; i++) {
		document.querySelector(`#home${i}`).innerHTML = GamePoints[0][i - 1];
	}
	document.querySelector(`#hometotal`).innerHTML =
		GamePoints[0][GamePoints[0].length - 1];

	//initialize the html for away team
	for (let i = 1; i < GamePoints[0].length; i++) {
		document.querySelector(`#away${i}`).innerHTML = GamePoints[1][i - 1];
	}
	document.querySelector(`#awaytotal`).innerHTML =
		GamePoints[1][GamePoints[1].length - 1];
}

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
	document.querySelector(`#${team}${inning}`).innerHTML =
		GamePoints[gameIndex][inning - 1];

	//add a point to the total and refresh the html
	GamePoints[gameIndex][GamePoints[gameIndex].length - 1] += 1;
	document.querySelector(`#${team}total`).innerHTML =
		GamePoints[gameIndex][GamePoints[gameIndex].length - 1];
}

function subPoint() {}

function playMusic1() {}

function playMusic2() {}
