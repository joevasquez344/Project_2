require("dotenv").config();
var express = require("express");
var mysql = require("mysql");
var sequelize = require("sequelize");
// var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var session = require("express-session");
// Reuiring passport as we've configured it
var passport = require("./config/passport.js")
var socket = require('socket.io');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// ---------- Socket Set Up ------------// 
// WE set up our app
var server = app.listen(PORT, function () {
  console.log("now listening on port " + PORT)
});

// app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var io = socket.listen(server);

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function () {

  io.on('connection', function (socket) {
    console.log("\n==> 🌎  Listening on port:" + PORT + "\n made a socket connection" + socket.id);

    //we want to get the data from the client 
    socket.on('chat', function (data) {
      //we want to grab the data entered by the client and send it to all the othe clients in the chat
      io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
      // we use boradcast, to show other clients sharing the server
      socket.broadcast.emit('typing', data)
    });
  });

});


module.exports = app;