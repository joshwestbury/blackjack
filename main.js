class Card{
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.imageUrl = ""
        this.cardName = ""
        if (this.rank == 1) {
            this.cardName = 'ace';
        } else if (this.rank == 11) {
            this.cardName = 'jack';
        } else if (this.rank ==12) {
            this.cardName = 'queen';
        } else if (this.rank == 13) {
            this.cardName = 'king';
        } else {
            this.cardName = this.rank;
        }
        this.imageUrl = `images/${this.cardName}_of_${this.suit}.png`
    }
}

//myCard = new Card
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

//Generate a hand of cards
class Hand {
    constructor (selector) {
        this.selector = selector;
        this.dealtCard = []
    }
    addCard () {
        var card = myDeck.cards.pop()
        this.dealtCard.push(card)
        console.log(card);
        this.draw();
    }
    draw(){
        var html = '';
        this.dealtCard.forEach(function (card) {
            html += `<img src="${card.imageUrl}">`;
        });

        $(this.selector).html(html);
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
var dealerHand = new Hand('#dealer-hand')
var playerHand = new Hand('#player-hand')
var myDeck = new Deck()


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
        playerHand.addCard();
        dealerHand.addCard();
        playerHand.addCard();
        dealerHand.addCard();






        // how do I get image url into html.
        // does addCard and getImageUrl need to be in same class?
    })



})
