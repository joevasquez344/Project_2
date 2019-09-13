var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/questionCards", function(req, res) { 
    console.log("in server")
    db.question_cards.findAll({where: {played: false}})
    .then(function(dbquestionCards) {
      res.json(dbquestionCards);
    });
  });

  app.get("/api/responseCards", function(req, res) {
    console.log("in server")
   
    db.response_cards.findAll({where: {played: false}})
    .then(function(dbresponseCards) {
      res.json(dbresponseCards);
    });
  });

  app.get("/api/players", function(req, res) {
    db.players.findAll({})
    .then(function(dbplayers) {
      res.json(dbplayers);
    });
  });

  app.post("/api/players", function(req, res) {
    db.players.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
    .then(function(dbplayers) {
      res.json(dbplayers);
    });
  })
  

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

