require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
//require web sockets (socket.io)
var socket = require('socket.io');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");


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

// WE set up our app
var server = app.listen(PORT, function () {
  console.log("now listening on port " + PORT)
});


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


var io = socket.listen(server);

// now socket.io is waiting for a connection to from a cliet
//we LISTEN UP for a conection
io.on('connection', function (socket) {
    console.log("\n==> 🌎  Listening on port:" + PORT + "\n made a socket connection" + socket.id);
    //make connectin on the front end by establishing the socket cdn on the front and
    //src script tag at the bottom that refrences a seprerate js file with a connection to localhost

    //we want to get the data from the client 
    socket.on('chat', function (data) {
        //we want to grab the data entered by the client and send it to all the othe clients in the chat
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
        // we use boradcast, to show other clients sharing the server
        socket.broadcast.emit('typing', data)
    })
});




module.exports = app;