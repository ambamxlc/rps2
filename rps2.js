const hands = ["rock", "paper", "scissors"];

let gethands = ("rock", "paper", "scissors") => {
    return hands[parseInt(Math.random()*10)%3]
}

let player = {
  name: "Jimin",
  gethands: getHands
}

let player2 = {
  name: "RM",
  getHands: getHands
}

const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let playRound = (player1, player2) => {

    let hand1 = player1.getHands();
    let hand2 = player2.getHands();

    console.log(p1.name, 'threw', p1Hand);
    console.log(p2.name, 'threw', p2Hand);

    if (player1Hand === player2Hand) {
         console.log("tie");
         return null;
    }
    else if (winConditions[p1Hand] === p2Hand) {
        console.log(player1.name, 'wins!');
        return p1;
    }

    else if (winConditions[p1Hand] === p2Hand){
    }

    else {
        console.log(p2.name, 'wins!');
        return p2;
    }
let playqGame = (player1, player2, playUntil) => {

    let playerWins = 0;
    let playerWins = 0;

while (player1Wins < playUntil && player2Wins < playUntil) {

   if (playRound(player1, player2)) {

} else if (playRound(player1, player2) === player1) {
   }
   else {
       player2Wins++;
   }

if (playerWins === playUntil) {
    return player1;
} else {
    return player2
}