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

class Player1 extends Game {
  //add constructors
  constructor() {
    super(player1Deck, this.player1CardInDraw)
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



//create shuffledDeck functionality
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
//newDeck is whats returned from shuffle function
shuffledDeck = shuffle(newDeck);
//console.log(shuffledDeck);
//console.log(shuffledDeck.length);

//deal the deck / split deck into two

playerTwoDeck = shuffledDeck.splice(26,52);
playerOneDeck = shuffledDeck.splice(0,26);

//console.log(playerOneDeck);
console.log(playerOneDeck.length);

console.log(playerTwoDeck.length);


