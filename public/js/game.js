$(document).ready(function () {
    // var playerList = $(".playerList");
    var mainDeck = [];

    getCards();

    function getCards() {
        $.get("/api/questionCards", function (data) {
            console.log(data);
            mainDeck = data;
        })

        // $(".playerList").append(mainDeck);
        console.log(mainDeck);
    }

    
});