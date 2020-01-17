
class Card {
  constructor (rank, suit, value) {
    this.rank = rank
    this.suit = suit
    this.value = value
  }
}

class Deck {
  constructor() {
    this.cards = []
    
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ]
    
    let suits = [
      "Heart",
      "Club",
      "Diamond",
      "Spade"
    ]
  
    /** Imperative: with `for` loops */
//     for (let i = 0; i < ranks.length; i++) {
//       for (let j = 0; j < suits.length; j++) {
//         let rank = ranks[i]
//         let suit = suits[j]
//         let value = i
        
//         this.cards.push(new Card(rank, suit, value))
//       }   
//     }
    
    /** Declarative: with `Array.forEach` methods */
    ranks.forEach((rank, value) => {
      suits.forEach(suit => this.cards.push(new Card(rank, suit, value)))
    })
  } // end of Deck constructor
  
  /** for shuffling, research how to shuffl the contnents of an Array.
   * if you see "Fisher-Yates" or "Knuth", your getting warm!
   */
}

const deck = new Deck()

//console.log(deck.cards)

let newDeck = deck.cards;

//console.log(newDeck)



//shuffles Deck
function shuffle(newDeck) {
  var currentIndex = newDeck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newDeck[currentIndex];
    newDeck[currentIndex] = newDeck[randomIndex];
    newDeck[randomIndex] = temporaryValue;
  }

  return newDeck;
}

// Create shuffledDeck variable
shuffledDeck = shuffle(newDeck);


//deal the deck / split deck into two
playerTwoDeck = shuffledDeck.splice(26,52);
playerOneDeck = shuffledDeck.splice(0,26);


//draw a card from deck function
function drawPlayerTwoCard() {
  card2 = playerTwo.deckTwo.pop();
  playerTwo.playerTwoCardInWar.unshift(card2)
  // console.log(`Player 2 War Card: ${playerTwo.playerTwoCardInWar[0]}`)
  // console.log(`Player 2 Card: ${card2}`)
}
function drawPlayerOneCard() {
  card1 = playerOne.deckOne.pop();
  // console.log(`Player 1 Card: ${card1}`)
  playerOne.playerOneCardInWar.unshift(card1)
  // console.log(`Player 1 War Card: ${playerOne.playerOneCardInWar[0]}`)

  // console.log(`Player 1 Card: ${card1}`)
}

//Player Object
//Has Assigned Deck and a Card to war with
playerOne = {
  deckOne: playerOneDeck,
  playerOneCardInWar: [],
  num: 99

};

playerTwo = {
  deckTwo: playerTwoDeck,
  playerTwoCardInWar: [],
  num: 99

};
//array for cards in comparison
// var warCards = [playerTwo.playerTwoCardInWar, playerOne.playerOneCardInWar];

//comapison plaver1 vs Player2 cards warr!!
// while (playerTwo.deckTwo.length > 0 && playerOne.deckOne.length > 0) 
 
function warRound() {
   if (playerTwo.deckTwo.length == 0) {
    console.log("PLAYER 1 IS THE WINNER!")
  } else if (playerOne.deckOne.length == 0) {
    console.log("PLAYER 2 IS THE WINNER")
  } else if (playerTwo.playerTwoCardInWar[0].value == playerOne.playerOneCardInWar[0].value) {
    card2Outcome = playerTwo.playerTwoCardInWar.pop()
    playerTwo.deckTwo.unshift(card2Outcome);
    card1Outcome = playerOne.playerOneCardInWar.pop()
    playerOne.deckOne.unshift(card1Outcome);
    console.log("Love Over WARR guys! Tie.")
  } else if (playerTwo.playerTwoCardInWar[0].value < playerOne.playerOneCardInWar[0].value) { 
    card2Outcome = playerTwo.playerTwoCardInWar.pop()
    card1Outcome = playerOne.playerOneCardInWar.pop()
    playerOne.deckOne.unshift(card1Outcome, card2Outcome);
    console.log("Player One Wins")
  } else {
    card2Outcome = playerTwo.playerTwoCardInWar.pop()
    card1Outcome = playerOne.playerOneCardInWar.pop()
    playerTwo.deckTwo.unshift(card2Outcome, card1Outcome);
    console.log("Player Two Wins")
  }
}
function autoRound () {
  drawPlayerTwoCard();
  drawPlayerOneCard();
  warRound();
  console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
  console.log("Player 1 Deck : " + playerOne.deckOne.length)
}


