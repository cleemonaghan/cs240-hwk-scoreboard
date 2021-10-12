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

function subPoint() {
	//retrieve the team and inning from html
	let team = document.querySelector("#who").value;
	let inning = document.querySelector("#inning").value;

	let gameIndex = 1;
	if (team == "home") {
		//decrement the points for home
		gameIndex = 0;
	}
	//otherwise we decrement points for away

	//check if we can decrement
	if (GamePoints[gameIndex][inning - 1] > 0) {
		//remove a point to the inning and refresh the html
		GamePoints[gameIndex][inning - 1] -= 1;
		document.querySelector(`#${team}${inning}`).innerHTML =
			GamePoints[gameIndex][inning - 1];

		//remove a point to the total and refresh the html
		GamePoints[gameIndex][GamePoints[gameIndex].length - 1] -= 1;
		document.querySelector(`#${team}total`).innerHTML =
			GamePoints[gameIndex][GamePoints[gameIndex].length - 1];
	}
}

/**
 * When the left button (the one with music notes) is pressed, this function will randomly play
 * one of: charge1.mp3, charge2.mp3, or buildup.mp3. And also randomly display one
 * of the images to the right of the box score.
 */
function playMusic1() {
	//select a random song
	let song;
	let rand = Math.random();
	if (rand < 0.33) song = "sounds/charge1.mp3";
	else if (rand > 0.67) song = "sounds/charge2.mp3";
	else song = "sounds/buildup.mp3";

	//play the audio
	let audioElement = new Audio(song);
	audioElement.addEventListener("canplaythrough", () => {
		// The duration variable now holds the duration (in seconds) of the audio clip
		let duration = audioElement.duration;
		//play the adio
		audioElement.play();
	});

	//select a random image
	let img;
	rand = Math.random();
	if (rand < 0.33) img = "images/megaphone.png";
	else if (rand > 0.67) img = "images/sdchicken.jpg";
	else img = "images/ups.png";

	//select the image from the html
	let htmlImageObject = document.querySelector("#scoreboardImage");
	console.log(htmlImageObject);
	htmlImageObject.src = img;
}

function playMusic2() {}
