$(document).ready(function() {
$(document).on('click', "#submit", insertNewPlayer);
var $usernameInput = $("#usernameInput");
var $inputPassword = $("#inputPassword");
var $exampleInputEmail1 = $("exampleInputEmail1");

function insertNewPlayer(event) {
    event.preventDefault();
    var newPlayer = {
      username: $usernameInput.val().trim(),
      password: $inputPassword.val().trim(),
      email: $exampleInputEmail1.val().trim()
    };

    $.post("/api/players", newPlayer);
    
  }


})