var ygsf = ""
var gl = 9
var wins = 0
var losses = 0


function startgame() {
	document.getElementById("wins").innerHTML="Wins: "+ wins;
    document.getElementById("losses").innerHTML="Losses: "+ losses;
    document.getElementById("gl").innerHTML="Guesses Left: "+ gl;
    document.getElementById("ygsf").innerHTML="Your Guesses so far: "+ ygsf;

}
 
 document.onkeyup=function(event){
		var key = String.fromCharCode(event.keyCode).toLowerCase();
		var position = random.indexOf(key);
		var notrepeat=(gl.indexOf(key)==(-1))
		console.log(position);
	}