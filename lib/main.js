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
    
      for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < suits.length; j++) {
          let rank = ranks[i]
          let suit = suits[j]
          let value = i
          
          this.cards.push(new Card(rank, suit, value))
        }   
      }
    }
  }
  
  const deck = new Deck()
  
  console.log(deck)

  //player1 subclass of deck
  class PlayerOneDeck extends Deck {
    constructor(rank, suit, value) {
        super(cardsInDeck, cardinDraw);
        this.rank = rank;
        this.suit = suit;
        this.value = value;

    }
    drawCardFromDeck() {

    }
    addCardsToDeck() {

    }
}

//player 2 subclass of deck
class PlayerTwoDeck extends Deck {
  constructor(rank, suit, value) {
        super(cardsInDeck[i], cardinDraw);
        this.rank = rank;
        this.suit = suit;
        this.value = value;

    }
    drawCardFromDeck() {

    }
    addCardsToDeck() {

    }
}