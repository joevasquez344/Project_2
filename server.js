require("dotenv").config();
var express = require("express");
var socket = require('socket.io');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// WE set up our app
var server = app.listen(PORT, function () {
    console.log("now listening on port " + PORT)
});


app.use(express.static("public"));


// Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// ---------- Socket Set Up ------------// 


var io = socket.listen(server);

// var sqlz = db.sequelize.sync(syncOptions);
// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
//   io.on('connetion', function (socket) {
//     console.log(
//       ("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser." + PORT),
//       ("made a connection" + socket.id)
//     );
//   });
// });

io.on('connection', function (socket) {
    console.log(
        "==> 🌎  Listening on port" + PORT +
        "\nmade a socket connection" + socket.id
    );

    //we want to get the data from the client 
    socket.on('chat', function (data) {
        //we want to grab the data entered by the client and send it to all the othe clients in the chat
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
        // we use boradcast, to show other clients sharing the server
        socket.broadcast.emit('typing', data)
    })
})



module.exports = app;