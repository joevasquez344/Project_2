//Intial Socket Connection

// var socket = io.connect("https://localhost:3000")

$(document).ready(function () {
    console.log("start")
    var mainDeck = [];
    var handDeck = [];
    var czarCard;
    var drawCards = [];
    var playerCount = 0;
    var seconds = 20;
    var intervalId;


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
                // $("#button" + counter).text(drawCards[i].description);
            }


            console.log(drawCards + " these are you hand cards");
        })
    }
    // $(".cardTemplate").click(function(){
    //     var cardDescription = document.querySelector('.cardTemplate').children[0].innerText;
    //     alert(cardDescription);

    //   });
    //   $('<button>').click(function($button){
    //     var cardDescription = $button.text();
    //     alert(cardDescription)
    //   })
    $("#userHand").on('click', 'button', function (e) {
        var idClicked = e.target.id;
        // alert(idClicked)
        console.log(idClicked)
        $("#player1Choice").text(drawCards[idClicked].description);
        $("#blackCard").text(czarCard);
        console.log(drawCards[idClicked].description);
        drawCards.splice(idClicked, 1);
    })



    //   $("#choiceButton").on('click', function(){
    //       var cardDescription = document.getElementById("choiceButton").value;
    //       alert(cardDescription);
    //   })
    var roundCount = 0;
    function count() {
        seconds--;
        $("#timeRemaining").html(seconds);
        resultTimeOut(seconds);
    }

    function resultTimeOut(e) {
        if (e == 0) {
            clearInterval(intervalId);
            if(roundCount == 0){
                showAnswers();
            }
            else if (roundCount == 1) {
                nextRound();
            }
        }
    }

    function newQuestion() {
        intervalId = setInterval(count, 1000);
        seconds = 20;
        $("#phase2").hide();
        $("#phase1").show();
    }
    newQuestion();

    function showAnswers(){
        intervalId = setInterval(count, 1000);
        seconds = 20;
        $("#phase1").hide();
        $("#phase2").show();
        roundCount++;
    }
    function drawCard(){
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
            while (drawCards.length < 6) {
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
                // $("#button" + counter).text(drawCards[i].description);
            }
        })
    }

    function nextRound(){
        drawCard();
        getMainCards();
        newQuestion();
        roundCount--;
    }
});