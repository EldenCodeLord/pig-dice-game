#Pig Dice Game





##Tests
Test1: Create a function that generates a random number.
Expectation/ Output: Generate random number.
Code: function roll() {
    let diceRoll = Math.floor(Math.random() *6) + 1;
    return diceRoll;
}
Status: Passed. 

Test2: Create a function that cumulatively adds up score, or zeroes out if a 1 is rolled.
Expectation: score increases as rolls progress, but zeroes out upon a roll of 1

Code: Player.prototype.AddRoundScore = function () {
  if (this.currentScore != 1) {
    this.roundScore += this.currentScore;
  } if (this.currentScore === 1) { 
    this.roundScore = 0;
  } else {

  return this.roundScore;
  }
}

Status: in progress

Test 3: Create a function that stores the cumulative score for each player
Expected output: Score will hold for each player unless a 1 is rolled

code: Player.prototype.AddTotalScore = function () {
  if (this.roundscore !== 0) {
    this.totalScore += this.roundScore;
  } else {
  }
}

status: