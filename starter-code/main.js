var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

/**if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
}**/

var createBoard = function(){
	var board = document.getElementById("game-board");
	for (var i = 0; i < 4; i++) {
		var cardEl = document.createElement("div");
		cardEl.className = "card";
		board.appendChild(cardEl);
	}
}

createBoard();