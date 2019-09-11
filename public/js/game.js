//Intial Socket Connection

var socket = io.connect("https://localhost:3000")

$(document).ready(function () {
    var mainDeck = [];
    var handDeck = [];
    var czarCard;
    var drawCards = [];

    getMainCards();
    getHandCards();

    function getMainCards() {
        $.get("/api/questionCards", function (data) {
            console.log(data);
            for ( var i = 0; i < data.length; i++) {
                mainDeck.push(data[i]);
            }
            // mainDeck.push(data);
            var randomGen = Math.floor(Math.random() * mainDeck.length);
            console.log(randomGen);
            czarCard = mainDeck[randomGen];
            console.log(czarCard + " this is the czar card");
        })
        // console.log(mainDeck);
    } 

    function getHandCards() {
        $.get("/api/responseCards", function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++){
                handDeck.push(data[i]);
            }
            //need to make iterations for when drawing 1-3 cards
            for(var i = 0; i<3; i++){
                var randomGen = Math.floor(Math.random() * handDeck.length);
                var pushCard = handDeck[randomGen];
                drawCards.push(pushCard);
            }
            console.log(drawCards + " these are you hand cards");
        })
    }
<<<<<<< HEAD
});
=======

    
});
>>>>>>> origin/workspace