function nerdyWarRound () {
  drawPlayerTwoCard();
  console.log(playerTwo.playerTwoCardInWar[0])
  drawPlayerOneCard();
  console.log(playerOne.playerOneCardInWar[0])
  warRound();
  console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
  console.log("Player 1 Deck : " + playerOne.deckOne.length)
}

function warLoop() {
  while (playerTwo.deckTwo.length > 0 && playerOne.deckOne.length > 0) {
  drawPlayerTwoCard();
  console.log(playerTwo.playerTwoCardInWar[0])
  drawPlayerOneCard();
  console.log(playerOne.playerOneCardInWar[0])
  warRound();
  console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
  console.log("Player 1 Deck : " + playerOne.deckOne.length)
 }
}












































// class Card {
//   constructor (rank, suit, value) {
//     this.rank = rank
//     this.suit = suit
//     this.value = value
//   }
// }

// class Deck {
//   constructor() {
//     this.cards = []
    
//     let ranks = [
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "Jack",
//       "Queen",
//       "King",
//       "Ace"
//     ]
    
//     let suits = [
//       "Heart",
//       "Club",
//       "Diamond",
//       "Spade"
//     ]
  
//     /** Imperative: with `for` loops */
// //     for (let i = 0; i < ranks.length; i++) {
// //       for (let j = 0; j < suits.length; j++) {
// //         let rank = ranks[i]
// //         let suit = suits[j]
// //         let value = i
        
// //         this.cards.push(new Card(rank, suit, value))
// //       }   
// //     }
    
//     /** Declarative: with `Array.forEach` methods */
//     ranks.forEach((rank, value) => {
//       suits.forEach(suit => this.cards.push(new Card(rank, suit, value)))
//     })
//   } // end of Deck constructor
  
//   /** for shuffling, research how to shuffl the contnents of an Array.
//    * if you see "Fisher-Yates" or "Knuth", your getting warm!
//    */
// }

// const deck = new Deck()

// //console.log(deck.cards)

// let newDeck = deck.cards;

// //console.log(newDeck)



// //shuffles Deck
// function shuffle(newDeck) {
//   var currentIndex = newDeck.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = newDeck[currentIndex];
//     newDeck[currentIndex] = newDeck[randomIndex];
//     newDeck[randomIndex] = temporaryValue;
//   }

//   return newDeck;
// }


// // Create shuffledDeck variable
// shuffledDeck = shuffle(newDeck);


// //deal the deck / split deck into two
// playerTwoDeck = shuffledDeck.splice(26,52);
// playerOneDeck = shuffledDeck.splice(0,26);



// //draw a card from deck function
// function drawPlayerTwoCard() {
//   card2 = playerTwo.deckTwo.pop();
//   playerTwo.playerTwoCardInWar.unshift(card2)
// }
// function drawPlayerOneCard() {
//   card1 = playerOne.deckOne.pop();
//   playerOne.playerOneCardInWar.unshift(card1)
// }

// card2Outcome = playerTwo.playerTwoCardInWar.pop()
// playerTwo.deckTwo.push(card2Outcome);
// card1Outcome = playerOne.playerOneCardInWar.pop()
// playerOne.deckOne.push(card1Outcome);

// //Player Objects
// //Has Assigned Deck and a Card to war with
// playerOne = {
//   deckOne: playerOneDeck,
//   playerOneCardInWar: [],
//   num: 99

// };

// playerTwo = {
//   deckTwo: playerTwoDeck,
//   playerTwoCardInWar: [],
//   num: 99

// };

// //array for cards in comparison
// // var warCards = [playerTwo.playerTwoCardInWar, playerOne.playerOneCardInWar];

// //comapison plaver1 vs Player2 cards warr!!
// // while (playerTwo.deckTwo.length > 0 && playerOne.deckOne.length > 0) 
 
