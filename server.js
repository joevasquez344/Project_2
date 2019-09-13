// require("dotenv").config();
// var express = require("express");
// var exphbs = require("express-handlebars");
// //require web sockets (socket.io)
// // var socket = require('socket.io');
// var io = require('socket.io').listen(server);


// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");


// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // ---------- Socket Set Up ------------// 
// // WE set up our app
// var server = app.listen(PORT, function () {
//   console.log("now listening on port " + PORT)
// });

// var io = socket.listen(server);

// var sqlz = db.sequelize.sync(syncOptions);

// // Starting the server, syncing our models ------------------------------------/
// // db.sequelize.sync(syncOptions).then(function() {
// //   io.on('connection', function(socket) {
// //     console.log(
// //       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
// //       PORT,
// //       "made a connection" + socket.id
// //     );
// //   });
// // });

// io.on('connection', function (socket, sqlz) {
//   console.log(
//     ("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser." + PORT),
//     ("made a connection" + socket.id)
//   );
// })

// module.exports = app;

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;