$(document).ready(function(){

var points = 0;
var emerald = 0;
var gem = 0;
var sapphire = 0;
var zircon = 0;
var wins = 0;
var losses = 0;


	function randomizeNumber(a,b) {

		return Math.floor(Math.random() * a) + b;

	};

	var randomNumber = randomizeNumber(101,19);

		$("#randomNumber").html(randomNumber);

		console.log(randomNumber);


	$("#emerald").on("click", function() {
		if (emerald) {

			points = points + emerald;
			$("#points").html(points + emerald);
			totalScore();
	
		} else{

			emerald = randomizeNumber(11,1);
			console.log(emerald);
		}

	});

	$("#gem").on("click", function() {

		if (gem) {

			points = points + gem;
			$("#points").html(points);
			totalScore();

		} else {

			gem = randomizeNumber(11,1);
			console.log(gem);
		}

	});

	$("#sapphire").on("click", function() {
		if (sapphire) {

			points = points + sapphire;
			$("#points").html(points);
			totalScore();
	
		} else{

			sapphire = randomizeNumber(11,1);
			console.log(sapphire);
		}

	});

	$("#zircon").on("click", function() {
		if (zircon) {

			points = points + zircon;
			$("#points").html(points);
			totalScore();
	
		} else{

			zircon = randomizeNumber(11,1);
			console.log(zircon);
		}

	});

	function newGame() {
		randomNumber = 0;
		points = 0;
		emerald = 0;
		gem = 0;
	    sapphire = 0;
 		zircon = 0;

	};

	function totalScore() {
		if (points > randomNumber) {
			losses++;
			$("#losses").html("Losses: " + losses);
			alert("You lost");
			newGame();		
		}

		else if (points == randomNumber) {
			wins++;
			$("#wins").html("Wins: " + wins);
			alert("You won")
			newGame();
		};

	};

});






	