var deck = [
    {point: 1, suit: 'hearts' },
    {point: 1, suit: 'spades' },
    {point: 1, suit: 'diamonds' },
    {point: 1, suit: 'clubs' },
    {point: 2, suit: 'hearts'},
    {point: 2, suit: 'spades'},
    {point: 2, suit: 'diamonds'},
    {point: 2, suit: 'clubs'},
    {point: 3, suit: 'hearts'},
    {point: 3, suit: 'spades'},
    {point: 3, suit: 'diamonds'},
    {point: 3, suit: 'clubs'},
    {point: 4, suit: 'hearts'},
    {point: 4, suit: 'spades'},
    {point: 4, suit: 'diamonds'},
    {point: 4, suit: 'clubs'},
    {point: 5, suit: 'hearts'},
    {point: 5, suit: 'spades'},
    {point: 5, suit: 'diamonds'},
    {point: 5, suit: 'clubs'},
    {point: 6, suit: 'hearts'},
    {point: 6, suit: 'spades'},
    {point: 6, suit: 'diamonds'},
    {point: 6, suit: 'clubs'},
    {point: 7, suit: 'hearts'},
    {point: 7, suit: 'spades'},
    {point: 7, suit: 'diamonds'},
    {point: 7, suit: 'clubs'},
    {point: 8, suit: 'hearts'},
    {point: 8, suit: 'spades'},
    {point: 8, suit: 'diamonds'},
    {point: 8, suit: 'clubs'},
    {point: 9, suit: 'hearts'},
    {point: 9, suit: 'spades'},
    {point: 9, suit: 'diamonds'},
    {point: 9, suit: 'clubs'},
    {point: 10, suit: 'hearts'},
    {point: 10, suit: 'spades'},
    {point: 10, suit: 'diamonds'},
    {point: 10, suit: 'clubs'},
    {point: 11, suit: 'hearts'},
    {point: 11, suit: 'spades'},
    {point: 11, suit: 'diamonds'},
    {point: 11, suit: 'clubs'},
    {point: 12, suit: 'hearts'},
    {point: 12, suit: 'spades'},
    {point: 12, suit: 'diamonds'},
    {point: 12, suit: 'clubs'},
    {point: 13, suit: 'hearts'},
    {point: 13, suit: 'spades'},
    {point: 13, suit: 'diamonds'},
    {point: 13, suit: 'clubs'}
];

$(document).ready(function () {

    setupNewGame()

    var dealerHand, playerHand;

     $('#deal-button').click(function(){
         var card, cardUrl;

         dealACard(playerHand, '#player-hand');
         dealACard(dealerHand, '#dealer-hand');
         dealACard(playerHand, '#player-hand');
         dealACard(dealerHand, '#dealer-hand');

         $('#deal-button').hide();
     })

     $('#hit-button').click(function() {
       dealACard(playerHand, '#player-hand');
       // check for bust
       if (calculatePoints(playerHand) > 21) {
         $('#messages').text('You bust!');
         gameOver();
       }
     });




    // $('#deal-button').click(function () {
    //     $("#dealer-hand").append('<img src="images/2_of_clubs.png">')
    //     $("#dealer-hand").append('<img src="images/5_of_spades.png">')
    //     $("#player-hand").append('<img src="images/9_of_hearts.png">')
    //     $("#player-hand").append('<img src="images/jack_of_spades.png">')
    // })
    // $('#hit-button').click(function () {
    //     $("#dealer-hand").append('<img src="images/6_of_diamonds.png">')
    //     $("#player-hand").append('<img src="images/4_of_hearts.png">')
    // })

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function setupNewGame() {
        var newDeck = shuffleArray(deck)
        dealerHand = [];
        playerHand = [];
    }

    function getCardImageUrl(card) {
        if (card.point == 1) {
            cardName = 'ace';
        } else if (card.point = 11) {
            cardName = 'jack';
        } else if (card.point = 12) {
            cardName = 'queen';
        } else if (card.point = 13) {
            cardName = 'king';
        } else {
            cardName = card.point;
        }
        return `images/${cardName}_of_${card.suit}.png`
    }

    function dealACard(handArray, elementSelector) {
        card = deck.pop();
        handArray.push(card);
        cardUrl = getCardImageUrl(card);
        $(elementSelector).append(
            '<img src="' + cardUrl + '">'
        );
        updateScoreDisplay();
    }

    function calculatePoints (cards) {
        //try to use reduce instead of for loop here.
        var total = 0
        for (var i=0; i < cards.length; i++) {
            total += cards[i].point
        }
        return total
    }

    function updateScoreDisplay () {
        var dealerPoints = calculatePoints(dealerHand);
        $('#dealer-points').text(dealerPoints);
        var playerPoints = calculatePoints(playerHand);
        $('#player-points').text(playerPoints);
    }

    function gameOver() {
      $('#hit-button').hide();
      $('#stand-button').hide();
      $('#play-again').show();
    }


})  // end of (document).ready
