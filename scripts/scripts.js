//Business Logic:
function roll() {
    let diceRoll = Math.floor(Math.random() *6) + 1;
    return diceRoll;
}
function Player() {
    this.totalScore = 0; //running score for the player
    this.currentScore = 0; //score for this round
    this.turn = true; // allows switching between players
}

let player1 = new Player(0, 0, 0);
let player2 = new Player(0, 0, 0);

Player.prototype.AddRoundScore = function () {
  if (this.currentScore != 1) {
    this.totalScore += this.currentScore;
  } if (this.currentScore === 1) { 
    this.roundScore = 0;
  } else {

  return this.roundScore;
  }
}

Player.prototype.AddTotalScore = function () {
  if (this.roundscore !== 0) {
    this.totalScore += this.roundScore;
  } else {
  }
}

Player.prototype.playerTurn = function() {
  if (player1.turn) {
    player1.turn = false;
    player1.turn = true;
  }else{
    player2.turn = true;
    player2.turn = false;
    //player1Card.style.display = "none";
   // player2Card.removeAttribute("style");
  }
}

Player.prototype.BigRoller = function (player1TotalScore, player2TotalScore) {
    if (newPlayer1.totalScore >= 100) {
      return "player 1 is a Big Roller!";
    } else if (newPlayer2.totalScore >= 100) {
      return "player 2 is a Big Roller!";
    } else {
    }
  }

// User Interface Logic:
window.addEventListener("load", function() {
  
  const p1RollButton = document.getElementById("player1-roll")
  const p2RollButton = document.getElementById("player2-roll")
  const p1HoldButton = document.getElementById("player1-hold")
  const p2HoldButton = document.getElementById("player2-hold")
  //const player1Card = document.querySelector("card1");
 // const player2Card = document.querySelector("card2");
   // player2Card.style.display = "none";
  let dieRoll = roll()


p1RollButton.addEventListener("click", function(event)   {
    
    p1DieRoll = document.getElementById("p1-current-score");
    p1DieRoll.innerText = dieRoll
    p1RoundScore = document.getElementById("p1-round-score");
    p1RoundScore.innerText = player1.currentScore
      if (dieRoll !== 1){
        player1.currentScore += dieRoll;
      }else{
        player1.currentScore = 0;
        player1.playerTurn()
      }
    })

p1HoldButton.addEventListener("click", function(event){
  if (player1.turn){
   player1.AddTotalScore()
    player1.playerTurn()
 }
})   

p2RollButton.addEventListener("click", function(event) {

    p2DieRoll = document.getElementById("p2-current-score");
    p2DieRoll.innerText = dieRoll
    p2RoundScore = document.getElementById("p2-round-score");
    p2RoundScore.innerText = player2.currentScore
      if (dieRoll !== 1){
        player2.currentScore += dieRoll;
      }else{
        player2.currentScore = 0;
        player2.playerTurn()
      }
  })
});