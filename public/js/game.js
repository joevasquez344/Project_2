//Intial Socket Connection

// var socket = io.connect("https://localhost:3000")

$(document).ready(function () {
    console.log("start")
    var mainDeck = [];
    var handDeck = [];
    var czarCard;
    var drawCards = [];
    $("#phase2").hide();

    getMainCards();
    getHandCards();

    function getMainCards() {
        console.log("running")
        $.get("/api/questionCards", function (data) {
            console.log(data);
            // for ( var i = 0; i < data.length; i++) {
            //     mainDeck.push(data[i]);
            // }
            // // mainDeck.push(data);
            var randomGen = Math.floor(Math.random() * data.length);
            console.log(randomGen);
            czarCard = data[randomGen].description;
            $("#blackCard").text(czarCard);
            console.log(czarCard + " this is the czar card");
        })
        // console.log(mainDeck);
    }

    function getHandCards() {
        console.log("running")
        $.get("/api/responseCards", function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                handDeck.push(data[i]);
            }
            //need to make iterations for when drawing 1-3 cards
            // for (var i = 0; i < 6; i++) {
            //     var randomGen = Math.floor(Math.random() * handDeck.length);
            //     var pushCard = handDeck[randomGen];
            //     drawCards.push(pushCard);
            // }
            var numArray = [];
            while (numArray.length < 6) {
                var randomGen = Math.floor(Math.random() * handDeck.length);
                if ($.inArray(randomGen, numArray) == -1) {
                    console.log("random number: " + randomGen);
                    numArray.push(randomGen);
                    console.log(`numArray = ${numArray}`);
                    var pushCard = handDeck[randomGen];
                    console.log(`Pushcard = ${pushCard}`);
                    drawCards.push(pushCard);
                }
            }
            for (var i = 0; i < 6; i++) {
                var counter = i + 1;
                $("#hand" + counter).text(drawCards[i].description);
            }

            console.log(drawCards + " these are you hand cards");
        })
    }

});