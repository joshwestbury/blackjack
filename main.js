class Card{
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
        //generate image url
    getImageUrl () {
        var cardName;
        if (this.rank == 1) {
            cardName = 'ace';
        } else if (this.rank == 11) {
            cardName = 'jack';
        } else if (this.rank ==12) {
            cardName = 'queen';
        } else if (this.rank == 13) {
            cardName = 'king';
        } else {
            cardName = this.rank;
        }
        return `images/${cardName}_of_${this.suit}.png`
    }
}

// myCard = new Card
// myCard.getImageUrl();

    //Generate a deck of cards
class Deck{
    constructor (rank, suit) {
        this.ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.cards = [];
    }
        // Create 52 cards
    makeDeck () {
        for(var i = 0; i < this.suits.length; i++) {
          for(var j = 0; j < this.ranks.length; j++) {
             this.cards.push(new Card(this.ranks[j], this.suits[i]));
            }
        }
    }
        //shuffle the deck of cards
    shuffleDeck () {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this.cards;
    }
}

    //create a deck instance
var myDeck = new Deck()

    //Generate a hand of cards
class Hand {
    constructor (dealtCard) {
        this.dealtCard = []
    }
    addCard () {
        var card = myDeck.cards.pop()
        return this.dealtCard.push(card)
    }
    getPoints () {
        var total = 0
        for (var i = 0; i < this.dealtCard.length; i++) {
          if (this.dealtCard[i].rank < 10) {
            total += this.dealtCard[i].rank
          }
          else {
            total += 10
          }
        } return console.log(total)
      }
    }


//Game variables
var dealerHand = new Hand()
var playerHand = new Hand()



function setupNewGame() {
    $('#play-again-button').hide();
    $('#deal-button').hide();
    $('#hit-button').hide();
    $('#stand-button').hide();
    $('#messages').hide()
    myDeck.makeDeck();
}

function clearHand() {
    dealerHand
    playerHand
    $('img').remove();
    $('#dealer-points').empty();
    $('#player-points').empty();
    $('#dealer-hand').empty();
    $('#player-hand').empty();
}

function showButtons() {
    $('#deal-button').show();
    $('#hit-button').show();
    $('#stand-button').show();
}

//****** GAME PLAY ******

$(document).ready(function () {
    setupNewGame();
    clearHand();
    //updateScoreDisplay -- do I need this?
    myDeck.shuffleDeck();

    $('#start-button, #play-again-button').click(function() {
        showButtons();
    })
    $('#deal-button').click(function(){
        console.log(playerHand.addCard());
        console.log(dealerHand.addCard());
        console.log(playerHand.addCard());
        console.log(dealerHand.addCard());

        console.log(dealerHand.dealtCard[0].getImageUrl());

    })



})
