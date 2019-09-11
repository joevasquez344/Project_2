//Make connection
var socket = io.connect('localhost:3000/game')

//query DOM
var message = document.getElementById('message');
var button = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
// for testing ---->
var username = document.getElementById('username');

//Emit events
button.addEventListener('chat', function() {
    //setting up an object that grabs the val of the user input in th chat
    socket.emit('chat', {
        message: message.value,
        username: username.value
    })
    // var randNum = Math.floor(Math.random() * 10); 
    // alert(randNum);
})
// Here we set up an event listener to call on when there is a key pressed on
message.addEventListener('keypress', function(){
    socket.emit('typing', username.value);
})

//Listen for events
socket.on('chat', function(data){
    //we output the data to the DOM
    //remember that this event happens once we click 'send', upon clicking send we want to get rid of the 'is typing' bradcast
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.username + ':<strong> ' + data.message + "</p>"
})

socket.on('typing', function(data) {
    feedback.innerHTML = '<p><em>' + data.username + ' is typing...' + '<em></p>'
})