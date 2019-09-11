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
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// ---------- Socket Set Up ------------// 

var io = socket.listen(
  app.listen(PORT, function () {
    console.log('making a socket connection')
  }
  )
);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  io.on('connetion', function (socket) {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      "made a connection" + socket.id
    );
  });
});



module.exports = app;