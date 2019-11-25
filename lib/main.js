class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = {}
    this.playerTwo = {} 
  }
  startGame() {
    //input: shuffle deck
    //
  }
  


}




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
}
function drawPlayerOneCard() {
  card1 = playerOne.deckOne.pop();
  playerOne.playerOneCardInWar.unshift(card1)
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
    console.log("PLAYER 1 WINS!")
  } else if (playerOne.deckOne.length == 0) {
    console.log("PLAYER 2 WINS")
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
// function warRound () {
  // drawPlayerTwoCard();
  // drawPlayerOneCard();
  // warRound();
  // console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
  // console.log("Player 1 Deck : " + playerOne.deckOne.length)
// }


// function nerdyWarRound () {
//   drawPlayerTwoCard();
//   console.log(playerTwo.playerTwoCardInWar)
//   drawPlayerOneCard();
//   console.log(playerOne.playerOneCardInWar)
//   warRound();
//   console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
//   console.log("Player 1 Deck : " + playerOne.deckOne.length)
// }

// function warLoop() {
//   while (playerTwo.deckTwo.length > 0 && playerOne.deckOne.length > 0) {
//   drawPlayerTwoCard();
//   drawPlayerOneCard();
//   warRound();
//   console.log("Player 2 Deck : " + playerTwo.deckTwo.length)
//   console.log("Player 1 Deck : " + playerOne.deckOne.length)
//  }
// }