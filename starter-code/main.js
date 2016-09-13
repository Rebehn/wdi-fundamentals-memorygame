
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var score = 0;

var randomise = function(){
	for (i=0; i<25; i++){
		var x = Math.floor(Math.random()*4);
		cards.push(cards[x]);
		cards.splice(x, 1);
	}
	console.log(cards);
}

var createBoard = function(){
	var board = document.getElementById("game-board");
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute("data-card", cards[i]);
		cardElement.addEventListener("click", isTwoCards);
		board.appendChild(cardElement);
	}
}
var isMatch = function(cards){
	if (cards[0] === cards[1]){
		alert("You found a match!");
		randomise();
	} else {
		alert("Sorry, try again.");
	}
	for (i=0; i<cards.length+cardsInPlay.length; i++){
		var element = document.getElementsByClassName("card")[0];
		console.log(element);
		element.parentNode.removeChild(element);
	}
	cardsInPlay = [];
	cards = ["queen", "queen", "king", "king"];
	createBoard();
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute("data-card"));
	if (this.getAttribute("data-card") === "king") {
		this.innerHTML = "<img src='http://www.clker.com/cliparts/4/C/3/Z/t/U/king-of-hearts-md.png' alt='King'>"
	} else {
		this.innerHTML = "<img src='http://www.clker.com/cliparts/S/J/2/E/l/J/queen-of-hearts-md.png' alt='Queen'>"
	}
	if (cardsInPlay.length === 2){
		setTimeout(function(){isMatch(cardsInPlay)}, 50);
	}
}

randomise()
createBoard();