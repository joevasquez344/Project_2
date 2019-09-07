// var db = require("../models");

// module.exports = function(app) {
//   app.get("api/players", function(req,res) {
//     db.
//   });

//   app.post("/api/player", function(req, res) {
//     db.Player.create(req.body).then(function(dbPlayer) {
//       res.json(dbPlayer);
//     });
//   });

// }



// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };



var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/questionCards", function(req, res) {
    db.questionCards.findAll({})
    .then(function(dbquestionCards) {
      res.json(dbquestionCards);
    });
  });
};

// module.exports = function (app) {
//   app.get("/api/login", function(req, res) {
//     db.players.create({
//       username: req.body.text,
//       password: req.body.complete
//     })
//     .then(function(dbplayers) {
//       res.json(dbplayers)
//     });
//   });
// };