// function warRound() {
//    if (playerTwo.deckTwo.length == 0) {
//     console.log("PLAYER 1 WINS!")
//   } else if (playerOne.deckOne.length == 0) {
//     console.log("PLAYER 2 WINS")
//   } else if (playerTwo.playerTwoCardInWar[0].value == playerOne.playerOneCardInWar[0].value) {
//     card2Outcome = playerTwo.playerTwoCardInWar.pop()
//     playerTwo.deckTwo.unshift(card2Outcome);
//     card1Outcome = playerOne.playerOneCardInWar.pop()
//     playerOne.deckOne.unshift(card1Outcome);
//     console.log("Love Over WARR guys! Tie.")
//   } else if (playerTwo.playerTwoCardInWar[0].value < playerOne.playerOneCardInWar[0].value) { 
//     card2Outcome = playerTwo.playerTwoCardInWar.pop()
//     card1Outcome = playerOne.playerOneCardInWar.pop()
//     playerOne.deckOne.unshift(card1Outcome, card2Outcome);
//     console.log("Player One Wins")
//   } else {
//     card2Outcome = playerTwo.playerTwoCardInWar.pop()
//     card1Outcome = playerOne.playerOneCardInWar.pop()
//     playerTwo.deckTwo.unshift(card2Outcome, card1Outcome);
//     console.log("Player Two Wins")
//   }
// }

// //game over function

// function gameOver() {
//      console.log("Game Over");
//      if (playerTwo.deckTwo.length = 0) {
//        Console.log("Player One Wins!")
//      }
//      else {
//        console.log("Player Two Wins")
//      }
//      playerTwo.deckTwo.length = 0;
//      playerTwo.playerTwoCardInWar.length = 0;
//      playeOne.deckOne.length = 0;
//      playeOne.playerOneCardInWar.length = 0;
//      shuffle(newDeck);
//   }

// //   console.log(opponent.name +" wins!");
// //   opponent.wonDeck = opponent.wonDeck.concat(opponent.warDeck, this.currentDeck, this.wonDeck, this.warDeck);
// //   opponent.warDeck = [];
// //   this.currentDeck = [];
// //   this.wonDeck = [];
// //   this.warDeck = [];




// // function warRound () {
//   // drawPlayerTwoCard();
//   // drawPlayerOneCard();
//   // warRound();
//   // console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
//   // console.log("Player 1 Deck : " + playerOne.deckOne.length)
// // }


// // function nerdyWarRound () {
//   // drawPlayerTwoCard();
//   // console.log(playerTwo.playerTwoCardInWar)
//   // drawPlayerOneCard();
//   // console.log(playerOne.playerOneCardInWar)
//   // warRound();
//   // console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
//   // console.log("Player 1 Deck : " + playerOne.deckOne.length)
// // }

// // function warLoop() {
//   // while (playerTwo.deckTwo.length > 0 && playerOne.deckOne.length > 0) {
//   // drawPlayerTwoCard();
//   // drawPlayerOneCard();
//   // warRound();
//   // console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
//   // console.log("Player 1 Deck : " + playerOne.deckOne.length)
// //  }
// // }

// //Tie Breaker Draw
// // function tieBreakTwoDraw() {
// //   if (playerTwo.deckTwo.length >= 3) { 
//   //will extract more cards from decks
//   // tieBreakPlayerTwo = playerTwo.deckTwo.splice(-3, 3)
//   // playerTwo.playerTwoCardInWar.unshift(tieBreakPlayerTwo)
//   // } else if (playerTwo.deckTwo.length >= 2) { 
//   // tieBreakPlayerTwo = playerTwo.deckTwo.splice(-2, 2)
//   // playerTwo.playerTwoCardInWar.unshift(tieBreakPlayerTwo)
//   // } else {
//   // card2 = card2
//   // }
//   // function tieBreakOneDraw() {
//   //   if (playerOne.deckOne.length >= 3) { 
//   //   //will extract more cards from decks
//   //   tieBreakPlayerOne = playerOne.deckOne.splice(-3, 3)
//   //   playerOne.playerOneCardInWar.unshift(tieBreakPlayerOne)
//   //   } else if (playerOne.deckOne.length >= 2) { 
//   //   tieBreakPlayerOne = playerOne.deckOne.splice(-2, 2)
//   //   playerOne.playerOneCardInWar.unshift(tieBreakPlayerOne)
//   //   } else {
//   //   card1 = card1
//   //   }

//     //tie break extraction
//     // playerOne.playerOneCardInWar[0].shift()

//     // playerOne.playerOneCardInWar.pop()

// //}
// //function shortDeckTieBreak
// //.splice(-3, 3)